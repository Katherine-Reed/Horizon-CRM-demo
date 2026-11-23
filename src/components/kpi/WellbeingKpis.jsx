import Icon from '../common/Icon.jsx';
import './WellbeingKpis.css';

export default function WellbeingKpis({ items }) {
  return (
    <div className="wellbeing-kpis">
      {items.map((kpi) => (
        <div key={kpi.label} className="wellbeing-kpi">
          <div className="wellbeing-kpi__label">{kpi.label}</div>
          <div className="wellbeing-kpi__value">{kpi.value}</div>
          <div className="wellbeing-kpi__trend">
            <Icon name="fa-arrow-trend-up" />
            {kpi.trend}
          </div>
        </div>
      ))}
    </div>
  );
}