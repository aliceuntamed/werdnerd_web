import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/client";
import { toggleFavorite } from "../utils/supabase/favorites";

export function useFavorites(userId?: string) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Load favorites on mount
  useEffect(() => {
    if (!userId) return;

    async function load() {
      setLoading(true);

      const { data, error } = await supabase
        .from("favorites")
        .select("werd_id")
        .eq("user_id", userId);

      if (!error && data) {
        setFavorites(data.map((f) => f.werd_id));
      }

      setLoading(false);
    }

    load();
  }, [userId]);

  // Toggle handler
  async function toggle(werdId: string) {
    if (!userId) return;

    const newValue = await toggleFavorite(userId, werdId);

    if (newValue === true) {
      setFavorites((prev) => [...prev, werdId]);
    } else if (newValue === false) {
      setFavorites((prev) => prev.filter((id) => id !== werdId));
    }
  }

  return {
    favorites,
    loading,
    toggle,
    isFavorite: (id: string) => favorites.includes(id),
  };
}
