// NotificationToast: muestra mensajes flotantes de éxito o error.

import React from "react";

const NotificationToast = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  return (
    <div className={`toast ${type === "error" ? "error" : ""}`}>
      <span>{message}</span>
      <button
        style={{
          marginLeft: "0.5rem",
          border: "none",
          background: "transparent",
          color: "white",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default NotificationToast;
