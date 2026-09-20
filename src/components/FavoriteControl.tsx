import { Bookmark } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import type { SavedWerd } from '../utils/supabase/favorites';
import './FavoriteControl.css';

export default function FavoriteControl({ werd }: { werd: SavedWerd }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <p className="favorite-feedback" role="status">Checking your collection…</p>;
  if (!user) return <Link className="favorite-button" to={`/auth/login?next=${encodeURIComponent(location.pathname + location.search)}`}><Bookmark size={17} aria-hidden="true" /> Sign in to save</Link>;
  return <SignedInFavorite key={user.id} userId={user.id} werd={werd} />;
}

function SignedInFavorite({ userId, werd }: { userId: string; werd: SavedWerd }) {
  const collection = useFavorites(userId);
  const saved = collection.favorites.some(item => item.werd_id === werd.werd_id);
  return <div className="favorite-control">
    <button className="favorite-button" type="button" aria-pressed={saved} disabled={collection.loading || !!collection.loadError || collection.pendingIds.has(werd.werd_id)} onClick={() => void collection.toggle(werd)}>
      <Bookmark size={17} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" />
      {collection.loading ? 'Opening collection…' : collection.pendingIds.has(werd.werd_id) ? 'Saving change…' : saved ? 'Saved to my collection' : 'Save to my collection'}
    </button>
    {(collection.loadError || collection.error) && <p className="favorite-feedback favorite-feedback--error" role="alert">{collection.loadError || collection.error} <button type="button" disabled={collection.pendingIds.size > 0} onClick={() => void collection.reload()}>Refresh collection</button></p>}
    <p className="favorite-feedback" role="status">{collection.message}</p>
  </div>;
}
