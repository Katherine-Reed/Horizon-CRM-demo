import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import WellbeingKpis from '../kpi/WellbeingKpis.jsx';
import { WELLBEING_REPORT_KPIS, WELLBEING_REPORT_ROWS } from '../../lib/pageData.js';

const COLUMNS = [
  { key: 'team', header: 'Team' },
  { key: 'cases', header: 'Open cases', align: 'right' },
  { key: 'checkins', header: 'Check-ins', align: 'right' },
  { key: 'referrals', header: 'Referrals', align: 'right' },
  { key: 'avgWait', header: 'Avg. wait', align: 'right' },
];

export default function WellbeingReportsPage() {
  return (
    <>
      <PageHeader title="Wellbeing reports" description="Programme-wide wellbeing activity and outcomes." />
      <Card title="Summary" icon="fa-chart-line" labelledBy="wb-reports-kpi">
        <WellbeingKpis items={WELLBEING_REPORT_KPIS} />
      </Card>
      <Card title="By team" icon="fa-table-list" labelledBy="wb-reports-table">
        <DataTable caption="Wellbeing activity by team" columns={COLUMNS} rows={WELLBEING_REPORT_ROWS} />
      </Card>
    </>
  );
}