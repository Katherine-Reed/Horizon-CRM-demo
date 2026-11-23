import { useEffect, useState } from 'react';
import Drawer from '../../common/Drawer.jsx';
import Button from '../../common/Button.jsx';
import FormField from '../../common/FormField.jsx';
import './forms.css';

const EMPTY = { name: '', role: '', employer: '', status: 'applied' };

export default function CandidateForm({ open, initial, onCancel, onSave }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) { setValues({ ...EMPTY, ...(initial ?? {}) }); setErrors({}); }
  }, [open, initial]);

  const set = (key) => (e) => setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name.trim()) { setErrors({ name: 'Name is required.' }); return; }
    onSave({ ...values, updated: 'Today' });
  };

  return (
    <Drawer
      open={open}
      title={initial ? 'Edit candidate' : 'New candidate'}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" icon="fa-floppy-disk" onClick={handleSubmit}>
            {initial ? 'Save changes' : 'Add candidate'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormField id="name" label="Candidate name" value={values.name} onChange={set('name')} error={errors.name} required />
          <FormField id="role" label="Role applied for" value={values.role} onChange={set('role')} />
          <FormField id="employer" label="Employer" value={values.employer} onChange={set('employer')} />
          <FormField id="status" label="Stage" type="select" value={values.status} onChange={set('status')} options={[
            { value: 'applied', label: 'Applied' },
            { value: 'resume sent', label: 'Resume sent' },
            { value: 'interview', label: 'Interview' },
            { value: 'offer', label: 'Job offer' },
          ]} />
        </div>
      </form>
    </Drawer>
  );
}