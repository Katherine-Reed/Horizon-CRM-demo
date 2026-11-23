import RecordListPage from './RecordListPage.jsx';
import { DEMO_APPLICATIONS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'role', header: 'Role' },
  { key: 'employer', header: 'Employer' },
  { key: 'applied', header: 'Applied', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function ApplicationsPage() {
  return (
    <RecordListPage
      title="Job applications"
      description="Roles you've applied for and their progress."
      icon="fa-paper-plane"
      columns={COLUMNS}
      rows={DEMO_APPLICATIONS}
      entityLabel="application"
    />
  );
}