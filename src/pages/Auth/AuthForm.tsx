import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { authErrorMessage, safeReturnTo } from '../../utils/auth';
import { ROUTES } from '../../routes';
import AuthLayout from './AuthLayout';
import PasswordField from './PasswordField';

type Mode = 'login' | 'signup' | 'reset' | 'update' | 'resend';
const copy = {
  login: { title: 'Welcome back, nerd.', description: 'Your collection of peculiar Werds is waiting.', button: 'Sign in', pending: 'Signing in…' },
  signup: { title: 'A place for your peculiar.', description: 'Create an account to keep the Werds you want to find again.', button: 'Create account', pending: 'Creating account…' },
  reset: { title: 'Lost your way in?', description: 'Enter your account email to request a password recovery link.', button: 'Send recovery link', pending: 'Sending recovery link…' },
  update: { title: 'A fresh set of keys.', description: 'Choose a new password for your WerdNerd account.', button: 'Update password', pending: 'Updating password…' },
  resend: { title: 'Another way in.', description: 'Expired or missing signup email? Enter your email to request a fresh confirmation link.', button: 'Send confirmation link', pending: 'Sending confirmation link…' },
};

export default function AuthForm({ mode }: { mode: Mode }) {
  const auth = useAuth();
  const [params] = useSearchParams();
  const next = safeReturnTo(params.get('next'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(0);
  const [resendMessage, setResendMessage] = useState('');
  const [error, setError] = useState<string | null>(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    return params.has('error') || hash.has('error') ? 'This email link is invalid or expired. Request a new confirmation or recovery link below, or try signing in.' : null;
  });
  const submitting = useRef(false);
  const text = copy[mode];
  const newPassword = mode === 'signup' || mode === 'update';
  const hasPassword = mode === 'login' || newPassword;
  const coolingDown = resendSeconds > 0;

  useEffect(() => {
    if (!coolingDown) return;
    const timer = window.setInterval(() => setResendSeconds(seconds => Math.max(0, seconds - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [coolingDown]);

  async function resendLink() {
    if (submitting.current || coolingDown) return;
    submitting.current = true;
    setPending(true);
    setError(null);
    setResendMessage('');
    try {
      const result = mode === 'reset' ? await auth.resetPassword(email.trim()) : await auth.resendSignup(email.trim(), next);
      if (result.error) throw result.error;
      setResendMessage('If this address is eligible, a fresh link will arrive shortly. Use the newest email.');
      setResendSeconds(60);
    } catch (failure) {
      setError(authErrorMessage(failure));
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    setError(null);
    if (newPassword && password !== confirmation) { setError('Passwords do not match.'); return; }
    submitting.current = true;
    setPending(true);
    try {
      if (mode === 'signup') {
        const result = await auth.signUp(email.trim(), password, next);
        if (result.error) throw result.error;
        setSuccess(result.confirmationRequired);
        if (result.confirmationRequired) setResendSeconds(60);
      } else {
        const result = mode === 'login' ? await auth.signIn(email.trim(), password)
          : mode === 'reset' ? await auth.resetPassword(email.trim())
          : mode === 'resend' ? await auth.resendSignup(email.trim(), next)
          : await auth.updatePassword(password);
        if (result.error) throw result.error;
        if (mode !== 'login') setSuccess(true);
        if (mode === 'reset' || mode === 'resend') setResendSeconds(60);
      }
      setPassword('');
      setConfirmation('');
    } catch (failure) {
      setError(authErrorMessage(failure));
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  if (!auth.loading && auth.user && (mode === 'login' || mode === 'signup') && !error) return <Navigate to={next} replace />;

  if (success) return (
    <AuthLayout focusTitle title={mode === 'update' ? 'Password updated.' : 'Check your inbox.'}
      description={mode === 'update' ? 'Your new password is ready to use.' : 'If this address is eligible, an email with your next step will arrive shortly. Check your spam folder, too.'}>
      <p className="account-message" role="status">{mode === 'update' ? 'You can return to your collection.' : mode === 'reset' ? 'Follow the recovery link to choose a new password.' : 'Follow the confirmation link to finish creating your account.'}</p>
      {mode !== 'update' && <div className="account-resend">
        <p className="account-hint">Link expired or didn’t arrive?</p>
        <button className="account-text-button" type="button" disabled={pending || coolingDown} onClick={() => void resendLink()}>{pending ? 'Sending link…' : coolingDown ? `Resend link in ${resendSeconds}s` : 'Resend link'}</button>
        {resendMessage && <p className="account-hint" role="status">{resendMessage}</p>}
        {error && <p className="account-error" role="alert">{error}</p>}
      </div>}
      <Link className="account-button" to={mode === 'update' ? ROUTES.PROFILE : `${ROUTES.LOGIN}?next=${encodeURIComponent(next)}`}>
        {mode === 'update' ? 'Open my collection' : 'Back to sign in'}
      </Link>
    </AuthLayout>
  );

  if (mode === 'update' && !auth.loading && !auth.user) return (
    <AuthLayout title="Let’s get you a new link." description="Open the recovery link from your email to choose a new password.">
      <p className="account-message" role="alert">{error || 'No active recovery session was found. Your link may have expired.'}</p>
      <Link className="account-button" to={ROUTES.RESET_PASSWORD}>Request a recovery link</Link>
    </AuthLayout>
  );

  return (
    <AuthLayout title={text.title} description={text.description}>
      <form className="account-form" onSubmit={handleSubmit} aria-busy={pending}>
        {mode !== 'update' && <label htmlFor="account-email">Email address
          <input id="account-email" name="email" type="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} disabled={pending} />
        </label>}
        {hasPassword && <PasswordField id="account-password" name="password" label={mode === 'update' ? 'New password' : 'Password'} value={password} onChange={setPassword} disabled={pending} newPassword={newPassword} describedBy={newPassword ? 'password-hint' : undefined} />}
        {newPassword && <>
          <p id="password-hint" className="account-hint">At least 6 characters. A longer, unique password is better.</p>
          <PasswordField id="account-confirmation" name="confirmation" label="Confirm password" value={confirmation} onChange={setConfirmation} disabled={pending} newPassword />
        </>}
        {error && <p className="account-error" role="alert">{error}</p>}
        <button className="account-button" type="submit" disabled={pending || auth.loading}>{auth.loading ? 'Checking your session…' : pending ? text.pending : text.button}</button>
      </form>
      <div className="account-links">
        {mode === 'login' ? <>
          <Link to={ROUTES.RESET_PASSWORD}>Forgot your password?</Link>
          <Link to={`${ROUTES.RESEND_CONFIRMATION}?next=${encodeURIComponent(next)}`}>Need a new confirmation link?</Link>
          <p>New here? <Link to={`${ROUTES.SIGNUP}?next=${encodeURIComponent(next)}`}>Create an account</Link></p>
        </> : <Link to={`${ROUTES.LOGIN}?next=${encodeURIComponent(next)}`}>Back to sign in</Link>}
        {mode === 'update' && <Link to={ROUTES.RESET_PASSWORD}>Request a new recovery link</Link>}
      </div>
    </AuthLayout>
  );
}
