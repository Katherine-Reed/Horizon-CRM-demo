import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import './Drawer.css';

export default function Drawer({ open, title, onClose, children, footer, width = 520 }) {
  const ref = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement;
    const node = ref.current;
    if (!node) return;

    const focusables = node.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusables[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'Tab') {
        const list = Array.from(focusables).filter((el) => el.offsetParent !== null);
        if (!list.length) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocus.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer" role="presentation">
      <div className="drawer__overlay" onClick={onClose} aria-hidden="true" />
      <aside
        ref={ref}
        className="drawer__panel"
        style={{ '--drawer-width': `${width}px` }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <header className="drawer__header">
          <h2 className="drawer__title" id="drawer-title">{title}</h2>
          <button type="button" className="drawer__close" onClick={onClose} aria-label="Close">
            <Icon name="fa-xmark" />
          </button>
        </header>
        <div className="drawer__body">{children}</div>
        {footer && <footer className="drawer__footer">{footer}</footer>}
      </aside>
    </div>
  );
}