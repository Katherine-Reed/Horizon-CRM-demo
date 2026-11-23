import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import Button from '../common/Button.jsx';
import ScopeBadge from '../common/ScopeBadge.jsx';
import TrendChart from '../analytics/TrendChart.jsx';
import { DEMO_COACHING_LOG } from '../../lib/pageData.js';

const COLUMNS = [
  { key: 'adviser', header: 'Adviser' },
  { key: 'date', header: 'Date' },
  { key: 'type', header: 'Type' },
  { key: 'topic', header: 'Topic' },
  { key: 'outcome', header: 'Outcome' },
];

const TREND = [
  { label: 'W1', value: 6 }, { label: 'W2', value: 8 }, { label: 'W3', value: 7 },
  { label: 'W4', value: 11 }, { label: 'W5', value: 9 }, { label: 'W6', value: 13 },
];

export default function TeamCoachingPage() {
  return (
    <>
      <PageHeader
        title="Coaching & 1-to-1s"
        description="Structured coaching, shadowing, and performance conversations."
        actions={
          <>
            <ScopeBadge scope="team" label="Team: North Advisers" />
            <Button variant="primary" icon="fa-plus">Log coaching</Button>
          </>
        }
      />
      <Card title="Coaching activity (last 6 weeks)" icon="fa-chart-column" labelledBy="coach-chart">
        <TrendChart data={TREND} label="Sessions per week" variant="accent" />
      </Card>
      <Card title="Recent sessions" icon="fa-comments" labelledBy="coach-log">
        <DataTable caption="Coaching log" columns={COLUMNS} rows={DEMO_COACHING_LOG} emptyMessage="No coaching sessions logged yet." />
      </Card>
    </>
  );
}