import Icon from '../common/Icon.jsx';
import ThemeToggle from '../common/ThemeToggle.jsx';
import { ROLE_LABELS } from '../../lib/roles.js';
import './Header.css';

export default function Header({ email, role, onLogout, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header__brand">
        <Icon name="fa-sun" className="header__brand-icon" />
        <span className="header__brand-name">Horizon</span>
      </div>

      <div className="user-badge">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <Icon name="fa-user-circle" className="user-badge__icon" />
        <span className="user-badge__email">{email}</span>
        <span className="user-badge__role">{ROLE_LABELS[role]}</span>
        <button
          type="button"
          className="user-badge__logout"
          onClick={onLogout}
          aria-label="Sign out"
          title="Sign out"
        >
          <Icon name="fa-right-from-bracket" />
        </button>
      </div>
    </header>
  );
}