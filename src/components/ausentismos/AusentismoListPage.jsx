// AusentismoListPage: página principal del módulo.
// Muestra la lista de ausentismos, filtros y acciones.

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AusentismoFilterBar from "./AusentismoFilterBar";
import AusentismoTable from "./AusentismoTable";
import LoadingSpinner from "../common/LoadingSpinner";
import NotificationToast from "../common/NotificationToast";
import ConfirmDialog from "../common/ConfirmDialog";

const AusentismoListPage = () => {
  const [ausentismos, setAusentismos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });
  const [idEliminar, setIdEliminar] = useState(null);

  const navigate = useNavigate();

  // Carga de datos de ejemplo. Aquí se podría llamar al backend en Java.
  useEffect(() => {
    setLoading(true);

    const mockData = [
      {
        id: 1,
        empleado: "Juan Pérez",
        tipo: "Incapacidad",
        fechaInicio: "2025-12-01",
        fechaFin: "2025-12-03",
        motivo: "Incapacidad médica",
      },
      {
        id: 2,
        empleado: "Ana Gómez",
        tipo: "Vacaciones",
        fechaInicio: "2025-12-05",
        fechaFin: "2025-12-15",
        motivo: "Vacaciones anuales",
      },
    ];

    // Simular tiempo de respuesta del servidor
    setTimeout(() => {
      setAusentismos(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const handleNuevo = () => {
    navigate("/ausentismos/nuevo");
  };

  const handleEditar = (id) => {
    // Para la evidencia navegamos a la ruta de edición con el id.
    navigate(`/ausentismos/${id}`);
  };

  const handleEliminarClick = (id) => {
    setIdEliminar(id);
  };

  const handleConfirmEliminar = () => {
    if (idEliminar != null) {
      // Aquí se podría llamar al backend para eliminar.
      setAusentismos((prev) => prev.filter((a) => a.id !== idEliminar));
      setToast({ message: "Ausentismo eliminado correctamente.", type: "success" });
      setIdEliminar(null);
    }
  };

  // Filtrado por nombre de empleado
  const ausFiltrados = ausentismos.filter((a) =>
    a.empleado.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h2 className="page-title">Gestión de ausentismos</h2>

      <AusentismoFilterBar filtro={filtro} onChangeFiltro={setFiltro} />

      <div style={{ marginBottom: "0.8rem" }}>
        <button className="button" onClick={handleNuevo}>
          + Registrar ausentismo
        </button>
      </div>

      <AusentismoTable
        ausentismos={ausFiltrados}
        onEditar={handleEditar}
        onEliminar={handleEliminarClick}
      />

      {loading && <LoadingSpinner />}

      <NotificationToast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "success" })}
      />

      <ConfirmDialog
        open={idEliminar != null}
        title="Confirmar eliminación"
        message="¿Está seguro de eliminar este ausentismo?"
        onConfirm={handleConfirmEliminar}
        onCancel={() => setIdEliminar(null)}
      />
    </div>
  );
};

export default AusentismoListPage;
