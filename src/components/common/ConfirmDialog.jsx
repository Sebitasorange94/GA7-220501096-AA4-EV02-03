// ConfirmDialog: modal para confirmar acciones importantes (ej. eliminar).

import React from "react";

const ConfirmDialog = ({ open, title, message, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ marginBottom: "1rem" }}>{message}</p>
        <div style={{ textAlign: "right" }}>
          <button className="button secondary" onClick={onCancel}>
            Cancelar
          </button>
          <button className="button danger" onClick={onConfirm}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
