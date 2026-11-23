import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import SessionForm from './forms/SessionForm.jsx';
import { useRouter } from '../../router/Router.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { DEMO_SESSIONS } from '../../lib/pageData.js';
import './DetailPage.css';

const ATTENDEE_COLUMNS = [
  { key: 'learner', header: 'Learner' },
  { key: 'status', header: 'Attendance', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function SessionDetailPage({ id }) {
  const { navigate } = useRouter();
  const { records, update } = useLocalRecords(DEMO_SESSIONS);
  const [editing, setEditing] = useState(false);
  const session = useMemo(() => records.find((r) => r.id === id), [records, id]);

  if (!session) {
    return (
      <div className="detail">
        <Card title="Session not found" icon="fa-circle-exclamation" labelledBy="nf">
          <Button variant="primary" onClick={() => navigate('/sessions')}>Back to sessions</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="detail">
      <nav className="detail__breadcrumb" aria-label="Breadcrumb">
        <a href="#/sessions">Sessions</a>
        <span aria-hidden="true">/</span>
        <span>{session.title}</span>
      </nav>

      <header className="detail__header">
        <div className="detail__identity">
          <div className="detail__avatar" aria-hidden="true"><i className="fas fa-chalkboard" /></div>
          <div>
            <h1 className="detail__name">{session.title}</h1>
            <p className="detail__sub">{session.date} · {session.time} · {session.location}</p>
            <span className={`status-pill status-pill--${session.status}`} style={{ marginTop: 'var(--space-2)' }}>{session.status}</span>
          </div>
        </div>
        <div className="detail__actions">
          <Button variant="secondary" icon="fa-pen" onClick={() => setEditing(true)}>Edit</Button>
        </div>
      </header>

      <div className="detail__grid">
        <Card title="Session info" icon="fa-info-circle" labelledBy="session-info">
          <div className="detail__facts">
            <Fact label="Date" value={session.date} />
            <Fact label="Time" value={session.time} />
            <Fact label="Location" value={session.location} />
            <Fact label="Capacity" value={session.capacity} />
            <Fact label="Status" value={session.status} />
          </div>
        </Card>
        <Card title="Attendance" icon="fa-clipboard-user" labelledBy="session-attendance">
          <DataTable
            caption="Attendees"
            columns={ATTENDEE_COLUMNS}
            rows={[
              { id: 'sa1', learner: 'Emma Watson', status: 'present' },
              { id: 'sa2', learner: 'James Chen', status: 'present' },
              { id: 'sa3', learner: 'Priya Patel', status: 'absent' },
            ]}
            emptyMessage="No attendees recorded yet."
          />
        </Card>
      </div>

      <SessionForm open={editing} initial={session} onCancel={() => setEditing(false)} onSave={(patch) => { update(session.id, patch); setEditing(false); }} />
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <div className="detail__fact-label">{label}</div>
      <div className="detail__fact-value">{value}</div>
    </div>
  );
}