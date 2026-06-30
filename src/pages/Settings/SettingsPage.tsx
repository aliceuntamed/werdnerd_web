import { useEffect, useState } from "react";
import ThemeToggle from "../../components/Toggle/ThemeToggle";

const THEME_STORAGE_KEY = "werdnerd-theme";

function getInitialDarkMode() {
  if (typeof window === "undefined") return true;

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light") return false;
  if (savedTheme === "dark") return true;

  return true;
}

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [isDarkMode]);

  return (
    <main className="min-h-screen px-6 py-28 text-white">
      <section className="mx-auto w-full max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-white/55">Settings</p>
        <h1 className="mb-8 text-4xl font-bold tracking-normal">
          Tune the reading room.
        </h1>

        <div className="rounded-lg border border-white/15 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-normal">Dark mode</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                Keep the vault moody, or flip on a lighter surface when your
                eyeballs start filing paperwork.
              </p>
            </div>

            <ThemeToggle value={isDarkMode} onChange={setIsDarkMode} />
          </div>
        </div>
      </section>
    </main>
  );
}
