import RecordListPage from './RecordListPage.jsx';
import ReferralForm from './forms/ReferralForm.jsx';
import { DEMO_REFERRALS } from '../../lib/pageData.js';
import './RecordListPage.css';

const COLUMNS = [
  { key: 'client', header: 'Client' },
  { key: 'service', header: 'Service' },
  { key: 'referredBy', header: 'Referred by' },
  { key: 'referredOn', header: 'Date', align: 'right' },
  { key: 'urgency', header: 'Urgency', render: (row) => <span className={`status-pill status-pill--${row.urgency}`}>{row.urgency}</span> },
  { key: 'status', header: 'Status', render: (row) => <span className={`status-pill status-pill--${row.status}`}>{row.status}</span> },
];

export default function WellbeingReferralsPage() {
  return (
    <RecordListPage
      title="Referrals"
      description="External and specialist referrals for clients."
      icon="fa-share-nodes"
      columns={COLUMNS}
      rows={DEMO_REFERRALS}
      entityLabel="referral"
      renderForm={(props) => <ReferralForm {...props} />}
    />
  );
}