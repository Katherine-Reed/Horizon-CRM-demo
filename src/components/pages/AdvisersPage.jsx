import PeoplePage from './PeoplePage.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'caseload', header: 'Caseload', align: 'right' },
  { key: 'placements', header: 'Placements', align: 'right' },
  { key: 'lastActive', header: 'Last active', align: 'right' },
];

const SCOPE_BY_ROLE = {
  team_manager: { scope: 'team', label: 'Team: North Advisers' },
  office_manager: { scope: 'office', label: 'Office: London' },
  operations_manager: { scope: 'ops', label: 'All offices' },
  regional_manager: { scope: 'region', label: 'Region: London & South' },
  manager: { scope: 'ops', label: 'All advisers' },
};

export default function AdvisersPage({ role }) {
  const scopeInfo = SCOPE_BY_ROLE[role];
  return (
    <PeoplePage
      title="Employment Advisers"
      description={scopeInfo ? `Advisers in scope: ${scopeInfo.label}.` : 'Manage adviser caseloads and performance.'}
      columns={COLUMNS}
      records={DEMO_PEOPLE}
      filterKey="role"
      filterValue="employment_adviser"
      entityLabel="adviser"
      headerSlot={scopeInfo ? <ScopeBadge scope={scopeInfo.scope} label={scopeInfo.label} /> : null}
    />
  );
}