import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import Button from '../common/Button.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import { DEMO_ROTA } from '../../lib/pageData.js';

const COLUMNS = [
  { key: 'day', header: 'Day' },
  { key: 'adviser', header: 'Staff' },
  { key: 'hours', header: 'Hours' },
  { key: 'room', header: 'Assignment' },
];

export default function SiteRotaPage() {
  return (
    <>
      <PageHeader
        title="Site rota"
        description="Weekly staff rota and room assignments."
        actions={
          <>
            <ScopeBadge scope="office" label="Office: London" />
            <Button variant="primary" icon="fa-plus">Add shift</Button>
          </>
        }
      />
      <Card title="This week" icon="fa-calendar-days" labelledBy="rota-table">
        <DataTable caption="Staff rota" columns={COLUMNS} rows={DEMO_ROTA} emptyMessage="No shifts scheduled." />
      </Card>
    </>
  );
}