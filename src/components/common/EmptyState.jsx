import Icon from './Icon.jsx';
import './EmptyState.css';

export default function EmptyState({ icon = 'fa-inbox', title = 'Nothing here yet', message }) {
  return (
    <div className="empty-state-card" role="status">
      <Icon name={icon} className="empty-state-card__icon" />
      <p className="empty-state-card__title">{title}</p>
      {message && <p className="empty-state-card__message">{message}</p>}
    </div>
  );
}