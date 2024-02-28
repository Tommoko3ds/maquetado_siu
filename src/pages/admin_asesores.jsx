// admin_asesores.jsx
import React, { useState } from 'react';
import NuevoAsesorForm from '../components/nuevoAsesor_form';
import AsesoresTable from '../components/tabla_asesores';

const AdminAsesores = () => {
  const [asesores, setAsesores] = useState([]);

  const handleAgregarAsesor = (nuevoAsesor) => {
    setAsesores([...asesores, { id: Date.now(), ...nuevoAsesor }]);
  };

  const handleEditarAsesor = (id) => {
    // Lógica para editar el asesor según su id
  };

  const handleEliminarAsesor = (id) => {
    // Lógica para eliminar el asesor según su id
    setAsesores(asesores.filter((asesor) => asesor.id !== id));
  };

  return (
    <div>
      <h1>Bienvenido Presidente</h1>
      <NuevoAsesorForm onAgregarAsesor={handleAgregarAsesor} />
      <AsesoresTable asesores={asesores} onEditar={handleEditarAsesor} onEliminar={handleEliminarAsesor} />
    </div>
  );
};

export default AdminAsesores;
