import RecordListPage from './RecordListPage.jsx';
import { DEMO_OFFERS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'candidate', header: 'Candidate' },
  { key: 'role', header: 'Role' },
  { key: 'employer', header: 'Employer' },
  { key: 'salary', header: 'Salary', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
  { key: 'sentOn', header: 'Sent on', align: 'right' },
];

export default function OffersPage() {
  return (
    <RecordListPage
      title="Job offers"
      description="Offers extended and their current state."
      icon="fa-file-signature"
      columns={COLUMNS}
      rows={DEMO_OFFERS}
      entityLabel="offer"
    />
  );
}