import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchFavorites, setFavorite, type Favorite, type SavedWerd } from '../utils/supabase/favorites';

// Consumers are keyed by account ID so no previous account's collection is rendered.
export function useFavorites(userId: string | null) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());
  const pending = useRef(new Set<string>());
  const generation = useRef(0);
  const request = useRef(0);

  const loadRows = useCallback(() => {
    if (pending.current.size) return;
    const currentRequest = ++request.current;
    const currentGeneration = generation.current;
    const rowsRequest = userId ? fetchFavorites(userId) : Promise.resolve([]);
    return rowsRequest.then(rows => {
      if (currentRequest === request.current && currentGeneration === generation.current) {
        setFavorites(rows);
        setLoadError(null);
      }
    }).catch(() => {
      if (currentRequest === request.current && currentGeneration === generation.current) setLoadError('Your collection could not be loaded. Please try again.');
    }).finally(() => {
      if (currentRequest === request.current && currentGeneration === generation.current) setLoading(false);
    });
  }, [userId]);

  useEffect(() => {
    const lifetime = ++generation.current;
    void loadRows();
    return () => { generation.current = lifetime + 1; };
  }, [loadRows]);

  async function reload() {
    if (pending.current.size) return;
    setLoading(true);
    setLoadError(null);
    setError(null);
    setMessage('');
    await loadRows();
  }

  async function toggle(werd: SavedWerd) {
    const id = werd.werd_id;
    if (!userId || loading || loadError || pending.current.has(id)) return;
    const previous = favorites.find(item => item.werd_id === id);
    const saved = !previous;
    const currentGeneration = generation.current;
    pending.current.add(id);
    setPendingIds(new Set(pending.current));
    setError(null);
    setMessage('');
    setFavorites(rows => saved
      ? [{ werd_id: id, created_at: new Date().toISOString(), werd }, ...rows]
      : rows.filter(item => item.werd_id !== id));
    try {
      await setFavorite(userId, id, saved);
      if (currentGeneration === generation.current) setMessage(saved ? `${werd.werd || 'Werd'} saved to your collection.` : `${werd.werd || 'Werd'} removed from your collection.`);
    } catch {
      if (currentGeneration !== generation.current) return;
      // Restore only this Werd; another save may have completed while this request was pending.
      setFavorites(rows => previous ? [...rows.filter(item => item.werd_id !== id), previous]
        .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || '')) : rows.filter(item => item.werd_id !== id));
      setError('That change could not be confirmed. Your previous selection has been restored. Try again, or refresh your collection to check.');
    } finally {
      if (currentGeneration === generation.current) {
        pending.current.delete(id);
        setPendingIds(new Set(pending.current));
      }
    }
  }

  return { favorites, loading, loadError, error, message, pendingIds, reload, toggle };
}
