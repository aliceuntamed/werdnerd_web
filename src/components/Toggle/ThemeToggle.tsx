import "./ThemeToggle.css";

interface ThemeToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function ThemeToggle({ value, onChange }: ThemeToggleProps) {
  return (
    <label className="wn-toggle">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider" />
      <span className="label-off">OFF</span>
      <span className="label-on">ON</span>
    </label>
  );
}
