// ProtectedRoute: envuelve páginas que requieren autenticación.
// Si no hay token en localStorage, redirige al login.

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
