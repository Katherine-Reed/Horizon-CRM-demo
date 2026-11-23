import { useMemo } from 'react';
import Card from '../common/Card.jsx';
import KpiGrid from '../kpi/KpiGrid.jsx';
import DataTable from '../common/DataTable.jsx';
import PageHeader from '../common/PageHeader.jsx';
import './AdviserDashboardPage.css';

// Demo data matching the screenshot
const PERFORMANCE_KPIS = [
  { label: 'Current Month Starts', value: '12', trend: '' },
  { label: 'Monthly Target', value: '15', trend: '' },
  { label: 'Target Achievement', value: '80.0%', trend: '' },
];

const OVERVIEW_KPIS = [
  { label: 'Total Participants', value: '50', trend: '' },
  { label: 'In Employment', value: '17', trend: '' },
  { label: 'Actively Seeking Work', value: '33', trend: '' },
  { label: 'Employment Rate %', value: '34.0%', trend: '' },
  { label: 'Monthly Job Start Target', value: '12 / 15', trend: '80% achieved' },
];

const CHART_DATA = [
  { id: 'c1', label: 'Month 1', value: 10 },
  { id: 'c2', label: 'Month 2', value: 15 },
  { id: 'c3', label: 'Month 3', value: 12 },
];

const CASELOAD_DATA = [
  { id: 'p1', name: 'James Walker', adviser: 'Katherine', status: 'Seeking Work', contact: '24 Aug 2026' },
  { id: 'p2', name: 'Aisha Khan', adviser: 'Katherine', status: 'In Employment', contact: '20 Aug 2026' },
  { id: 'p3', name: 'Daniel Evans', adviser: 'David', status: 'Seeking Work', contact: '19 Aug 2026' },
  { id: 'p4', name: 'Sarah Thompson', adviser: 'Katherine', status: 'In Employment', contact: '21 Aug 2026' },
  { id: 'p5', name: 'Michael Patel', adviser: 'Lisa', status: 'Seeking Work', contact: '22 Aug 2026' },
  { id: 'p6', name: 'Emma Jones', adviser: 'Katherine', status: 'Seeking Work', contact: '23 Aug 2026' },
  { id: 'p7', name: 'Ryan Murphy', adviser: 'David', status: 'In Employment', contact: '18 Aug 2026' },
  { id: 'p8', name: 'Chloe Brown', adviser: 'Lisa', status: 'Seeking Work', contact: '16 Aug 2026' },
];

const CASELOAD_COLUMNS = [
  { key: 'name', header: 'Name' },
  { key: 'adviser', header: 'Adviser' },
  {
    key: 'status',
    header: 'Status',
    render: (row) => {
      const isEmployed = row.status === 'In Employment';
      return (
        <span className={`custom-status ${isEmployed ? 'custom-status--success' : 'custom-status--warning'}`}>
          {row.status}
        </span>
      );
    },
  },
  { key: 'contact', header: 'Last Contact', align: 'right' },
];

export default function AdviserDashboardPage() {
  // Calculate max value for chart scaling
  const maxVal = useMemo(() => Math.max(...CHART_DATA.map(d => d.value)), []);

  return (
    <div className="adviser-dashboard">
      <PageHeader 
        title="Advisor Dashboard" 
        actions={<span className="sr-only">Summary</span>} 
      />
      <div className="performance-summary-grid">
        {PERFORMANCE_KPIS.map(kpi => (
          <div key={kpi.label} className="summary-card">
            <div className="summary-card__label">{kpi.label}</div>
            <div className="summary-card__value">{kpi.value}</div>
          </div>
        ))}
      </div>

      <PageHeader 
        title="" /* Spacer for KPIs */
        actions={<span className="sr-only">Overview</span>} 
      />
      <KpiGrid items={OVERVIEW_KPIS} />

      <Card title="Rolling 3-Month Job Starts" icon="" labelledBy="chart-heading">
        <div className="custom-bar-chart" role="img" aria-label="Bar chart showing job starts over 3 months">
          <div className="custom-bar-chart__axis" />
          <div className="custom-bar-chart__grid">
            {CHART_DATA.map(item => {
              const heightPct = (item.value / maxVal) * 100;
              return (
                <div key={item.id} className="custom-bar-chart__column">
                  <div className="custom-bar-chart__bar-wrapper">
                    <div 
                      className="custom-bar-chart__bar" 
                      style={{ height: `${heightPct}%` }}
                    >
                      <span className="custom-bar-chart__value">{item.value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card title="Participant Caseload" icon="" labelledBy="caseload-heading">
        <DataTable
          caption="Participant Caseload"
          columns={CASELOAD_COLUMNS}
          rows={CASELOAD_DATA}
        />
      </Card>
    </div>
  );
}