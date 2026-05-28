import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface DecodedToken {
  exp: number; // standard JWT exp claim (in seconds since epoch)
}

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Otherwise render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
