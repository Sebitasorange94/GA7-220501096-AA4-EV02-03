// Header: barra superior con el nombre de la app y el usuario en sesión.

import React from "react";

const Header = () => {
  const usuario = localStorage.getItem("usuario") || "Invitado";

  return (
    <header className="header">
      <div>
        <strong>IPS Ausentismos</strong> — Módulo de gestión
      </div>
      <div style={{ fontSize: "0.9rem" }}>Usuario: {usuario}</div>
    </header>
  );
};

export default Header;
