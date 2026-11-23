import RecordListPage from './RecordListPage.jsx';
import CheckInForm from './forms/CheckInForm.jsx';
import { DEMO_CHECKINS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'client', header: 'Client' },
  { key: 'officer', header: 'Officer' },
  { key: 'date', header: 'Date' },
  { key: 'mode', header: 'Mode' },
  { key: 'mood', header: 'Mood', render: (row) => <span aria-label={`Mood ${row.mood} out of 5`}>{'●'.repeat(row.mood) + '○'.repeat(5 - row.mood)}</span> },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function WellbeingCheckInsPage() {
  return (
    <RecordListPage
      title="Check-ins"
      description="Scheduled and completed wellbeing check-ins."
      icon="fa-clipboard-check"
      columns={COLUMNS}
      rows={DEMO_CHECKINS}
      detailBase="/wellbeing/checkins"
      entityLabel="check-in"
      renderForm={(props) => <CheckInForm {...props} />}
    />
  );
}