import { useState } from 'react';

export default function PasswordField({ id, name, label, value, onChange, disabled, newPassword = false, describedBy }: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  newPassword?: boolean;
  describedBy?: string;
}) {
  const [visible, setVisible] = useState(false);
  return <div className="account-field">
    <label htmlFor={id}>{label}</label>
    <div className="account-password">
      <input id={id} name={name} type={visible ? 'text' : 'password'} autoComplete={newPassword ? 'new-password' : 'current-password'} minLength={newPassword ? 6 : undefined} required value={value} onChange={event => onChange(event.target.value)} disabled={disabled} aria-describedby={describedBy} />
      <button className="account-password-toggle" type="button" aria-label={`${visible ? 'Hide' : 'Show'} ${label.toLowerCase()}`} aria-controls={id} disabled={disabled} onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
    </div>
  </div>;
}
