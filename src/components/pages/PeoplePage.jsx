import { useMemo, useState } from 'react';
import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import DataTable from '../common/DataTable.jsx';
import { useLocalRecords } from '../../hooks/useLocalRecords.js';
import { useRouter } from '../../router/Router.jsx';
import './PeoplePage.css';

export default function PeoplePage({
  title, description, columns, records: initialRecords,
  filterKey, filterValue, detailBase, renderForm,
  entityLabel = 'record', headerSlot,
}) {
  const { navigate } = useRouter();
  const { records, create } = useLocalRecords(initialRecords);
  const [search, setSearch] = useState('');
  const [creating, setCreating] = useState(false);

  const rows = useMemo(() => {
    let list = records;
    if (filterKey && filterValue) list = list.filter((p) => p[filterKey] === filterValue);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) =>
        p.name?.toLowerCase().includes(q) || p.email?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [records, filterKey, filterValue, search]);

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        actions={
          <>
            {headerSlot}
            <Button variant="primary" icon="fa-plus" onClick={() => setCreating(true)}>
              Add {entityLabel}
            </Button>
          </>
        }
      />

      <Card title={`${rows.length} ${rows.length === 1 ? 'record' : 'records'}`} icon="fa-address-book" labelledBy="people-heading">
        <div className="people-page__search">
          <label className="sr-only" htmlFor="people-search">Search</label>
          <input
            id="people-search"
            className="people-page__search-input"
            type="search"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <DataTable
          caption={title}
          columns={columns}
          rows={rows}
          onRowClick={detailBase ? (row) => navigate(`${detailBase}/${row.id}`) : undefined}
          emptyMessage="No matching records."
        />
      </Card>

      {renderForm && renderForm({
        open: creating,
        initial: null,
        onCancel: () => setCreating(false),
        onSave: (values) => { create({ ...values, type: filterValue ?? 'staff' }); setCreating(false); },
      })}
    </>
  );
}