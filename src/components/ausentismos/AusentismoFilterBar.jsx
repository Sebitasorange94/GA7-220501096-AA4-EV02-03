// AusentismoFilterBar: barra de filtro por nombre de empleado.

import React from "react";

const AusentismoFilterBar = ({ filtro, onChangeFiltro }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filtrar por nombre de empleado..."
        value={filtro}
        onChange={(e) => onChangeFiltro(e.target.value)}
      />
    </div>
  );
};

export default AusentismoFilterBar;
