import "./ThemeToggle.css";
export default function ThemeToggle({ value, onChange }) {
    return (<label className="wn-toggle">
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)}/>
      <span className="slider"/>
      <span className="label-off">OFF</span>
      <span className="label-on">ON</span>
    </label>);
}
