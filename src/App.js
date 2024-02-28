// src/App.js
import React, { useState } from 'react';
import NavBar from './componentes/NavBar';
import Sidebar from './componentes/Sidebar';
import CardInfo from './componentes/CardInfo';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, title: 'Card 1', description: 'Descripción de la Card 1' },
    { id: 2, title: 'Card 2', description: 'Descripción de la Card 2' },
    { id: 3, title: 'Card 3', description: 'Descripción de la Card 3' },
    { id: 4, title: 'Card 4', description: 'Descripción de la Card 4' },
    { id: 5, title: 'Card 5', description: 'Descripción de la Card 5' },
    // Agrega más cards según tus necesidades
  ];

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <NavBar />
      <div className="flex mt-20">
        <Sidebar cards={cards} onSelectCard={handleSelectCard} />
        <CardInfo selectedCard={selectedCard} />
      </div>
    </div>
  );
};

export default App;
