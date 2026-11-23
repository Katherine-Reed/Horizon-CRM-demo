import { useEffect, useState } from "react";
import Drawer from "../../common/Drawer.jsx";
import Button from "../../common/Button.jsx";
import FormField from "../../common/FormField.jsx";
import "./forms.css";

const EMPTY = {
  client: "",
  officer: "",
  date: new Date().toISOString().slice(0, 10),
  mode: "in-person",
  mood: 3,
  summary: "",
  followUp: "",
  status: "scheduled",
};

export default function CheckInForm({ open, initial, onCancel, onSave }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      setValues({ ...EMPTY, ...(initial ?? {}) });
      setErrors({});
    }
  }, [open, initial]);

  const set = (key) => (e) =>
    setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.client.trim()) next.client = "Client is required.";
    if (!values.officer.trim()) next.officer = "Officer is required.";
    if (!values.summary.trim()) next.summary = "Summary is required.";
    setErrors(next);
    if (Object.keys(next).length) return;
    onSave({ ...values, mood: Number(values.mood) || 0 });
  };

  return (
    <Drawer
      open={open}
      title={initial ? "Edit check-in" : "New check-in"}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            icon="fa-floppy-disk"
            onClick={handleSubmit}
          >
            {initial ? "Save changes" : "Log check-in"}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormField
            id="client"
            label="Client"
            value={values.client}
            onChange={set("client")}
            error={errors.client}
            required
          />
          <FormField
            id="officer"
            label="Officer"
            value={values.officer}
            onChange={set("officer")}
            error={errors.officer}
            required
          />
          <FormField
            id="date"
            label="Date"
            type="date"
            value={values.date}
            onChange={set("date")}
          />
          <FormField
            id="mode"
            label="Mode"
            type="select"
            value={values.mode}
            onChange={set("mode")}
            options={[
              { value: "in-person", label: "In person" },
              { value: "phone", label: "Phone" },
              { value: "video", label: "Video" },
            ]}
          />
          <FormField
            id="mood"
            label="Mood (1–5)"
            type="number"
            value={values.mood}
            onChange={set("mood")}
          />
          <FormField
            id="followUp"
            label="Follow-up"
            type="date"
            value={values.followUp}
            onChange={set("followUp")}
          />
          <div className="form-field--full">
            <FormField
              id="summary"
              label="Summary"
              type="textarea"
              rows={4}
              value={values.summary}
              onChange={set("summary")}
              error={errors.summary}
              required
            />
          </div>
        </div>
      </form>
    </Drawer>
  );
}
