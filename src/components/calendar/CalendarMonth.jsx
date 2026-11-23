import { toDateKey } from './Calendar.jsx';

const DOW_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function CalendarMonth({ today, meetings }) {
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDow = firstOfMonth.getDay();
  const leadingBlanks = startDow === 0 ? 6 : startDow - 1;

  const cells = [];
  for (let i = 0; i < leadingBlanks; i++) {
    cells.push(<div key={`blank-${i}`} className="calendar__cell calendar__cell--empty" aria-hidden="true" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = toDateKey(new Date(year, month, day));
    const dayEvents = meetings.filter((m) => m.date === dateKey);
    cells.push(
      <div key={dateKey} className="calendar__cell" role="cell">
        <span className="calendar__date">{day}</span>
        {dayEvents.map((m) => (
          <span key={m.id} className="calendar__chip calendar__chip--accent" title={`${m.time} ${m.title}`}>
            {m.time} {m.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="calendar__grid" role="table" aria-label="Month view">
      {DOW_LABELS.map((d) => <div key={d} className="calendar__dow" role="columnheader">{d}</div>)}
      {cells}
    </div>
  );
}