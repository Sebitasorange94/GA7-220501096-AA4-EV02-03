// AusentismoFormPage: página que contiene el formulario para crear/editar.

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AusentismoForm from "./AusentismoForm";

const AusentismoFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGuardar = (datos) => {
    // Aquí se integrarían las llamadas al backend (POST/PUT).
    console.log("Guardando ausentismo:", datos);

    // Volver a la lista después de guardar
    navigate("/");
  };

  return (
    <div>
      <h2 className="page-title">
        {id ? "Editar ausentismo" : "Registrar ausentismo"}
      </h2>
      <AusentismoForm onSubmit={handleGuardar} />
    </div>
  );
};

export default AusentismoFormPage;
