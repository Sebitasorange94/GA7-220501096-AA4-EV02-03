// Componente principal de la aplicación.
// Aquí se definen las rutas del frontend del módulo de Ausentismos.

import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import AusentismoListPage from "./components/ausentismos/AusentismoListPage";
import AusentismoFormPage from "./components/ausentismos/AusentismoFormPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Ruta pública para el ingreso al sistema */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas que usan el layout principal */}
      <Route element={<AppLayout />}>
        {/* Página de inicio: lista de ausentismos */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AusentismoListPage />
            </ProtectedRoute>
          }
        />

        {/* Registro de nuevo ausentismo */}
        <Route
          path="/ausentismos/nuevo"
          element={
            <ProtectedRoute>
              <AusentismoFormPage />
            </ProtectedRoute>
          }
        />

        {/* Edición de ausentismo existente */}
        <Route
          path="/ausentismos/:id"
          element={
            <ProtectedRoute>
              <AusentismoFormPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Ruta para páginas no encontradas */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
