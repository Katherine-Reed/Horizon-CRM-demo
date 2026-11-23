import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import TrendChart from '../analytics/TrendChart.jsx';
import WellbeingKpis from '../kpi/WellbeingKpis.jsx';
import { OPERATIONS_MANAGER_KPIS, OPERATIONS_MANAGER_ROWS } from '../../lib/pageData.js';

const COLUMNS = [
  { key: 'office', header: 'Office' },
  { key: 'clients', header: 'Clients', align: 'right' },
  { key: 'throughput', header: 'Throughput', align: 'right' },
  { key: 'exceptions', header: 'Exceptions', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

const TREND = [
  { label: 'W1', value: 34 }, { label: 'W2', value: 38 }, { label: 'W3', value: 41 },
  { label: 'W4', value: 44 }, { label: 'W5', value: 42 }, { label: 'W6', value: 48 },
];

export default function OperationsPage() {
  return (
    <>
      <PageHeader
        title="Operations"
        description="Cross-office throughput, capacity, and exceptions."
        actions={<ScopeBadge scope="ops" label="All delivery" />}
      />
      <Card title="Operational metrics" icon="fa-diagram-project" labelledBy="ops-kpi">
        <WellbeingKpis items={OPERATIONS_MANAGER_KPIS} />
      </Card>
      <Card title="Throughput trend" icon="fa-chart-column" labelledBy="ops-chart">
        <TrendChart data={TREND} label="Placements per week" />
      </Card>
      <Card title="Offices" icon="fa-building" labelledBy="ops-offices">
        <DataTable caption="Offices under operations" columns={COLUMNS} rows={OPERATIONS_MANAGER_ROWS} />
      </Card>
    </>
  );
}