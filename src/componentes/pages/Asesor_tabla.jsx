// AsesoresTable.jsx
import React from 'react';

const AsesoresTable = ({ asesores, onEditar, onEliminar }) => {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <table className="w-full bg-white border border-gray-300 rounded-md shadow-md overflow-hidden">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="py-2 px-4 border-b">Cédula</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Alumnos Asesorados</th>
            <th className="py-2 px-4 border-b">Estatus</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {asesores.map((asesor) => (
            <tr key={asesor.id}>
              <td className="py-2 px-4 border-b">{asesor.cedula}</td>
              <td className="py-2 px-4 border-b">{asesor.nombre}</td>
              <td className="py-2 px-4 border-b">{asesor.alumnosAsesorados}</td>
              <td className="py-2 px-4 border-b">{asesor.estatus}</td>              
              <td className="py-2 px-4 border-b">
                <button
                  className="mr-2 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={() => onEditar(asesor.id)}
                >
                  Editar
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                  onClick={() => onEliminar(asesor.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AsesoresTable;