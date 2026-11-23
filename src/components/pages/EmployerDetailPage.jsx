import { useMemo, useState } from 'react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import EmployerForm from './forms/EmployerForm.jsx';
import { useRouter } from '../../router/Router.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { DEMO_PEOPLE } from '../../lib/pageData.js';
import './DetailPage.css';

const ROLE_COLUMNS = [
  { key: 'title', header: 'Role' },
  { key: 'location', header: 'Location' },
  { key: 'salary', header: 'Salary', align: 'right' },
  { key: 'status', header: 'Status' },
];

export default function EmployerDetailPage({ id }) {
  const { navigate } = useRouter();
  const { records, update } = useLocalRecords(DEMO_PEOPLE);
  const [editing, setEditing] = useState(false);
  const employer = useMemo(() => records.find((r) => r.id === id), [records, id]);

  if (!employer) {
    return (
      <div className="detail">
        <Card title="Employer not found" icon="fa-circle-exclamation" labelledBy="nf">
          <Button variant="primary" onClick={() => navigate('/employers')}>Back to employers</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="detail">
      <nav className="detail__breadcrumb" aria-label="Breadcrumb">
        <a href="#/employers">Employers</a>
        <span aria-hidden="true">/</span>
        <span>{employer.name}</span>
      </nav>

      <header className="detail__header">
        <div className="detail__identity">
          <div className="detail__avatar" aria-hidden="true"><i className="fas fa-building" /></div>
          <div>
            <h1 className="detail__name">{employer.name}</h1>
            <p className="detail__sub">{employer.sector} · {employer.email}</p>
            <span className={`status-pill status-pill--${employer.status}`} style={{ marginTop: 'var(--space-2)' }}>{employer.status}</span>
          </div>
        </div>
        <div className="detail__actions">
          <Button variant="secondary" icon="fa-pen" onClick={() => setEditing(true)}>Edit</Button>
        </div>
      </header>

      <div className="detail__grid">
        <Card title="Overview" icon="fa-info-circle" labelledBy="employer-overview">
          <div className="detail__facts">
            <Fact label="Name" value={employer.name} />
            <Fact label="Sector" value={employer.sector} />
            <Fact label="Contact" value={employer.email} />
            <Fact label="Open roles" value={employer.openRoles} />
            <Fact label="Status" value={employer.status} />
          </div>
        </Card>
        <Card title="Hiring history" icon="fa-history" labelledBy="employer-history">
          <ol className="detail__timeline">
            <li className="detail__timeline-item"><span className="detail__timeline-date">2025-04-01</span><span className="detail__timeline-text">Posted 3 new roles</span></li>
            <li className="detail__timeline-item"><span className="detail__timeline-date">2025-03-15</span><span className="detail__timeline-text">Made offer to A. Hassan</span></li>
          </ol>
        </Card>
      </div>

      <Card title="Open roles" icon="fa-briefcase" labelledBy="employer-roles">
        <DataTable
          caption={`Open roles at ${employer.name}`}
          columns={ROLE_COLUMNS}
          rows={[
            { id: 'r1', title: 'Barista', location: 'London', salary: '£22,000', status: 'open' },
            { id: 'r2', title: 'Shift Lead', location: 'London', salary: '£26,000', status: 'open' },
            { id: 'r3', title: 'Store Manager', location: 'Croydon', salary: '£34,000', status: 'interview' },
          ]}
        />
      </Card>

      <EmployerForm open={editing} initial={employer} onCancel={() => setEditing(false)} onSave={(patch) => { update(employer.id, patch); setEditing(false); }} />
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