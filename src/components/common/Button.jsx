import Icon from './Icon.jsx';
import './Button.css';

export default function Button({
  variant = 'primary', icon, block = false, children, type = 'button', ...rest
}) {
  const classes = ['btn', `btn--${variant}`, block && 'btn--block'].filter(Boolean).join(' ');
  return (
    <button type={type} className={classes} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
}