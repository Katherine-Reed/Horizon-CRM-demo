import { useMemo } from 'react';
import { toDateKey } from './Calendar.jsx';

const DOW_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function CalendarWeek({ today, meetings }) {
  const days = useMemo(() => {
    const monday = new Date(today);
    const dow = monday.getDay();
    const diff = dow === 0 ? -6 : 1 - dow;
    monday.setDate(monday.getDate() + diff);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
  }, [today]);

  return (
    <div className="calendar__grid" role="table" aria-label="Week view">
      {DOW_LABELS.map((d) => <div key={d} className="calendar__dow" role="columnheader">{d}</div>)}
      {days.map((d) => {
        const key = toDateKey(d);
        const dayEvents = meetings.filter((m) => m.date === key);
        return (
          <div key={key} className="calendar__cell calendar__cell--week" role="cell">
            <span className="calendar__date">{d.getDate()}</span>
            {dayEvents.map((m) => (
              <span key={m.id} className="calendar__chip" title={`${m.time} ${m.title}`}>
                {m.time} {m.title}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}