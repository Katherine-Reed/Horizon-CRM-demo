import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import KpiGrid from '../kpi/KpiGrid.jsx';
import DataTable from '../common/DataTable.jsx';
import { CLIENT_PROGRESS_KPIS, CLIENT_PROGRESS_ROWS } from '../../lib/pageData.js';

const COLUMNS = [
  { key: 'milestone', header: 'Milestone' },
  { key: 'date', header: 'Date' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function ProgressPage() {
  return (
    <>
      <PageHeader title="My progress" description="A snapshot of your journey on the programme." />
      <Card title="At a glance" icon="fa-chart-line" labelledBy="progress-kpi">
        <KpiGrid items={CLIENT_PROGRESS_KPIS} />
      </Card>
      <Card title="Milestones" icon="fa-flag-checkered" labelledBy="progress-table">
        <DataTable caption="My milestones" columns={COLUMNS} rows={CLIENT_PROGRESS_ROWS} />
      </Card>
    </>
  );
}