import { useCallback, useState } from 'react';

export function useLocalRecords(initialRecords) {
  const [records, setRecords] = useState(initialRecords);

  const get = useCallback(
    (id) => records.find((r) => r.id === id),
    [records]
  );

  const create = useCallback((data) => {
    const id = `local-${Date.now()}`;
    const next = { id, ...data };
    setRecords((prev) => [next, ...prev]);
    return next;
  }, []);

  const update = useCallback((id, patch) => {
    setRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...patch } : r))
    );
  }, []);

  const remove = useCallback((id) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  }, []);

  return { records, get, create, update, remove, setRecords };
}