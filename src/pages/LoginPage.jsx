// LoginPage: pantalla de ingreso al sistema.
// Para la evidencia se simula la autenticación guardando un token ficticio.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas de campos vacíos
    if (!usuario || !clave) {
      setError("Por favor ingrese usuario y contraseña.");
      return;
    }

    // Simulación de autenticación exitosa
    localStorage.setItem("token", "token-ficticio");
    localStorage.setItem("usuario", usuario);

    // Redirigir a la página principal del módulo
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2 style={{ marginBottom: "1rem" }}>Ingreso al sistema</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Contraseña</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
            {error}
          </p>
        )}
        <button type="submit" className="button">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
