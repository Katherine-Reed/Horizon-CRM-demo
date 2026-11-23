import { useEffect, useState } from 'react';
import Drawer from '../../common/Drawer.jsx';
import Button from '../../common/Button.jsx';
import FormField from '../../common/FormField.jsx';
import './forms.css';

const EMPTY = {
  client: '', officer: '', category: '', priority: 'medium', status: 'open',
  opened: new Date().toISOString().slice(0, 10),
  lastReview: new Date().toISOString().slice(0, 10),
  summary: '',
};

export default function WellbeingCaseForm({ open, initial, onCancel, onSave }) {
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
    if (!values.officer.trim()) next.officer = 'Officer is required.';
    if (!values.category.trim()) next.category = 'Category is required.';
    if (!values.summary.trim()) next.summary = 'Summary is required.';
    setErrors(next);
    if (Object.keys(next).length) return;
    onSave(values);
  };

  return (
    <Drawer
      open={open}
      title={initial ? 'Edit wellbeing case' : 'New wellbeing case'}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" icon="fa-floppy-disk" onClick={handleSubmit}>
            {initial ? 'Save changes' : 'Create case'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormField id="client" label="Client" value={values.client} onChange={set('client')} error={errors.client} required />
          <FormField id="officer" label="Wellbeing officer" value={values.officer} onChange={set('officer')} error={errors.officer} required />
          <FormField id="category" label="Category" value={values.category} onChange={set('category')} error={errors.category} required placeholder="e.g. Anxiety, Bereavement" />
          <FormField id="priority" label="Priority" type="select" value={values.priority} onChange={set('priority')} options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
            { value: 'urgent', label: 'Urgent' },
          ]} />
          <FormField id="status" label="Status" type="select" value={values.status} onChange={set('status')} options={[
            { value: 'open', label: 'Open' },
            { value: 'monitoring', label: 'Monitoring' },
            { value: 'closed', label: 'Closed' },
          ]} />
          <FormField id="opened" label="Opened" type="date" value={values.opened} onChange={set('opened')} />
          <div className="form-field--full">
            <FormField id="summary" label="Summary" type="textarea" rows={4} value={values.summary} onChange={set('summary')} error={errors.summary} required placeholder="Brief context for the case…" />
          </div>
        </div>
      </form>
    </Drawer>
  );
}