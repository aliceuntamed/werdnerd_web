import type { User } from '@supabase/supabase-js';
import { supabase } from './client';

// The private profile needs only these account fields; favorites are stored separately.
export type Profile = { id: string; email: string; displayName: string };
export function profileFromUser(user: User): Profile {
  const name: unknown = user.user_metadata.display_name;
  return { id: user.id, email: user.email || '', displayName: typeof name === 'string' ? name.slice(0, 60) : '' };
}

export async function updateDisplayName(displayName: string): Promise<void> {
  const name = displayName.trim();
  if (!name || name.length > 60) throw new Error('Use a display name between 1 and 60 characters.');
  // Metadata is presentation only. Database ownership always uses the authenticated user ID.
  const { error } = await supabase.auth.updateUser({ data: { display_name: name } });
  if (error) throw new Error('Your display name could not be saved. Please try again.');
}
