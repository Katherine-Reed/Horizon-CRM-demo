import RecordListPage from './RecordListPage.jsx';
import { DEMO_ATTENDANCE } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'learner', header: 'Learner' },
  { key: 'session', header: 'Session' },
  { key: 'date', header: 'Date' },
  { key: 'status', header: 'Attendance', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function AttendancePage() {
  return (
    <RecordListPage
      title="Attendance"
      description="Learner attendance across all sessions."
      icon="fa-clipboard-user"
      columns={COLUMNS}
      rows={DEMO_ATTENDANCE}
      entityLabel="record"
    />
  );
}