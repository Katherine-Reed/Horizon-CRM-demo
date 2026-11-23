import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import ViewToggle from '../common/ViewToggle.jsx';
import KpiGrid from '../kpi/KpiGrid.jsx';
import Calendar from '../calendar/Calendar.jsx';
import KanbanBoard from '../kanban/KanbanBoard.jsx';
import { useKanban } from '../../hooks/useKanban.js';
import { KPIS_BY_ROLE, KANBAN_ROLES, ROLE_LABELS } from '../../lib/roles.js';
import { DEMO_MEETINGS } from '../../lib/pageData.js';
import './Dashboard.css';

export default function DashboardPage({ role }) {
  const [calendarView, setCalendarView] = useState('day');
  const { columns, moveCard } = useKanban();

  const kpis = useMemo(() => KPIS_BY_ROLE[role] ?? [], [role]);
  const showKanban = KANBAN_ROLES.includes(role);

  return (
    <div className="dashboard">
      <Card title="Key metrics" icon="fa-chart-line" meta={ROLE_LABELS[role]} labelledBy="kpi-heading">
        <KpiGrid items={kpis} />
      </Card>
      <Card title="Upcoming meetings" icon="fa-calendar-alt" labelledBy="calendar-heading">
        <div className="dashboard__calendar-controls">
          <ViewToggle value={calendarView} onChange={setCalendarView} />
        </div>
        <Calendar meetings={DEMO_MEETINGS} view={calendarView} />
      </Card>
      {showKanban && (
        <Card title="Recruitment pipeline" icon="fa-columns" meta="Drag & drop (demo)" labelledBy="kanban-heading">
          <KanbanBoard columns={columns} onMoveCard={moveCard} />
        </Card>
      )}
    </div>
  );
}