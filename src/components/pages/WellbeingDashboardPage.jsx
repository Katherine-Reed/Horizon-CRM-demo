import { useMemo } from 'react';
import Card from '../common/Card.jsx';
import DataTable from '../common/DataTable.jsx';
import WellbeingKpis from '../kpi/WellbeingKpis.jsx';
import { KPIS_BY_ROLE, ROLE_LABELS } from '../../lib/roles.js';
import { DEMO_WELLBEING_CASES, DEMO_CHECKINS } from '../../lib/pageData.js';
import './WellbeingDashboardPage.css';

const URGENT_COLUMNS = [
  { key: 'client', header: 'Client' },
  { key: 'officer', header: 'Officer' },
  { key: 'category', header: 'Category' },
  { key: 'priority', header: 'Priority', render: (row) => <span className={`status-pill status-pill--${row.priority}`}>{row.priority}</span> },
  { key: 'lastReview', header: 'Last review', align: 'right' },
];

const CHECKIN_COLUMNS = [
  { key: 'client', header: 'Client' },
  { key: 'officer', header: 'Officer' },
  { key: 'date', header: 'Date' },
  { key: 'mode', header: 'Mode' },
  { key: 'mood', header: 'Mood', render: (row) => '●'.repeat(row.mood) + '○'.repeat(5 - row.mood) },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function WellbeingDashboardPage({ role }) {
  const kpis = useMemo(() => KPIS_BY_ROLE[role] ?? [], [role]);
  const urgentCases = useMemo(
    () => DEMO_WELLBEING_CASES.filter((c) => c.priority === 'urgent' || c.priority === 'high'),
    []
  );
  const upcomingCheckins = useMemo(
    () => [...DEMO_CHECKINS].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 5),
    []
  );

  return (
    <div className="wellbeing-dashboard">
      <header className="wellbeing-dashboard__hero">
        <div>
          <h1 className="wellbeing-dashboard__title">
            <span aria-hidden="true">💚</span> Wellbeing
          </h1>
          <p className="wellbeing-dashboard__subtitle">
            {ROLE_LABELS[role]} · holistic support for clients and staff
          </p>
        </div>
      </header>
      <Card title="Key metrics" icon="fa-heart-pulse" labelledBy="wb-kpi">
        <WellbeingKpis items={kpis} />
      </Card>
      <Card title="Priority cases" icon="fa-triangle-exclamation" meta={`${urgentCases.length} need attention`} labelledBy="wb-urgent">
        <DataTable caption="Priority wellbeing cases" columns={URGENT_COLUMNS} rows={urgentCases} emptyMessage="No priority cases — all clear." />
      </Card>
      <Card title="Upcoming check-ins" icon="fa-clipboard-check" labelledBy="wb-checkins">
        <DataTable caption="Upcoming wellbeing check-ins" columns={CHECKIN_COLUMNS} rows={upcomingCheckins} emptyMessage="No check-ins scheduled." />
      </Card>
    </div>
  );
}