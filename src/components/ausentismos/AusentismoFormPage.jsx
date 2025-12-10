// AusentismoFormPage: página que contiene el formulario para crear/editar
// ausentismos. Se apoya en AusentismoForm para la captura de datos.

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AusentismoForm from "./AusentismoForm";

const AusentismoFormPage = () => {
  // Si viene un id por parámetro, la página funcionará en modo edición.
  const { id } = useParams();
  const navigate = useNavigate();

  // Esta función se ejecuta cuando el formulario se envía correctamente.
  const handleGuardar = (datos) => {
    // Aquí, en un escenario real, se haría la llamada al backend (Java)
    // usando fetch o axios para guardar la información.
    console.log("Guardando ausentismo:", datos, "ID:", id);

    // Después de guardar, se redirige a la lista de ausentismos.
    navigate("/");
  };

  return (
    <div>
      <h2 className="page-title">
        {id ? "Editar ausentismo" : "Registrar ausentismo"}
      </h2>

      {/* Componente de formulario reutilizable */}
      <AusentismoForm onSubmit={handleGuardar} />
    </div>
  );
};

// MUY IMPORTANTE: exportación por defecto
export default AusentismoFormPage;
