import Icon from '../common/Icon.jsx';
import { toDateKey } from './Calendar.jsx';

export default function CalendarDay({ today, meetings }) {
  const key = toDateKey(today);
  const dayMeetings = meetings.filter((m) => m.date === key);
  const heading = today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="calendar__day-list">
      <h3 className="calendar__day-heading">{heading}</h3>
      {dayMeetings.length === 0 ? (
        <p className="empty-state">No meetings scheduled.</p>
      ) : (
        dayMeetings.map((m) => (
          <div key={m.id} className="calendar__event">
            <Icon name="fa-clock" />
            <span className="calendar__event-time">{m.time}</span>
            <span>{m.title}</span>
          </div>
        ))
      )}
    </div>
  );
}