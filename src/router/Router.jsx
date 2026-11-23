import { useEffect, useState, useCallback } from 'react';

export function useRouter() {
  const read = () => {
    const hash = window.location.hash.replace(/^#/, '') || '/';
    return hash;
  };

  const [path, setPath] = useState(read);

  useEffect(() => {
    const onHash = () => setPath(read());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((to) => {
    const next = to.startsWith('/') ? to : `/${to}`;
    if (window.location.hash !== `#${next}`) {
      window.location.hash = next;
    } else {
      setPath(next);
    }
  }, []);

  const back = useCallback(() => {
    window.history.back();
  }, []);

  return { path, navigate, back };
}

export function matchPath(pattern, actual) {
  const patternParts = pattern.split('/').filter(Boolean);
  const actualParts = actual.split('/').filter(Boolean);

  if (patternParts.length !== actualParts.length) return null;

  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    const p = patternParts[i];
    const a = actualParts[i];
    if (p.startsWith(':')) {
      params[p.slice(1)] = decodeURIComponent(a);
    } else if (p !== a) {
      return null;
    }
  }
  return { pattern, params };
}