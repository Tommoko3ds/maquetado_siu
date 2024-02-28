// src/componentes/CardInfo.jsx
import React from 'react';

const CardInfo = ({ selectedCard }) => {
  return (
    <div className="p-4 ml-20 mb-10 mr-10 bg-gray-100 flex-1">
      {selectedCard ? (
        <div>
          <h2 className="text-xl font-bold mb-4">{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
          {/* Agrega más detalles según tus necesidades */}
        </div>
      ) : (
        <p>Selecciona una card en la barra lateral</p>
      )}
    </div>
  );
};

export default CardInfo;
