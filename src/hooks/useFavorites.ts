import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/client";
import { useAuth } from "../contexts/AuthContext";
import { toggleFavorite } from "../utils/supabase/favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load favorites on mount or when user changes
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    async function load() {
      setLoading(true);

      const { data, error } = await supabase
        .from("favorites")
        .select("werd_id")
        .eq("user_id", user!.id);

      if (!error && data) {
        setFavorites(data.map((f) => f.werd_id));
      }

      setLoading(false);
    }

    load();
  }, [user]);

  // Toggle handler
  async function toggle(werdId: string) {
    if (!user) return;

    const newValue = await toggleFavorite(user.id, werdId);

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
