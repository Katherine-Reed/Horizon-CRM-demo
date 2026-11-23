import CalendarDay from './CalendarDay.jsx';
import CalendarWeek from './CalendarWeek.jsx';
import CalendarMonth from './CalendarMonth.jsx';
import { DEMO_TODAY } from '../../lib/pageData.js';
import './Calendar.css';

export default function Calendar({ meetings, view, today = DEMO_TODAY }) {
  if (view === 'day') return <CalendarDay today={today} meetings={meetings} />;
  if (view === 'week') return <CalendarWeek today={today} meetings={meetings} />;
  return <CalendarMonth today={today} meetings={meetings} />;
}

export function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}