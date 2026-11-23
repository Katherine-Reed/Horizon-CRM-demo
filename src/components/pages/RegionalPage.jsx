import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import TrendChart from '../analytics/TrendChart.jsx';
import WellbeingKpis from '../kpi/WellbeingKpis.jsx';
import { REGIONAL_MANAGER_KPIS, REGIONAL_MANAGER_ROWS, DEMO_SITES, DEMO_REGIONS } from '../../lib/pageData.js';

const REGION_COLUMNS = [
  { key: 'region', header: 'Region' },
  { key: 'offices', header: 'Offices', align: 'right' },
  { key: 'clients', header: 'Clients', align: 'right' },
  { key: 'placements', header: 'Placements', align: 'right' },
  { key: 'budget', header: 'Budget', align: 'right' },
  { key: 'variance', header: 'Variance', align: 'right' },
];

const SITE_COLUMNS = [
  { key: 'name', header: 'Office' },
  { key: 'region', header: 'Region' },
  { key: 'staff', header: 'Staff', align: 'right' },
  { key: 'clients', header: 'Clients', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

const TREND = [
  { label: 'Q1', value: 41 }, { label: 'Q2', value: 48 },
  { label: 'Q3', value: 55 }, { label: 'Q4', value: 62 },
];

export default function RegionalPage() {
  return (
    <>
      <PageHeader
        title="My region"
        description="Performance across offices, teams, and budget."
        actions={<ScopeBadge scope="region" label="Region: London & South" />}
      />
      <Card title="Regional metrics" icon="fa-map-location-dot" labelledBy="region-kpi">
        <WellbeingKpis items={REGIONAL_MANAGER_KPIS} />
      </Card>
      <Card title="Placements trend" icon="fa-chart-column" labelledBy="region-chart">
        <TrendChart data={TREND} label="Placements by quarter" variant="meadow" />
      </Card>
      <Card title="Regions" icon="fa-globe" labelledBy="region-table">
        <DataTable caption="Region overview" columns={REGION_COLUMNS} rows={DEMO_REGIONS} />
      </Card>
      <Card title="Offices" icon="fa-building" labelledBy="region-offices">
        <DataTable caption="Offices in region" columns={SITE_COLUMNS} rows={DEMO_SITES} />
      </Card>
    </>
  );
}