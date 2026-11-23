import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import KanbanBoard from '../kanban/KanbanBoard.jsx';
import { useKanban } from '../../hooks/useKanban.js';

export default function PipelinePage() {
  const { columns, moveCard } = useKanban();

  return (
    <>
      <PageHeader
        title="Recruitment pipeline"
        description="Track candidates from application through to offer."
        actions={
          <>
            <Button variant="primary" icon="fa-plus">New candidate</Button>
            <Button variant="secondary" icon="fa-filter">Filters</Button>
          </>
        }
      />
      <Card title="Pipeline board" icon="fa-columns" meta="Drag & drop to move candidates" labelledBy="pipeline-heading">
        <KanbanBoard columns={columns} onMoveCard={moveCard} />
      </Card>
    </>
  );
}