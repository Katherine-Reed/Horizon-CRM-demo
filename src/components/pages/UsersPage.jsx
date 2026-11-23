import PeoplePage from './PeoplePage.jsx';
import ClientForm from './forms/ClientForm.jsx';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
  { key: 'lastActive', header: 'Last active', align: 'right' },
];

export default function UsersPage() {
  return (
    <PeoplePage
      title="Users"
      description="All Horizon users across every role."
      columns={COLUMNS}
      records={DEMO_PEOPLE}
      entityLabel="user"
      renderForm={(props) => <ClientForm {...props} />}
    />
  );
}