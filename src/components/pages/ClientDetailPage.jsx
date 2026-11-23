import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import ConfirmDialog from '../common/ConfirmDialog.jsx';
import ClientForm from './forms/ClientForm.jsx';
import { useRouter } from '../../router/Router.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './DetailPage.css';

const MEETING_COLUMNS = [
  { key: 'date', header: 'Date' },
  { key: 'time', header: 'Time' },
  { key: 'title', header: 'Meeting' },
  { key: 'with', header: 'With' },
];

const DEMO_CLIENT_MEETINGS = [
  { id: 'cm1', date: '2025-03-20', time: '10:00', title: 'Check-in', with: 'R. Osei' },
  { id: 'cm2', date: '2025-04-02', time: '11:30', title: 'CV review', with: 'R. Osei' },
  { id: 'cm3', date: '2025-04-10', time: '14:00', title: 'Interview prep', with: 'R. Osei' },
];

export default function ClientDetailPage({ id }) {
  const { navigate } = useRouter();
  const { records, update, remove } = useLocalRecords(DEMO_PEOPLE);
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const client = useMemo(() => records.find((r) => r.id === id), [records, id]);

  if (!client) {
    return (
      <div className="detail">
        <Card title="Client not found" icon="fa-circle-exclamation" labelledBy="nf">
          <Button variant="primary" onClick={() => navigate('/clients')}>Back to clients</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="detail">
      <nav className="detail__breadcrumb" aria-label="Breadcrumb">
        <a href="#/clients">Clients</a>
        <span aria-hidden="true">/</span>
        <span>{client.name}</span>
      </nav>

      <header className="detail__header">
        <div className="detail__identity">
          <div className="detail__avatar" aria-hidden="true">{client.name.charAt(0)}</div>
          <div>
            <h1 className="detail__name">{client.name}</h1>
            <p className="detail__sub">{client.email} · Adviser: {client.adviser ?? '—'}</p>
            <span className={`status-pill status-pill--${client.status}`} style={{ marginTop: 'var(--space-2)' }}>{client.status}</span>
          </div>
        </div>
        <div className="detail__actions">
          <Button variant="secondary" icon="fa-pen" onClick={() => setEditing(true)}>Edit</Button>
          <Button variant="danger" icon="fa-trash" onClick={() => setConfirming(true)}>Delete</Button>
        </div>
      </header>

      <div className="detail__grid">
        <Card title="Profile" icon="fa-user" labelledBy="client-profile">
          <div className="detail__facts">
            <Fact label="Full name" value={client.name} />
            <Fact label="Email" value={client.email} />
            <Fact label="Adviser" value={client.adviser ?? '—'} />
            <Fact label="Status" value={client.status} />
            <Fact label="Last active" value={client.lastActive ?? '—'} />
            <Fact label="Role" value={client.role} />
          </div>
        </Card>
        <Card title="Recent activity" icon="fa-clock-rotate-left" labelledBy="client-activity">
          <ol className="detail__timeline">
            <li className="detail__timeline-item"><span className="detail__timeline-date">Today</span><span className="detail__timeline-text">Signed in to Horizon</span></li>
            <li className="detail__timeline-item"><span className="detail__timeline-date">Yesterday</span><span className="detail__timeline-text">Application submitted · Barista</span></li>
            <li className="detail__timeline-item"><span className="detail__timeline-date">2 days ago</span><span className="detail__timeline-text">Completed CV review session</span></li>
          </ol>
        </Card>
      </div>

      <Card title="Meetings" icon="fa-calendar-check" labelledBy="client-meetings">
        <DataTable caption={`Meetings for ${client.name}`} columns={MEETING_COLUMNS} rows={DEMO_CLIENT_MEETINGS} />
      </Card>

      <ClientForm
        open={editing}
        initial={client}
        onCancel={() => setEditing(false)}
        onSave={(patch) => { update(client.id, patch); setEditing(false); }}
      />

      <ConfirmDialog
        open={confirming}
        title={`Delete ${client.name}?`}
        message="This removes the client from Horizon. This action cannot be undone."
        confirmLabel="Delete client"
        onCancel={() => setConfirming(false)}
        onConfirm={() => { remove(client.id); setConfirming(false); navigate('/clients'); }}
      />
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