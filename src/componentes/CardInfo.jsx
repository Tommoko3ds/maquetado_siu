// src/componentes/CardInfo.jsx
import React from 'react';

const CardInfo = ({ selectedCard }) => {
  return (
    <div className="flex-1 p-4">
      {selectedCard ? (
        <div className="bg-white p-4 border border-black">
          <h2 className="text-xl font-bold mb-2">{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
        </div>
      ) : (
        <p className="italic text-gray-500">Selecciona el asesor para revisar detalles</p>
      )}
    </div>
  );
};

export default CardInfo;


