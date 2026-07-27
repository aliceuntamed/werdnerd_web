// hooks/useWerds.ts
import { useEffect, useState } from "react";
import { fetchWerds } from "../utils/supabase/queries";
import type { Werd } from "../types/werd";

export function useWerds(activeTag?: string | null) {
  const [werds, setWerds] = useState<Werd[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWerds();
        setWerds(data);
      } catch (loadError) {
        setWerds([]);
        setError(
          loadError instanceof Error
            ? loadError
            : new Error("Unable to load the WerdVault."),
        );
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, []);

  const filtered = activeTag
    ? werds.filter((w) => w.tags.includes(activeTag))
    : werds;

  return { werds: filtered, loading, error };
}
