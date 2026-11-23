import { useMemo, useState } from 'react';
import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { useRouter } from '../../router/Router.jsx';
import './RecordListPage.css';

export default function RecordListPage({
  title, description, icon = 'fa-list', columns, rows: initialRows = [],
  detailBase, renderForm, entityLabel = 'record', emptyMessage = 'No records yet.',
}) {
  const { navigate } = useRouter();
  const { records, create } = useLocalRecords(initialRows);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [creating, setCreating] = useState(false);

  const rows = useMemo(() => {
    let list = records;
    if (status !== 'all') list = list.filter((r) => r.status === status);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((r) => Object.values(r).some((v) => String(v).toLowerCase().includes(q)));
    }
    return list;
  }, [records, search, status]);

  const statuses = useMemo(() => ['all', ...new Set(records.map((r) => r.status).filter(Boolean))], [records]);

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        actions={<Button variant="primary" icon="fa-plus" onClick={() => setCreating(true)}>New {entityLabel}</Button>}
      />

      <Card title={title} icon={icon} labelledBy="list-heading">
        <div className="record-list__toolbar">
          <input
            className="record-list__search"
            type="search"
            placeholder="Search…"
            aria-label="Search records"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {statuses.length > 2 && (
            <div className="record-list__filters" role="group" aria-label="Filter by status">
              {statuses.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`record-list__filter ${status === s ? 'record-list__filter--active' : ''}`}
                  aria-pressed={status === s}
                  onClick={() => setStatus(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
        <DataTable
          caption={title}
          columns={columns}
          rows={rows}
          onRowClick={detailBase ? (row) => navigate(`${detailBase}/${row.id}`) : undefined}
          emptyMessage={emptyMessage}
        />
      </Card>

      {renderForm && renderForm({
        open: creating,
        initial: null,
        onCancel: () => setCreating(false),
        onSave: (values) => { create(values); setCreating(false); },
      })}
    </>
  );
}