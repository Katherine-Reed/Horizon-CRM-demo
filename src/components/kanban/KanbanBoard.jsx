import { useState } from 'react';
import KanbanColumn from './KanbanColumn.jsx';
import './KanbanBoard.css';

export default function KanbanBoard({ columns, onMoveCard }) {
  const [dragging, setDragging] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  const handleDragStart = (cardId, columnId) => (event) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', cardId);
    setDragging({ cardId, columnId });
  };

  const handleDragOver = (columnId) => (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (dropTarget !== columnId) setDropTarget(columnId);
  };

  const handleDragLeave = (columnId) => () => {
    if (dropTarget === columnId) setDropTarget(null);
  };

  const handleDrop = (targetColumnId) => (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    if (cardId && dragging && dragging.columnId !== targetColumnId) {
      onMoveCard(dragging.columnId, targetColumnId, cardId);
    }
    setDragging(null);
    setDropTarget(null);
  };

  const handleDragEnd = () => { setDragging(null); setDropTarget(null); };

  return (
    <div className="kanban">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          dragging={dragging}
          isDropTarget={dropTarget === column.id}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}