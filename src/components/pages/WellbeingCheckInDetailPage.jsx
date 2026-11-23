import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import CheckInForm from './forms/CheckInForm.jsx';
import { useRouter } from '../../router/Router.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { DEMO_CHECKINS } from '../../lib/pageData.js';
import './DetailPage.css';

export default function WellbeingCheckInDetailPage({ id }) {
  const { navigate } = useRouter();
  const { records, update } = useLocalRecords(DEMO_CHECKINS);
  const [editing, setEditing] = useState(false);
  const record = useMemo(() => records.find((r) => r.id === id), [records, id]);

  if (!record) {
    return (
      <div className="detail">
        <Card title="Check-in not found" icon="fa-circle-exclamation" labelledBy="nf">
          <Button variant="primary" onClick={() => navigate('/wellbeing/checkins')}>Back to check-ins</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="detail">
      <nav className="detail__breadcrumb" aria-label="Breadcrumb">
        <a href="#/wellbeing/checkins">Check-ins</a>
        <span aria-hidden="true">/</span>
        <span>{record.client}</span>
      </nav>

      <header className="detail__header">
        <div className="detail__identity">
          <div className="detail__avatar" aria-hidden="true"><i className="fas fa-clipboard-check" /></div>
          <div>
            <h1 className="detail__name">{record.client}</h1>
            <p className="detail__sub">{record.date} · {record.mode} · {record.officer}</p>
            <span className={`status-pill status-pill--${record.status}`} style={{ marginTop: 'var(--space-2)' }}>{record.status}</span>
          </div>
        </div>
        <div className="detail__actions">
          <Button variant="secondary" icon="fa-pen" onClick={() => setEditing(true)}>Edit</Button>
        </div>
      </header>

      <div className="detail__grid">
        <Card title="Check-in details" icon="fa-info-circle" labelledBy="ci-facts">
          <div className="detail__facts">
            <Fact label="Client" value={record.client} />
            <Fact label="Officer" value={record.officer} />
            <Fact label="Date" value={record.date} />
            <Fact label="Mode" value={record.mode} />
            <Fact label="Mood" value={`${record.mood} / 5`} />
            <Fact label="Follow-up" value={record.followUp || '—'} />
          </div>
        </Card>
        <Card title="Summary" icon="fa-align-left" labelledBy="ci-summary">
          <p className="detail__timeline-text">{record.summary}</p>
        </Card>
      </div>

      <CheckInForm open={editing} initial={record} onCancel={() => setEditing(false)} onSave={(patch) => { update(record.id, patch); setEditing(false); }} />
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