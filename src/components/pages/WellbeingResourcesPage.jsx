import RecordListPage from './RecordListPage.jsx';
import { DEMO_WELLBEING_RESOURCES } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'title', header: 'Title' },
  { key: 'type', header: 'Type' },
  { key: 'audience', header: 'Audience' },
  { key: 'author', header: 'Author' },
  { key: 'updated', header: 'Updated', align: 'right' },
];

export default function WellbeingResourcesPage() {
  return (
    <RecordListPage
      title="Wellbeing resources"
      description="Self-help and staff resources for the wellbeing team."
      icon="fa-book-medical"
      columns={COLUMNS}
      rows={DEMO_WELLBEING_RESOURCES}
      entityLabel="resource"
    />
  );
}