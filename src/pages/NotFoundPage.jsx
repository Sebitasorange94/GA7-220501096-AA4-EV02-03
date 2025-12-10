// NotFoundPage: se muestra cuando la ruta no existe (error 404).

import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2 className="page-title">Página no encontrada</h2>
      <p>La ruta que intentas acceder no existe.</p>
      <Link
        to="/"
        className="button"
        style={{ marginTop: "1rem", display: "inline-block" }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
