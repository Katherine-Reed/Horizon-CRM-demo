import PeoplePage from './PeoplePage.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'sessions', header: 'Sessions', align: 'right' },
  { key: 'learners', header: 'Learners', align: 'right' },
  { key: 'lastActive', header: 'Last active', align: 'right' },
];

const SCOPE_BY_ROLE = {
  team_manager: { scope: 'team', label: 'Team: Trainers' },
  operations_manager: { scope: 'ops', label: 'All trainers' },
  manager: { scope: 'ops', label: 'All trainers' },
};

export default function TrainersPage({ role }) {
  const scopeInfo = SCOPE_BY_ROLE[role];
  return (
    <PeoplePage
      title="Trainers"
      description="Trainer roster and delivery capacity."
      columns={COLUMNS}
      records={DEMO_PEOPLE}
      filterKey="role"
      filterValue="trainer"
      entityLabel="trainer"
      headerSlot={scopeInfo ? <ScopeBadge scope={scopeInfo.scope} label={scopeInfo.label} /> : null}
    />
  );
}