import { useState } from 'react';
import Icon from '../common/Icon.jsx';
import Button from '../common/Button.jsx';
import ThemeToggle from '../common/ThemeToggle.jsx';
import { ROLES, ROLE_LABELS } from '../../lib/roles.js';
import './LoginView.css';

export default function LoginView({ onLogin, theme, onToggleTheme }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !role || !password) return;
    onLogin({ email, role });
  };

  return (
    <main className="login">
      <div className="login__theme-slot">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="labelled" />
      </div>

      <div className="login__card">
        <h1 className="login__title">
          <Icon name="fa-sun" className="login__title-icon" />
          Horizon
        </h1>
        <p className="login__subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit} aria-label="Sign in">
          <div className="form-field">
            <label className="form-field__label" htmlFor="email">Email address</label>
            <input id="email" className="form-field__input" type="email" autoComplete="email" placeholder="your.name@horizon.org" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="role">Role (demo only)</label>
            <select id="role" className="form-field__input" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="" disabled>Select your role</option>
              {Object.values(ROLES).map((r) => (
                <option key={r} value={r}>{ROLE_LABELS[r]}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="password">Password</label>
            <input id="password" className="form-field__input" type="password" autoComplete="current-password" placeholder="********"  value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <Button type="submit" variant="primary" icon="fa-arrow-right-to-bracket" block>
            Sign in
          </Button>
        </form>

        <p className="login__footer">Demo CRM · Supabase-ready PostgreSQL backend</p>
      </div>
    </main>
  );
}