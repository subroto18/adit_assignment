// routes/PublicRoute.tsx

import type { ReactNode } from "react";

import { Navigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/context/AuthContext";
import AuthSuspense from "@/components/common/AuthSuspense";

type Props = {
  children: ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const { isAuthenticated, isInitializing } = useAuth();

  if (isInitializing) {
    return <AuthSuspense />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
