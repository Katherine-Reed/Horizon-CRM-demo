import AnalyticsPage from './AnalyticsPage.jsx';

const KPIS = [
  { label: 'Total clients', value: '147', trend: '+8' },
  { label: 'Placements (YTD)', value: '42', trend: '+12' },
  { label: 'Completion rate', value: '82%', trend: '+3%' },
  { label: 'Avg. time to job', value: '68d', trend: '-5d' },
];

const COLUMNS = [
  { key: 'programme', header: 'Programme' },
  { key: 'clients', header: 'Clients', align: 'right' },
  { key: 'placed', header: 'Placed', align: 'right' },
  { key: 'rate', header: 'Rate', align: 'right' },
];

const ROWS = [
  { id: 'p1', programme: 'Horizon – London', clients: 62, placed: 21, rate: '34%' },
  { id: 'p2', programme: 'Horizon – Manchester', clients: 45, placed: 14, rate: '31%' },
  { id: 'p3', programme: 'Horizon – Birmingham', clients: 40, placed: 7, rate: '18%' },
];

export default function ReportsPage() {
  return (
    <AnalyticsPage
      title="Reports"
      description="Programme-wide performance and outcomes."
      kpis={KPIS}
      columns={COLUMNS}
      rows={ROWS}
    />
  );
}