import { useCallback, useState } from 'react';

export function useAuth() {
  const [session, setSession] = useState(null);

  const login = useCallback(async ({ email, role }) => {
    setSession({ email, role });
  }, []);

  const logout = useCallback(async () => {
    window.location.hash = '/';
    setSession(null);
  }, []);

  return { session, login, logout };
}