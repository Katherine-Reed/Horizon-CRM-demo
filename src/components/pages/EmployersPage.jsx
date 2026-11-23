import PeoplePage from './PeoplePage.jsx';
import EmployerForm from './forms/EmployerForm.jsx';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Employer' },
  { key: 'email', header: 'Contact email' },
  { key: 'sector', header: 'Sector' },
  { key: 'openRoles', header: 'Open roles', align: 'right' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function EmployersPage() {
  return (
    <PeoplePage
      title="Employers"
      description="Partner employers hiring through Horizon."
      columns={COLUMNS}
      records={DEMO_PEOPLE}
      filterKey="type"
      filterValue="employer"
      detailBase="/employers"
      entityLabel="employer"
      renderForm={(props) => <EmployerForm {...props} />}
    />
  );
}