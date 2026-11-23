import RecordListPage from './RecordListPage.jsx';
import { DEMO_ASSESSMENTS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'title', header: 'Assessment' },
  { key: 'learner', header: 'Learner' },
  { key: 'score', header: 'Score', align: 'right' },
  { key: 'due', header: 'Due' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function AssessmentsPage() {
  return (
    <RecordListPage
      title="Assessments"
      description="Learner assessments and grading."
      icon="fa-file-pen"
      columns={COLUMNS}
      rows={DEMO_ASSESSMENTS}
      entityLabel="assessment"
    />
  );
}