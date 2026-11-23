import RecordListPage from './RecordListPage.jsx';
import { DEMO_MEETINGS_RECORDS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'title', header: 'Meeting' },
  { key: 'with', header: 'With' },
  { key: 'date', header: 'Date' },
  { key: 'time', header: 'Time' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function MeetingsPage() {
  return (
    <RecordListPage
      title="Meetings"
      description="Your scheduled and past meetings."
      icon="fa-calendar-check"
      columns={COLUMNS}
      rows={DEMO_MEETINGS_RECORDS}
      entityLabel="meeting"
    />
  );
}