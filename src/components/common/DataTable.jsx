import EmptyState from './EmptyState.jsx';
import './DataTable.css';

export default function DataTable({
  caption, columns, rows, onRowClick, emptyMessage = 'No records found.',
}) {
  if (!rows.length) return <EmptyState message={emptyMessage} />;

  return (
    <div className="data-table__wrap">
      <table className="data-table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className={col.align ? `data-table__cell--${col.align}` : ''}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={onRowClick ? 'data-table__row--clickable' : ''}
              tabIndex={onRowClick ? 0 : undefined}
              onKeyDown={onRowClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onRowClick(row);
                }
              } : undefined}
            >
              {columns.map((col) => (
                <td key={col.key} className={col.align ? `data-table__cell--${col.align}` : ''}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}