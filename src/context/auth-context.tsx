'use client';

import type { User } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import { app } from '@/lib/firebase';

const auth = getAuth(app);

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  const signOut = async () => {
    await firebaseSignOut(auth);
    router.push('/login');
  };

  const value = { user, loading, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
