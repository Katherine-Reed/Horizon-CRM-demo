import PeoplePage from './PeoplePage.jsx';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Area' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function RecruitmentPage() {
  return (
    <PeoplePage
      title="Recruitment team"
      description="Recruiters managing the pipeline across employers."
      columns={COLUMNS}
      records={DEMO_PEOPLE}
      filterKey="role"
      filterValue="recruitment"
      entityLabel="recruiter"
    />
  );
}