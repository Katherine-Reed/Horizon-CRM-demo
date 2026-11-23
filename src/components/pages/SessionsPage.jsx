import RecordListPage from './RecordListPage.jsx';
import SessionForm from './forms/SessionForm.jsx';
import { DEMO_SESSIONS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'title', header: 'Session' },
  { key: 'date', header: 'Date' },
  { key: 'time', header: 'Time' },
  { key: 'location', header: 'Location' },
  { key: 'capacity', header: 'Capacity', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function SessionsPage() {
  return (
    <RecordListPage
      title="Sessions"
      description="Upcoming and past training sessions."
      icon="fa-chalkboard"
      columns={COLUMNS}
      rows={DEMO_SESSIONS}
      detailBase="/sessions"
      entityLabel="session"
      renderForm={(props) => <SessionForm {...props} />}
    />
  );
}