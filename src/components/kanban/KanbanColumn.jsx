import KanbanCard from './KanbanCard.jsx';

export default function KanbanColumn({
  column, dragging, isDropTarget, onDragStart, onDragOver, onDragLeave, onDrop, onDragEnd,
}) {
  return (
    <div
      className={`kanban__column ${isDropTarget ? 'kanban__column--drop' : ''}`}
      onDragOver={onDragOver(column.id)}
      onDragLeave={onDragLeave(column.id)}
      onDrop={onDrop(column.id)}
      aria-label={`${column.title} column`}
    >
      <div className="kanban__column-header">
        <span>{column.title}</span>
        <span className="kanban__count" aria-label={`${column.cards.length} cards`}>{column.cards.length}</span>
      </div>
      {column.cards.map((card) => (
        <KanbanCard
          key={card.id}
          card={card}
          columnId={column.id}
          isDragging={dragging?.cardId === card.id}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
}