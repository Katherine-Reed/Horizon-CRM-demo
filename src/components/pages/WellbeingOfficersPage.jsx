import PeoplePage from './PeoplePage.jsx';
import { DEMO_WELLBEING_TEAM } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'specialism', header: 'Specialism' },
  { key: 'caseload', header: 'Caseload', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function WellbeingOfficersPage() {
  return (
    <PeoplePage
      title="Wellbeing officers"
      description="The wellbeing team and their caseloads."
      columns={COLUMNS}
      records={DEMO_WELLBEING_TEAM}
      entityLabel="officer"
    />
  );
}