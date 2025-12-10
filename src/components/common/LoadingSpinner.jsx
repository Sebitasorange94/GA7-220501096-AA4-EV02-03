// LoadingSpinner: indicador visual de carga para operaciones asíncronas.

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="spinner-backdrop">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
