import { useEffect, useState } from 'react';
import Drawer from '../../common/Drawer.jsx';
import Button from '../../common/Button.jsx';
import FormField from '../../common/FormField.jsx';
import './forms.css';

const EMPTY = { title: '', date: '', time: '', location: '', capacity: 20, status: 'scheduled' };

export default function SessionForm({ open, initial, onCancel, onSave }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) { setValues({ ...EMPTY, ...(initial ?? {}) }); setErrors({}); }
  }, [open, initial]);

  const set = (key) => (e) => setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim()) { setErrors({ title: 'Title is required.' }); return; }
    onSave({ ...values, capacity: Number(values.capacity) || 0 });
  };

  return (
    <Drawer
      open={open}
      title={initial ? 'Edit session' : 'New session'}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" icon="fa-floppy-disk" onClick={handleSubmit}>
            {initial ? 'Save changes' : 'Create session'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field--full">
            <FormField id="title" label="Session title" value={values.title} onChange={set('title')} error={errors.title} required />
          </div>
          <FormField id="date" label="Date" type="date" value={values.date} onChange={set('date')} />
          <FormField id="time" label="Time" type="time" value={values.time} onChange={set('time')} />
          <FormField id="location" label="Location" value={values.location} onChange={set('location')} />
          <FormField id="capacity" label="Capacity" type="number" value={values.capacity} onChange={set('capacity')} />
          <div className="form-field--full">
            <FormField id="status" label="Status" type="select" value={values.status} onChange={set('status')} options={[
              { value: 'scheduled', label: 'Scheduled' },
              { value: 'draft', label: 'Draft' },
              { value: 'done', label: 'Done' },
            ]} />
          </div>
        </div>
      </form>
    </Drawer>
  );
}