import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import TrendChart from '../analytics/TrendChart.jsx';
import WellbeingKpis from '../kpi/WellbeingKpis.jsx';
import { OFFICE_MANAGER_KPIS, OFFICE_MANAGER_ROWS } from '../../lib/pageData.js';

const COLUMNS = [
  { key: 'resource', header: 'Resource' },
  { key: 'utilisation', header: 'Utilisation', align: 'right' },
  { key: 'bookings', header: 'Bookings (wk)', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

const TREND = [
  { label: 'Mon', value: 42 }, { label: 'Tue', value: 48 }, { label: 'Wed', value: 51 },
  { label: 'Thu', value: 55 }, { label: 'Fri', value: 39 },
];

export default function OfficesPage() {
  return (
    <>
      <PageHeader
        title="Horizon London"
        description="Site overview: staff, rooms, and daily operations."
        actions={<ScopeBadge scope="office" label="Office: London" />}
      />
      <Card title="Site metrics" icon="fa-building" labelledBy="office-kpi">
        <WellbeingKpis items={OFFICE_MANAGER_KPIS} />
      </Card>
      <Card title="Room utilisation (this week)" icon="fa-chart-column" labelledBy="office-chart">
        <TrendChart data={TREND} label="Bookings per day" variant="accent" />
      </Card>
      <Card title="Resources" icon="fa-door-open" labelledBy="office-resources">
        <DataTable caption="Office resources" columns={COLUMNS} rows={OFFICE_MANAGER_ROWS} />
      </Card>
    </>
  );
}