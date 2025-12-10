// AusentismoTable: tabla con los registros de ausentismos.

import React from "react";

const AusentismoTable = ({ ausentismos, onEditar, onEliminar }) => {
  if (ausentismos.length === 0) {
    return <p>No hay ausentismos registrados.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Empleado</th>
          <th>Tipo</th>
          <th>Fecha inicio</th>
          <th>Fecha fin</th>
          <th>Motivo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {ausentismos.map((a) => (
          <tr key={a.id}>
            <td>{a.empleado}</td>
            <td>{a.tipo}</td>
            <td>{a.fechaInicio}</td>
            <td>{a.fechaFin}</td>
            <td>{a.motivo}</td>
            <td>
              <button className="button secondary" onClick={() => onEditar(a.id)}>
                Editar
              </button>
              <button className="button danger" onClick={() => onEliminar(a.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AusentismoTable;
