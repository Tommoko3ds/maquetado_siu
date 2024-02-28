
import React, { useState } from 'react';
import NavBar from './componentes/NavBar';
import Sidebar from './componentes/Sidebar';
import CardInfo from './componentes/CardInfo';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, title: 'Asesor 1', description: 'Descripción del asesor 1' },
    { id: 2, title: 'Asesor 2', description: 'Descripción del asesor 1' },
    { id: 3, title: 'Asesor 3', description: 'Descripción del asesor 1' },
    { id: 4, title: 'Asesor 4', description: 'Descripción del asesor 1' },
    { id: 5, title: 'Asesor 5', description: 'Descripción del asesor 1' },
    // Agrega más cards según tus necesidades
  ];

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="flex flex-col">
      {/* NavBar */}
      <NavBar />

      {/* Descripción en la página principal */}
      <p className="bg-gray-200 p-4 mb-10 mt-2 text-center text-xl font-bold">
        Visualización y Asignación
      </p>

      {/* Contenedor principal con Sidebar y CardInfo */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar cards={cards} onSelectCard={handleSelectCard} />

        {/* CardInfo */}
        <CardInfo selectedCard={selectedCard} />
      </div>
    </div>
  );
};

export default App;


