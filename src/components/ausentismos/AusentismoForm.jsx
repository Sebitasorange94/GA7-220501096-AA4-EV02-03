// AusentismoForm: formulario para registrar o editar ausentismos.
// Incluye validaciones básicas en el frontend.

import React, { useState } from "react";

const AusentismoForm = ({ onSubmit }) => {
  // Estados para los campos del formulario
  const [empleado, setEmpleado] = useState("");
  const [tipo, setTipo] = useState("Incapacidad");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [motivo, setMotivo] = useState("");
  const [errores, setErrores] = useState({});

  // Función de validación de los campos obligatorios
  const validar = () => {
    const nuevosErrores = {};

    if (!empleado.trim()) {
      nuevosErrores.empleado = "El empleado es obligatorio.";
    }
    if (!fechaInicio) {
      nuevosErrores.fechaInicio = "La fecha de inicio es obligatoria.";
    }
    if (!fechaFin) {
      nuevosErrores.fechaFin = "La fecha de fin es obligatoria.";
    }

    // Validación de coherencia entre fechas
    if (fechaInicio && fechaFin && fechaFin < fechaInicio) {
      nuevosErrores.fechaFin =
        "La fecha fin no puede ser anterior a la fecha inicio.";
    }

    setErrores(nuevosErrores);

    // Si el objeto no tiene llaves, no hay errores
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validar()) {
      return; // Si hay errores, no continúa
    }

    // Se envían los datos al componente padre
    onSubmit({
      empleado,
      tipo,
      fechaInicio,
      fechaFin,
      motivo,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Empleado *</label>
        <input
          type="text"
          value={empleado}
          onChange={(e) => setEmpleado(e.target.value)}
        />
        {errores.empleado && (
          <span style={{ color: "red", fontSize: "0.8rem" }}>
            {errores.empleado}
          </span>
        )}
      </div>

      <div className="form-field">
        <label>Tipo de ausentismo *</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="Incapacidad">Incapacidad</option>
          <option value="Vacaciones">Vacaciones</option>
          <option value="Licencia no remunerada">Licencia no remunerada</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div className="form-field">
        <label>Fecha inicio *</label>
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
        {errores.fechaInicio && (
          <span style={{ color: "red", fontSize: "0.8rem" }}>
            {errores.fechaInicio}
          </span>
        )}
      </div>

      <div className="form-field">
        <label>Fecha fin *</label>
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
        />
        {errores.fechaFin && (
          <span style={{ color: "red", fontSize: "0.8rem" }}>
            {errores.fechaFin}
          </span>
        )}
      </div>

      <div className="form-field">
        <label>Motivo / Observaciones</label>
        <textarea
          rows="3"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
        />
      </div>

      <button type="submit" className="button">
        Guardar
      </button>
    </form>
  );
};

// MUY IMPORTANTE: exportación por defecto
export default AusentismoForm;
