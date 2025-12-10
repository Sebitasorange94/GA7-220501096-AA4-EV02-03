// AppLayout: define la estructura general de la interfaz
// (Header + Sidebar + contenido principal).

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SidebarMenu from "./SidebarMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <SidebarMenu />
        <main className="main-content">
          {/* Outlet es donde se cargan las páginas según la ruta */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
