export default function Icon({ name, className = '' }) {
  return <i className={`fas ${name} ${className}`.trim()} aria-hidden="true" />;
}