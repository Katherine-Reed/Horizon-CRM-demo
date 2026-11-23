import { useEffect } from "react";
import Icon from "./Icon.jsx";
import "./Toast.css";

export default function Toast({ toast, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [toast, duration, onClose]);

  if (!toast) return null;

  const variant = toast.variant ?? "success";

  return (
    <div
      className={`toast toast--${variant}`}
      role={variant === "error" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
    >
      <Icon
        name={
          variant === "success" ? "fa-circle-check" : "fa-circle-exclamation"
        }
        className="toast__icon"
      />
      <span className="toast__message">{toast.message}</span>
      <button
        type="button"
        className="toast__close"
        onClick={onClose}
        aria-label="Dismiss"
      >
        <Icon name="fa-xmark" />
      </button>
    </div>
  );
}
