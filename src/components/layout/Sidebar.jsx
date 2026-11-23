import Icon from '../common/Icon.jsx';
import './Sidebar.css';

export default function Sidebar({ items, activePath }) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <nav className="sidebar__nav">
        {items.map((item) => {
          const isActive =
            item.path === '/' ? activePath === '/' : activePath.startsWith(item.path);
          return (
            <a
              key={item.id}
              href={`#${item.path}`}
              className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon name={item.icon} className="sidebar__link-icon" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}