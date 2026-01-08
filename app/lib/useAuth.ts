'use client';

import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<{ uid: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser({ uid: 'demo-user' });
    setLoading(false);
  }, []);

  return { user, loading };
}
