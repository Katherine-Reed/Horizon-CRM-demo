import Icon from '../common/Icon.jsx';
import './KpiGrid.css';

export default function KpiGrid({ items }) {
  return (
    <div className="kpi-grid">
      {items.map((kpi) => (
        <div key={kpi.label} className="kpi">
          <div className="kpi__label">{kpi.label}</div>
          <div className="kpi__value">{kpi.value}</div>
          <div className="kpi__trend">
            <Icon name="fa-arrow-up" />
            {kpi.trend}
          </div>
        </div>
      ))}
    </div>
  );
}