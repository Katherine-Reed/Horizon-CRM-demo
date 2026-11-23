import Icon from './Icon.jsx';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, onToggle, variant = 'icon' }) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      className={`theme-toggle theme-toggle--${variant}`}
      onClick={onToggle}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      <Icon name={isDark ? 'fa-sun' : 'fa-moon'} className="theme-toggle__icon" />
      {variant === 'labelled' && (
        <span className="theme-toggle__label">{isDark ? 'Light' : 'Dark'}</span>
      )}
    </button>
  );
}