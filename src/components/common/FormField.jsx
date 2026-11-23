import './FormField.css';

export default function FormField({
  id, label, type = 'text', value, onChange, error, required = false,
  options, rows, placeholder, autoComplete, disabled = false,
}) {
  const errorId = error ? `${id}-error` : undefined;

  const sharedProps = {
    id, name: id, value, onChange, required, disabled,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': errorId,
    placeholder, autoComplete,
  };

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
        {required && <span className="form-field__required" aria-hidden="true">*</span>}
      </label>

      {type === 'select' ? (
        <select className="form-field__input" {...sharedProps}>
          <option value="" disabled>Please choose…</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea className="form-field__input" rows={rows ?? 4} {...sharedProps} />
      ) : (
        <input className="form-field__input" type={type} {...sharedProps} />
      )}

      {error && <p className="form-field__error" id={errorId} role="alert">{error}</p>}
    </div>
  );
}