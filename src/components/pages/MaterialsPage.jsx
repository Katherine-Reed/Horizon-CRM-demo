import RecordListPage from './RecordListPage.jsx';
import { DEMO_MATERIALS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'title', header: 'Title' },
  { key: 'type', header: 'Type' },
  { key: 'updated', header: 'Updated', align: 'right' },
  { key: 'author', header: 'Author' },
];

export default function MaterialsPage() {
  return (
    <RecordListPage
      title="Materials"
      description="Course materials, worksheets, and handouts."
      icon="fa-folder-open"
      columns={COLUMNS}
      rows={DEMO_MATERIALS}
      entityLabel="material"
      emptyMessage="No materials uploaded yet."
    />
  );
}