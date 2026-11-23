import PeoplePage from './PeoplePage.jsx';
import ClientForm from './forms/ClientForm.jsx';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './PeoplePage.css';

const COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'adviser', header: 'Adviser' },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
  { key: 'lastActive', header: 'Last active', align: 'right' },
];

export default function ClientsPage() {
  return (
    <PeoplePage
      title="Clients"
      description="Everyone currently enrolled on the programme."
      columns={COLUMNS}
      records={DEMO_PEOPLE}
      filterKey="type"
      filterValue="client"
      detailBase="/clients"
      entityLabel="client"
      renderForm={(props) => <ClientForm {...props} />}
    />
  );
}