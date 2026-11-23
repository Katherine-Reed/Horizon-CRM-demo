import RecordListPage from './RecordListPage.jsx';
import { DEMO_MATCHES } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'client', header: 'Client' },
  { key: 'role', header: 'Role' },
  { key: 'employer', header: 'Employer' },
  { key: 'match', header: 'Match score', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function MatchingPage() {
  return (
    <RecordListPage
      title="Job matching"
      description="Suggested matches between clients and open roles."
      icon="fa-handshake"
      columns={COLUMNS}
      rows={DEMO_MATCHES}
      entityLabel="match"
    />
  );
}