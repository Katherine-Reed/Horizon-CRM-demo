import { useEffect, useState } from 'react';
import Drawer from '../../common/Drawer.jsx';
import Button from '../../common/Button.jsx';
import FormField from '../../common/FormField.jsx';
import './forms.css';

const EMPTY = { name: '', sector: '', email: '', openRoles: 0, status: 'active' };

export default function EmployerForm({ open, initial, onCancel, onSave }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) { setValues({ ...EMPTY, ...(initial ?? {}) }); setErrors({}); }
  }, [open, initial]);

  const set = (key) => (e) => setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name.trim()) { setErrors({ name: 'Employer name is required.' }); return; }
    onSave({ ...values, openRoles: Number(values.openRoles) || 0 });
  };

  return (
    <Drawer
      open={open}
      title={initial ? 'Edit employer' : 'New employer'}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" icon="fa-floppy-disk" onClick={handleSubmit}>
            {initial ? 'Save changes' : 'Add employer'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormField id="name" label="Employer name" value={values.name} onChange={set('name')} error={errors.name} required />
          <FormField id="sector" label="Sector" value={values.sector} onChange={set('sector')} />
          <FormField id="email" label="Contact email" type="email" value={values.email} onChange={set('email')} />
          <FormField id="openRoles" label="Open roles" type="number" value={values.openRoles} onChange={set('openRoles')} />
          <div className="form-field--full">
            <FormField id="status" label="Status" type="select" value={values.status} onChange={set('status')} options={[
              { value: 'active', label: 'Active' },
              { value: 'draft', label: 'Draft' },
            ]} />
          </div>
        </div>
      </form>
    </Drawer>
  );
}