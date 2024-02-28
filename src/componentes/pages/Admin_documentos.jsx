import React, { useState } from 'react';
import { FiDownload, FiEdit, FiTrash } from 'react-icons/fi'; 

const AdminDocumentos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documento, setDocumento] = useState('');
  const [archivo, setArchivo] = useState('');
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDeleteConfirmationModalOpen(false);
  };

  const handleEdit = () => {
    // Aquí puedes implementar la lógica para editar el documento y el archivo
    console.log('Documento editado:', documento);
    console.log('Archivo editado:', archivo);
    // Luego de editar, cierra el modal
    closeModal();
  };

  const handleDeleteConfirmation = () => {
    setDeleteConfirmationModalOpen(true);
  };

  const handleDelete = () => {
    // Aquí puedes implementar la lógica para eliminar el documento
    console.log('Documento eliminado:', documento);
    // Luego de eliminar, cierra el modal de confirmación de eliminación
    setDeleteConfirmationModalOpen(false);
  };

  return (
    <div className='flex flex-col items-start justify-center min-h-screen bg-white-200 p-8'>
      <h1 className='text-3xl text-gray-500 mb-4'>Bienvenido (Docente)!</h1>
      <div className="mb-4">
        <button className='px-4 py-2 bg-blue-900 text-white rounded-lg'>Agregar Nuevo Documento</button>
      </div>
      <div className="overflow-x-auto w-full flex justify-center">
        <table className="bg-white rounded-lg shadow-lg text-sm md:text-base">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-10 py-4">Id</th>
              <th className="px-10 py-4">Documento</th>
              <th className="px-10 py-4">Archivo</th>
              <th className="px-10 py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-10 py-6">1</td>
              <td className="border px-10 py-6">Agenda de Estudiantes</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">2</td>
              <td className="border px-10 py-6">Formato de Control de Estadia</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">3</td>
              <td className="border px-10 py-6">Formato de Proceso de Evaluacion</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">4</td>
              <td className="border px-10 py-6">Cedula de Anteproyectos</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">5</td>
              <td className="border px-10 py-6">Carta de Aprobacion de Memoria</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">6</td>
              <td className="border px-10 py-6">Carta de Autorizacion de Digitalizacion de Memoria</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">7</td>
              <td className="border px-10 py-6">Amonestacion</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg' onClick={openModal}><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2' onClick={handleDeleteConfirmation}><FiTrash /></button>
              </td>
            </tr>
            {/* Filas adicionales */}
            {/* Aquí puedes agregar más filas según sea necesario */}
          </tbody>
        </table>
      </div>

      {/* Modal para editar */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-lg z-20">
            <h2 className="text-lg font-bold mb-4">Editar Documento</h2>
            <div className="mb-4">
              <label htmlFor="documento" className="block text-sm font-medium text-gray-700">Documento</label>
              <input type="text" id="documento" name="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">Archivo</label>
              <input type="file" id="archivo" name="archivo" value={archivo} onChange={(e) => setArchivo(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg" onClick={handleEdit}>Guardar</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg ml-4" onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {deleteConfirmationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-lg z-20">
            <h2 className="text-lg font-bold mb-4">Eliminar Documento</h2>
            <p className="text-sm text-gray-700 mb-4">¿Seguro que desea eliminar este documento?</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={handleDelete}>Eliminar</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg ml-4" onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDocumentos;
