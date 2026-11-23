import './TrendChart.css';

export default function TrendChart({ data, label, height = 80, variant = 'bar' }) {
  if (!data?.length) return null;

  const max = Math.max(...data.map((d) => d.value));
  const width = 240;
  const barWidth = width / data.length - 4;

  return (
    <figure className="trend-chart">
      <figcaption className="trend-chart__label">{label}</figcaption>
      <svg role="img" aria-label={`${label} chart`} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className={`trend-chart__svg trend-chart__svg--${variant}`}>
        {data.map((d, i) => {
          const barHeight = (d.value / max) * (height - 12);
          const x = i * (barWidth + 4) + 2;
          const y = height - barHeight;
          return <rect key={i} x={x} y={y} width={barWidth} height={barHeight} rx={3} className="trend-chart__bar" />;
        })}
      </svg>
      <table className="sr-only">
        <caption>{label}</caption>
        <thead><tr><th scope="col">Period</th><th scope="col">Value</th></tr></thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}><td>{d.label}</td><td>{d.value}</td></tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}