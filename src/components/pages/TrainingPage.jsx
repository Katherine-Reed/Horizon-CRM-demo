import RecordListPage from './RecordListPage.jsx';
import { DEMO_TRAINING } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'title', header: 'Course' },
  { key: 'trainer', header: 'Trainer' },
  { key: 'duration', header: 'Duration' },
  { key: 'enrolled', header: 'Enrolled', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function TrainingPage() {
  return (
    <RecordListPage
      title="Training catalogue"
      description="Courses available to clients and staff."
      icon="fa-chalkboard-user"
      columns={COLUMNS}
      rows={DEMO_TRAINING}
      entityLabel="course"
    />
  );
}