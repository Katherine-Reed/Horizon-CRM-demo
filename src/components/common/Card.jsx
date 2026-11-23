import Icon from './Icon.jsx';
import './Card.css';

export default function Card({ title, icon, meta, labelledBy, children }) {
  return (
    <section className="card" aria-labelledby={labelledBy}>
      <header className="card__header">
        <h2 className="card__title" id={labelledBy}>
          {icon && <Icon name={icon} className="card__title-icon" />}
          {title}
        </h2>
        {meta && <span className="card__meta">{meta}</span>}
      </header>
      {children}
    </section>
  );
}