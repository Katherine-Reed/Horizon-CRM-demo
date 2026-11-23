import RecordListPage from './RecordListPage.jsx';
import CandidateForm from './forms/CandidateForm.jsx';
import { DEMO_CANDIDATES } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'name', header: 'Candidate' },
  { key: 'role', header: 'Role applied for' },
  { key: 'employer', header: 'Employer' },
  { key: 'status', header: 'Stage', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
  { key: 'updated', header: 'Updated', align: 'right' },
];

export default function CandidatesPage() {
  return (
    <RecordListPage
      title="Candidates"
      description="Every candidate in the recruitment pipeline."
      icon="fa-user-check"
      columns={COLUMNS}
      rows={DEMO_CANDIDATES}
      detailBase="/candidates"
      entityLabel="candidate"
      renderForm={(props) => <CandidateForm {...props} />}
    />
  );
}