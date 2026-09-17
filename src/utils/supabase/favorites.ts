import type { Tables } from '../../types/database';
import { supabase } from './client';

export type SavedWerd = Pick<Tables<'werds'>, 'werd_id' | 'werd' | 'definition' | 'part_of_speech'>;
export type Favorite = Pick<Tables<'favorites'>, 'werd_id' | 'created_at'> & { werd: SavedWerd | null };

export async function fetchFavorites(userId: string): Promise<Favorite[]> {
  const { data, error } = await supabase.from('favorites')
    .select('werd_id, created_at, werd:werds(werd_id, werd, definition, part_of_speech)')
    .eq('user_id', userId).order('created_at', { ascending: false });
  if (error) throw new Error('Your collection could not be loaded. Please try again.');
  return data;
}

export async function setFavorite(userId: string, werdId: string, saved: boolean): Promise<void> {
  if (saved) {
    // Ignore a duplicate insert so saving in two tabs remains safe; no UPDATE grant is needed.
    const { error } = await supabase.from('favorites').upsert(
      { user_id: userId, werd_id: werdId }, { onConflict: 'user_id,werd_id', ignoreDuplicates: true },
    );
    if (error) throw new Error('That Werd could not be saved. Please try again.');
  } else {
    const { error } = await supabase.from('favorites').delete().eq('user_id', userId).eq('werd_id', werdId);
    if (error) throw new Error('That Werd could not be removed. Please try again.');
  }
}
