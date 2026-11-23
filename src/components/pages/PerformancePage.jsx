import AnalyticsPage from './AnalyticsPage.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import {
  TEAM_MANAGER_KPIS, TEAM_MANAGER_ROWS,
  OFFICE_MANAGER_KPIS, OFFICE_MANAGER_ROWS,
  OPERATIONS_MANAGER_KPIS, OPERATIONS_MANAGER_ROWS,
  REGIONAL_MANAGER_KPIS, REGIONAL_MANAGER_ROWS,
} from '../../lib/pageData.js';

const PERFORMANCE_CONFIG = {
  team_manager: {
    scope: { scope: 'team', label: 'Team: North Advisers' },
    kpis: TEAM_MANAGER_KPIS,
    columns: [
      { key: 'adviser', header: 'Adviser' },
      { key: 'clients', header: 'Clients', align: 'right' },
      { key: 'meetings', header: 'Meetings', align: 'right' },
      { key: 'placements', header: 'Placements', align: 'right' },
      { key: 'sla', header: 'SLA', align: 'right' },
    ],
    rows: TEAM_MANAGER_ROWS,
  },
  office_manager: {
    scope: { scope: 'office', label: 'Office: London' },
    kpis: OFFICE_MANAGER_KPIS,
    columns: [
      { key: 'resource', header: 'Resource' },
      { key: 'utilisation', header: 'Utilisation', align: 'right' },
      { key: 'bookings', header: 'Bookings', align: 'right' },
      { key: 'status', header: 'Status' },
    ],
    rows: OFFICE_MANAGER_ROWS,
  },
  operations_manager: {
    scope: { scope: 'ops', label: 'All delivery' },
    kpis: OPERATIONS_MANAGER_KPIS,
    columns: [
      { key: 'office', header: 'Office' },
      { key: 'clients', header: 'Clients', align: 'right' },
      { key: 'throughput', header: 'Throughput', align: 'right' },
      { key: 'exceptions', header: 'Exceptions', align: 'right' },
      { key: 'status', header: 'Status' },
    ],
    rows: OPERATIONS_MANAGER_ROWS,
  },
  regional_manager: {
    scope: { scope: 'region', label: 'Region: London & South' },
    kpis: REGIONAL_MANAGER_KPIS,
    columns: [
      { key: 'region', header: 'Region' },
      { key: 'offices', header: 'Offices', align: 'right' },
      { key: 'clients', header: 'Clients', align: 'right' },
      { key: 'placements', header: 'Placements', align: 'right' },
      { key: 'variance', header: 'Variance', align: 'right' },
    ],
    rows: REGIONAL_MANAGER_ROWS,
  },
  manager: {
    scope: { scope: 'ops', label: 'All teams' },
    kpis: TEAM_MANAGER_KPIS,
    columns: [
      { key: 'adviser', header: 'Adviser' },
      { key: 'clients', header: 'Clients', align: 'right' },
      { key: 'meetings', header: 'Meetings', align: 'right' },
      { key: 'placements', header: 'Placements', align: 'right' },
      { key: 'sla', header: 'SLA', align: 'right' },
    ],
    rows: TEAM_MANAGER_ROWS,
  },
};

export default function PerformancePage({ role }) {
  const config = PERFORMANCE_CONFIG[role] ?? PERFORMANCE_CONFIG.manager;
  return (
    <AnalyticsPage
      title="Team performance"
      description="Adviser workload, activity, and outcomes for your scope."
      kpis={config.kpis}
      columns={config.columns}
      rows={config.rows}
      headerSlot={<ScopeBadge scope={config.scope.scope} label={config.scope.label} />}
    />
  );
}