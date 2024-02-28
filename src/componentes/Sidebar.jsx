// src/componentes/Sidebar.jsx
import React from 'react';

const Sidebar = ({ cards, onSelectCard }) => {
  return (
    <div className="bg-gray-200 p-4 w-1/4 mb-10 ml-10 border border-black"> {/* Agrega las clases 'mb-4' y 'ml-4' */}
      <h2 className="text-xl font-bold mb-4">Asesores</h2>

      <div className="space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-4 rounded-md cursor-pointer hover:bg-green-100"
            onClick={() => onSelectCard(card)}
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
