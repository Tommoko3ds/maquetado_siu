import React from 'react';
import { FiDownload, FiEdit, FiTrash } from 'react-icons/fi'; 

const AdminDocumentos = () => {
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
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">2</td>
              <td className="border px-10 py-6">Formato de Control de Estadia</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
               
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">3</td>
              <td className="border px-10 py-6">Formato de Proceso de Evaluacion</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
               
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">4</td>
              <td className="border px-10 py-6">Cedula de Anteproyectos</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
               
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">5</td>
              <td className="border px-10 py-6">Carta de Aprobacion de Memoria</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
               
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">6</td>
              <td className="border px-10 py-6">Carta de Autorizacion de Digitalizacion de Memoria</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
               
              </td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            <tr>
              <td className="border px-10 py-6">7</td>
              <td className="border px-10 py-6">Amonestacion</td>
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiDownload className="m-4 text-center items-center flex flex-row " /></button>
               
              </td>
              
              <td className="border px-10 py-6">
                <button className='p-2 bg-blue-500 text-white rounded-lg'><FiEdit /></button>
                <button className='p-2 bg-red-500 text-white rounded-lg ml-2'><FiTrash /></button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDocumentos;
