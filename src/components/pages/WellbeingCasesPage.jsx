import RecordListPage from './RecordListPage.jsx';
import WellbeingCaseForm from './forms/WellbeingCaseForm.jsx';
import { DEMO_WELLBEING_CASES } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'client', header: 'Client' },
  { key: 'officer', header: 'Officer' },
  { key: 'category', header: 'Category' },
  { key: 'priority', header: 'Priority', render: (row) => <span className={`status-pill status-pill--${row.priority}`}>{row.priority}</span> },
  { key: 'lastReview', header: 'Last review', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function WellbeingCasesPage() {
  return (
    <RecordListPage
      title="Wellbeing cases"
      description="Track support cases, priorities, and reviews."
      icon="fa-folder-open"
      columns={COLUMNS}
      rows={DEMO_WELLBEING_CASES}
      detailBase="/wellbeing/cases"
      entityLabel="case"
      renderForm={(props) => <WellbeingCaseForm {...props} />}
    />
  );
}