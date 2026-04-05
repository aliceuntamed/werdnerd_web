import { supabase } from "./client";

export async function toggleFavorite(userId: string, werdId: string) {
  // Check if favorite exists
  const { data: existing, error: fetchError } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", userId)
    .eq("werd_id", werdId)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    console.error(fetchError);
    return null;
  }

  // If exists → remove it
  if (existing) {
    const { error: deleteError } = await supabase
      .from("favorites")
      .delete()
      .eq("id", existing.id);

    if (deleteError) console.error(deleteError);

    return false; // now unfavorited
  }

  // If not exists → add it
  const { error: insertError } = await supabase.from("favorites").insert({
    user_id: userId,
    werd_id: werdId,
  });

  if (insertError) console.error(insertError);

  return true; // now favorited
}
