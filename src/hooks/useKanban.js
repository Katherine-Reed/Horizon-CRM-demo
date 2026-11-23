import { useCallback, useState } from 'react';
import { INITIAL_KANBAN_COLUMNS } from '../lib/pageData.js';

export function useKanban(initialColumns = INITIAL_KANBAN_COLUMNS) {
  const [columns, setColumns] = useState(initialColumns);

  const moveCard = useCallback((fromColId, toColId, cardId) => {
    if (fromColId === toColId) return;

    setColumns((prev) => {
      const fromCol = prev.find((c) => c.id === fromColId);
      const card = fromCol?.cards.find((c) => c.id === cardId);
      if (!card) return prev;

      return prev.map((col) => {
        if (col.id === fromColId) {
          return { ...col, cards: col.cards.filter((c) => c.id !== cardId) };
        }
        if (col.id === toColId) {
          return { ...col, cards: [...col.cards, card] };
        }
        return col;
      });
    });
  }, []);

  return { columns, moveCard };
}