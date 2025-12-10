// SidebarMenu: menú lateral de navegación principal.

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar datos de sesión simulados
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-title">Menú principal</div>

      <NavLink to="/" end>
        Lista de ausentismos
      </NavLink>

      <NavLink to="/ausentismos/nuevo">Registrar ausentismo</NavLink>

      <hr style={{ margin: "0.8rem 0", borderColor: "#374151" }} />

      <button className="button secondary" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </aside>
  );
};

export default SidebarMenu;
