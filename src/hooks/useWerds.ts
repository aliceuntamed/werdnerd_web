// hooks/useWerds.ts
import { useEffect, useState } from "react";
import { fetchWerds } from "../utils/supabase/queries";
import type { Werd } from "../types/werd";

export function useWerds(activeTag?: string | null) {
  const [werds, setWerds] = useState<Werd[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchWerds();
      setWerds(data);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = activeTag
    ? werds.filter((w) => w.tags.includes(activeTag))
    : werds;

  return { werds: filtered, loading };
}
