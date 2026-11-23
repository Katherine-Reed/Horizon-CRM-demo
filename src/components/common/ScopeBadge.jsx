import Icon from './Icon.jsx';
import './ScopeBadge.css';

export default function ScopeBadge({ scope, label }) {
  const icon =
    scope === 'team' ? 'fa-people-group' :
    scope === 'office' ? 'fa-building' :
    scope === 'ops' ? 'fa-diagram-project' :
    scope === 'region' ? 'fa-map-location-dot' :
    'fa-circle-info';

  return (
    <span className={`scope-badge scope-badge--${scope}`}>
      <Icon name={icon} />
      {label}
    </span>
  );
}