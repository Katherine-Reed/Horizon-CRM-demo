import { useCallback, useState } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);

  const show = useCallback((message, variant = 'success') => {
    setToast({ message, variant, id: Date.now() });
  }, []);

  const dismiss = useCallback(() => setToast(null), []);

  return { toast, show, dismiss };
}