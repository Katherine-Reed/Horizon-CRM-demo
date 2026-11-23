import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import ConfirmDialog from '../common/ConfirmDialog.jsx';
import WellbeingCaseForm from './forms/WellbeingCaseForm.jsx';
import { useRouter } from '../../router/Router.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { DEMO_WELLBEING_CASES } from '../../lib/pageData.js';
import './DetailPage.css';

const PRIORITIES = ['low', 'medium', 'high', 'urgent'];
const STATUSES = ['open', 'monitoring', 'closed'];
const NOTE_COLUMNS = [
  { key: 'date', header: 'Date' },
  { key: 'author', header: 'Author' },
  { key: 'note', header: 'Note' },
];

export default function WellbeingCaseDetailPage({ id }) {
  const { navigate } = useRouter();
  const { records, update, remove } = useLocalRecords(DEMO_WELLBEING_CASES);
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const record = useMemo(() => records.find((r) => r.id === id), [records, id]);

  if (!record) {
    return (
      <div className="detail">
        <Card title="Case not found" icon="fa-circle-exclamation" labelledBy="nf">
          <Button variant="primary" onClick={() => navigate('/wellbeing/cases')}>Back to cases</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="detail">
      <nav className="detail__breadcrumb" aria-label="Breadcrumb">
        <a href="#/wellbeing/cases">Wellbeing cases</a>
        <span aria-hidden="true">/</span>
        <span>{record.client}</span>
      </nav>

      <header className="detail__header">
        <div className="detail__identity">
          <div className="detail__avatar" aria-hidden="true"><i className="fas fa-heart-pulse" /></div>
          <div>
            <h1 className="detail__name">{record.client}</h1>
            <p className="detail__sub">{record.category} · Officer: {record.officer}</p>
            <div style={{ marginTop: 'var(--space-2)', display: 'flex', gap: 'var(--space-2)' }}>
              <span className={`status-pill status-pill--${record.priority}`}>{record.priority}</span>
              <span className={`status-pill status-pill--${record.status}`}>{record.status}</span>
            </div>
          </div>
        </div>
        <div className="detail__actions">
          <Button variant="secondary" icon="fa-pen" onClick={() => setEditing(true)}>Edit</Button>
          <Button variant="danger" icon="fa-trash" onClick={() => setConfirming(true)}>Delete</Button>
        </div>
      </header>

      <Card title="Priority" icon="fa-triangle-exclamation" labelledBy="wb-priority">
        <div className="stage-buttons" role="group" aria-label="Set priority">
          {PRIORITIES.map((p) => (
            <button
              key={p}
              type="button"
              className={`stage-button ${record.priority === p ? 'stage-button--active' : ''}`}
              aria-pressed={record.priority === p}
              onClick={() => update(record.id, { priority: p })}
            >
              {p}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Status" icon="fa-flag" labelledBy="wb-status">
        <div className="stage-buttons" role="group" aria-label="Set status">
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              className={`stage-button ${record.status === s ? 'stage-button--active' : ''}`}
              aria-pressed={record.status === s}
              onClick={() => update(record.id, { status: s })}
            >
              {s}
            </button>
          ))}
        </div>
      </Card>

      <div className="detail__grid">
        <Card title="Case details" icon="fa-info-circle" labelledBy="wb-facts">
          <div className="detail__facts">
            <Fact label="Client" value={record.client} />
            <Fact label="Officer" value={record.officer} />
            <Fact label="Category" value={record.category} />
            <Fact label="Opened" value={record.opened} />
            <Fact label="Last review" value={record.lastReview} />
            <Fact label="Priority" value={record.priority} />
          </div>
        </Card>
        <Card title="Summary" icon="fa-align-left" labelledBy="wb-summary">
          <p className="detail__timeline-text">{record.summary}</p>
        </Card>
      </div>

      <Card title="Case notes" icon="fa-note-sticky" labelledBy="wb-notes">
        <DataTable
          caption="Case notes"
          columns={NOTE_COLUMNS}
          rows={[
            { id: 'n1', date: '2025-04-04', author: record.officer, note: 'Reviewed progress; agreed next steps.' },
            { id: 'n2', date: '2025-03-28', author: record.officer, note: 'Initial assessment completed.' },
          ]}
          emptyMessage="No notes recorded yet."
        />
      </Card>

      <WellbeingCaseForm open={editing} initial={record} onCancel={() => setEditing(false)} onSave={(patch) => { update(record.id, patch); setEditing(false); }} />

      <ConfirmDialog
        open={confirming}
        title={`Delete case for ${record.client}?`}
        message="This removes the case record. This action cannot be undone."
        confirmLabel="Delete case"
        onCancel={() => setConfirming(false)}
        onConfirm={() => { remove(record.id); setConfirming(false); navigate('/wellbeing/cases'); }}
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