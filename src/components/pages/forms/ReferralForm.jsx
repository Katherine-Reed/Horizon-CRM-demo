import { useEffect, useState } from 'react';
import Drawer from '../../common/Drawer.jsx';
import Button from '../../common/Button.jsx';
import FormField from '../../common/FormField.jsx';
import './forms.css';

const EMPTY = {
  client: '', service: '', referredBy: '',
  referredOn: new Date().toISOString().slice(0, 10),
  urgency: 'medium', status: 'in-progress', notes: '',
};

export default function ReferralForm({ open, initial, onCancel, onSave }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) { setValues({ ...EMPTY, ...(initial ?? {}) }); setErrors({}); }
  }, [open, initial]);

  const set = (key) => (e) => setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.client.trim()) next.client = 'Client is required.';
    if (!values.service.trim()) next.service = 'Service is required.';
    if (!values.referredBy.trim()) next.referredBy = 'Referred by is required.';
    setErrors(next);
    if (Object.keys(next).length) return;
    onSave(values);
  };

  return (
    <Drawer
      open={open}
      title={initial ? 'Edit referral' : 'New referral'}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" icon="fa-floppy-disk" onClick={handleSubmit}>
            {initial ? 'Save changes' : 'Create referral'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormField id="client" label="Client" value={values.client} onChange={set('client')} error={errors.client} required />
          <FormField id="service" label="Service" value={values.service} onChange={set('service')} error={errors.service} required />
          <FormField id="referredBy" label="Referred by" value={values.referredBy} onChange={set('referredBy')} error={errors.referredBy} required />
          <FormField id="referredOn" label="Referred on" type="date" value={values.referredOn} onChange={set('referredOn')} />
          <FormField id="urgency" label="Urgency" type="select" value={values.urgency} onChange={set('urgency')} options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
            { value: 'urgent', label: 'Urgent' },
          ]} />
          <FormField id="status" label="Status" type="select" value={values.status} onChange={set('status')} options={[
            { value: 'in-progress', label: 'In progress' },
            { value: 'accepted', label: 'Accepted' },
            { value: 'completed', label: 'Completed' },
            { value: 'declined', label: 'Declined' },
          ]} />
          <div className="form-field--full">
            <FormField id="notes" label="Notes" type="textarea" rows={3} value={values.notes} onChange={set('notes')} />
          </div>
        </div>
      </form>
    </Drawer>
  );
}