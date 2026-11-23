export default function KanbanCard({ card, columnId, isDragging, onDragStart, onDragEnd }) {
  return (
    <article
      className={`kanban__card ${isDragging ? 'kanban__card--dragging' : ''}`}
      draggable
      onDragStart={onDragStart(card.id, columnId)}
      onDragEnd={onDragEnd}
    >
      <span className="kanban__card-name">{card.name}</span>
      <span className="kanban__card-role">{card.role}</span>
    </article>
  );
}