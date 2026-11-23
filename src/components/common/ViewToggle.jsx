import './ViewToggle.css';

const VIEWS = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
];

export default function ViewToggle({ value, onChange }) {
  return (
    <div className="view-toggle" role="group" aria-label="Calendar view">
      {VIEWS.map((v) => {
        const isActive = value === v.id;
        return (
          <button
            key={v.id}
            type="button"
            className={`view-toggle__btn ${isActive ? 'view-toggle__btn--active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onChange(v.id)}
          >
            {v.label}
          </button>
        );
      })}
    </div>
  );
}