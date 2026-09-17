export function safeReturnTo(value: string | null): string {
  // Only return to paths inside this app, never an external URL or another auth form.
  if (!value || !value.startsWith('/') || value.startsWith('//') || /[\\\s]/.test(value)) return '/profile';
  try {
    const path = decodeURIComponent(value);
    if (path.startsWith('//') || /[\\\s]/.test(path) || path.split(/[?#]/)[0].startsWith('/auth')) return '/profile';
  } catch { return '/profile'; }
  return value;
}

export function authErrorMessage(error: unknown): string {
  const code = typeof error === 'object' && error !== null && 'code' in error ? error.code : undefined;
  switch (code) {
    case 'invalid_credentials': return 'That email and password combination did not work. Please try again.';
    case 'email_not_confirmed': return 'Confirm your email using the signup link, then sign in.';
    case 'over_email_send_rate_limit':
    case 'over_request_rate_limit': return 'Too many attempts. Please wait a little before trying again.';
    case 'weak_password': return 'Please choose a stronger password with a mix of letters, numbers, and symbols.';
    case 'same_password': return 'Choose a password different from your current one.';
    case 'otp_expired':
    case 'session_not_found':
    case 'refresh_token_not_found': return 'Your link or session has expired. Please sign in or request a new recovery link.';
    default: return 'We could not complete that request. Check your connection and try again.';
  }
}
