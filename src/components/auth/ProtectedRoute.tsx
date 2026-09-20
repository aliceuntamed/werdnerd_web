import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoadingScreen from '../ui/LoadingScreen';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingScreen message="Opening your collection…" />;
  if (!user) return <Navigate replace to={`/auth/login?next=${encodeURIComponent(location.pathname + location.search + location.hash)}`} />;
  return children;
}
