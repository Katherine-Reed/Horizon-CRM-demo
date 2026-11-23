import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import KpiGrid from '../kpi/KpiGrid.jsx';
import DataTable from '../common/DataTable.jsx';

export default function AnalyticsPage({ title, description, kpis, columns, rows, headerSlot }) {
  return (
    <>
      <PageHeader title={title} description={description} actions={headerSlot} />
      <Card title="Summary" icon="fa-chart-line" labelledBy="analytics-kpi">
        <KpiGrid items={kpis} />
      </Card>
      <Card title="Breakdown" icon="fa-table-list" labelledBy="analytics-table">
        <DataTable caption={title} columns={columns} rows={rows} />
      </Card>
    </>
  );
}