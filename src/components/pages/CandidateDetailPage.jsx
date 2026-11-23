import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import ConfirmDialog from '../common/ConfirmDialog.jsx';
import CandidateForm from './forms/CandidateForm.jsx';
import { useRouter } from '../../router/Router.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { DEMO_CANDIDATES } from '../../lib/pageData.js';
import './DetailPage.css';

const STAGES = ['applied', 'resume sent', 'interview', 'offer'];
const INTERVIEW_COLUMNS = [
  { key: 'date', header: 'Date' },
  { key: 'time', header: 'Time' },
  { key: 'interviewer', header: 'Interviewer' },
  { key: 'outcome', header: 'Outcome' },
];

export default function CandidateDetailPage({ id }) {
  const { navigate } = useRouter();
  const { records, update, remove } = useLocalRecords(DEMO_CANDIDATES);
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const candidate = useMemo(() => records.find((r) => r.id === id), [records, id]);

  if (!candidate) {
    return (
      <div className="detail">
        <Card title="Candidate not found" icon="fa-circle-exclamation" labelledBy="nf">
          <Button variant="primary" onClick={() => navigate('/candidates')}>Back to candidates</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="detail">
      <nav className="detail__breadcrumb" aria-label="Breadcrumb">
        <a href="#/candidates">Candidates</a>
        <span aria-hidden="true">/</span>
        <span>{candidate.name}</span>
      </nav>

      <header className="detail__header">
        <div className="detail__identity">
          <div className="detail__avatar" aria-hidden="true">{candidate.name.charAt(0)}</div>
          <div>
            <h1 className="detail__name">{candidate.name}</h1>
            <p className="detail__sub">{candidate.role} · {candidate.employer}</p>
            <span className={`status-pill status-pill--${candidate.status}`} style={{ marginTop: 'var(--space-2)' }}>{candidate.status}</span>
          </div>
        </div>
        <div className="detail__actions">
          <Button variant="secondary" icon="fa-pen" onClick={() => setEditing(true)}>Edit</Button>
          <Button variant="danger" icon="fa-trash" onClick={() => setConfirming(true)}>Delete</Button>
        </div>
      </header>

      <Card title="Move stage" icon="fa-forward" labelledBy="candidate-stage">
        <div className="stage-buttons" role="group" aria-label="Move candidate to stage">
          {STAGES.map((s) => (
            <button
              key={s}
              type="button"
              className={`stage-button ${candidate.status === s ? 'stage-button--active' : ''}`}
              aria-pressed={candidate.status === s}
              onClick={() => update(candidate.id, { status: s, updated: 'Today' })}
            >
              {s}
            </button>
          ))}
        </div>
      </Card>

      <div className="detail__grid">
        <Card title="Details" icon="fa-id-card" labelledBy="candidate-facts">
          <div className="detail__facts">
            <Fact label="Name" value={candidate.name} />
            <Fact label="Role applied" value={candidate.role} />
            <Fact label="Employer" value={candidate.employer} />
            <Fact label="Stage" value={candidate.status} />
            <Fact label="Last updated" value={candidate.updated ?? '—'} />
          </div>
        </Card>
        <Card title="Interviews" icon="fa-comments" labelledBy="candidate-interviews">
          <DataTable
            caption="Interviews"
            columns={INTERVIEW_COLUMNS}
            rows={[{ id: 'i1', date: '2025-04-08', time: '14:00', interviewer: 'L. Kowalski', outcome: 'Awaiting' }]}
            emptyMessage="No interviews scheduled."
          />
        </Card>
      </div>

      <CandidateForm open={editing} initial={candidate} onCancel={() => setEditing(false)} onSave={(patch) => { update(candidate.id, patch); setEditing(false); }} />

      <ConfirmDialog
        open={confirming}
        title={`Delete ${candidate.name}?`}
        message="This removes the candidate from the pipeline."
        confirmLabel="Delete candidate"
        onCancel={() => setConfirming(false)}
        onConfirm={() => { remove(candidate.id); setConfirming(false); navigate('/candidates'); }}
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