// NuevoAsesorForm.jsx
import React, { useState } from 'react';

const NuevoAsesorForm = ({ onAgregarAsesor }) => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [estatus, setEstatus] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);

  // ... otros estados según tus necesidades

  const handleAgregarClick = () => {
    // Lógica para agregar el asesor, puedes enviar estos datos al componente principal
    onAgregarAsesor({ cedula, nombre, estatus /* ... otros campos */ });
    // Restablecer estados
    setCedula('');
    setNombre('');
    setEstatus('');
    // ... restablecer otros estados según tus necesidades
  };
  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <div>
      <button
        className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none"
        onClick={abrirModal}
      >
        Agregar Asesor
      </button>

      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 max-w-md mx-auto rounded-md shadow-md">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={cerrarModal}
              >
                X
              </button>
            </div>
            <h1 className="text-black font-bold text-align c">Formulario Asesor</h1>
            <label className="block mb-2 text-gray-700">Cédula:</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
            <label className="block mt-4 mb-2 text-gray-700">Nombre:</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label className="block mt-4 mb-2 text-gray-700">Estatus:</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              value={estatus}
              onChange={(e) => setEstatus(e.target.value)}
            />
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleAgregarClick}
            >
              Agregar Asesor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NuevoAsesorForm;