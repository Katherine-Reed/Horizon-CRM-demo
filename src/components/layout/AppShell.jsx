import Header from './Header.jsx';
import './AppShell.css';

export default function AppShell({ email, role, onLogout, theme, onToggleTheme, children }) {
  return (
    <div className="app-shell">
      <Header email={email} role={role} onLogout={onLogout} theme={theme} onToggleTheme={onToggleTheme} />
      <div className="app-shell__body">{children}</div>
    </div>
  );
}