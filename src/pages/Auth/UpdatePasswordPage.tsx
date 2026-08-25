import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../contexts/AuthContext";
import { ROUTES } from "../../routes";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { updatePassword } = useAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmation) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error: updateError } = await updatePassword(password);
    setLoading(false);

    if (updateError) {
      setError(
        updateError.message.includes("session")
          ? "This recovery link is invalid or expired. Request a new one."
          : updateError.message,
      );
      return;
    }

    setSuccess(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-md w-full space-y-8" aria-labelledby="update-password-title">
        <div className="text-center">
          <h1 id="update-password-title" className="text-3xl font-extrabold text-white">
            {success ? "Password updated" : "Choose a new password"}
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            {success
              ? "Your new password is ready to use."
              : "Use at least six characters and keep it somewhere safe."}
          </p>
        </div>

        {success ? (
          <div className="text-center">
            <Link to={ROUTES.LOGIN} className="font-medium text-indigo-400 hover:text-indigo-300">
              Continue to sign in
            </Link>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="new-password" className="sr-only">New password</label>
                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="New password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="confirm-new-password" className="sr-only">Confirm new password</label>
                <input
                  id="confirm-new-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={6}
                  value={confirmation}
                  onChange={(event) => setConfirmation(event.target.value)}
                  placeholder="Confirm new password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm text-center" role="alert">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? "Updating password..." : "Update password"}
            </Button>
          </form>
        )}
      </section>
    </main>
  );
}
