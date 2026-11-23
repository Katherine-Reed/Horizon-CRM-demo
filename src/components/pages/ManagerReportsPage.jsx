import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import TrendChart from '../analytics/TrendChart.jsx';
import WellbeingKpis from '../kpi/WellbeingKpis.jsx';
import {
  TEAM_MANAGER_KPIS, TEAM_MANAGER_ROWS,
  OFFICE_MANAGER_KPIS, OFFICE_MANAGER_ROWS,
  OPERATIONS_MANAGER_KPIS, OPERATIONS_MANAGER_ROWS,
  REGIONAL_MANAGER_KPIS, REGIONAL_MANAGER_ROWS,
} from '../../lib/pageData.js';

const REPORT_CONFIG = {
  manager: { scope: 'ops', scopeLabel: 'All teams', kpis: TEAM_MANAGER_KPIS, columns: [
    { key: 'adviser', header: 'Adviser' }, { key: 'clients', header: 'Clients', align: 'right' },
    { key: 'meetings', header: 'Meetings', align: 'right' }, { key: 'placements', header: 'Placements', align: 'right' },
    { key: 'sla', header: 'SLA', align: 'right' },
  ], rows: TEAM_MANAGER_ROWS, tableLabel: 'Adviser breakdown' },
  team_manager: { scope: 'team', scopeLabel: 'Team: North Advisers', kpis: TEAM_MANAGER_KPIS, columns: [
    { key: 'adviser', header: 'Adviser' }, { key: 'clients', header: 'Clients', align: 'right' },
    { key: 'meetings', header: 'Meetings', align: 'right' }, { key: 'placements', header: 'Placements', align: 'right' },
    { key: 'sla', header: 'SLA', align: 'right' },
  ], rows: TEAM_MANAGER_ROWS, tableLabel: 'Adviser breakdown' },
  office_manager: { scope: 'office', scopeLabel: 'Office: London', kpis: OFFICE_MANAGER_KPIS, columns: [
    { key: 'resource', header: 'Resource' }, { key: 'utilisation', header: 'Utilisation', align: 'right' },
    { key: 'bookings', header: 'Bookings', align: 'right' }, { key: 'status', header: 'Status' },
  ], rows: OFFICE_MANAGER_ROWS, tableLabel: 'Resource utilisation' },
  operations_manager: { scope: 'ops', scopeLabel: 'All delivery', kpis: OPERATIONS_MANAGER_KPIS, columns: [
    { key: 'office', header: 'Office' }, { key: 'clients', header: 'Clients', align: 'right' },
    { key: 'throughput', header: 'Throughput', align: 'right' }, { key: 'exceptions', header: 'Exceptions', align: 'right' },
    { key: 'status', header: 'Status' },
  ], rows: OPERATIONS_MANAGER_ROWS, tableLabel: 'Office performance' },
  regional_manager: { scope: 'region', scopeLabel: 'Region: London & South', kpis: REGIONAL_MANAGER_KPIS, columns: [
    { key: 'region', header: 'Region' }, { key: 'offices', header: 'Offices', align: 'right' },
    { key: 'clients', header: 'Clients', align: 'right' }, { key: 'placements', header: 'Placements', align: 'right' },
    { key: 'variance', header: 'Variance', align: 'right' },
  ], rows: REGIONAL_MANAGER_ROWS, tableLabel: 'Region breakdown' },
};

const DEFAULT_TREND = [
  { label: 'W1', value: 12 }, { label: 'W2', value: 15 }, { label: 'W3', value: 18 },
  { label: 'W4', value: 22 }, { label: 'W5', value: 19 }, { label: 'W6', value: 26 },
];

export default function ManagerReportsPage({ role }) {
  const config = REPORT_CONFIG[role] ?? REPORT_CONFIG.team_manager;
  return (
    <>
      <PageHeader
        title="Reports"
        description="Performance summaries for your scope."
        actions={<ScopeBadge scope={config.scope} label={config.scopeLabel} />}
      />
      <Card title="Summary" icon="fa-chart-line" labelledBy="mgr-reports-kpi">
        <WellbeingKpis items={config.kpis} />
      </Card>
      <Card title="Recent trend" icon="fa-chart-column" labelledBy="mgr-reports-chart">
        <TrendChart data={DEFAULT_TREND} label="Weekly activity" />
      </Card>
      <Card title={config.tableLabel} icon="fa-table-list" labelledBy="mgr-reports-table">
        <DataTable caption={config.tableLabel} columns={config.columns} rows={config.rows} />
      </Card>
    </>
  );
}