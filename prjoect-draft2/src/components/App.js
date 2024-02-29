import React, { useState, useEffect } from 'react';
import Card from './Card';

function App(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (props.cardData) {
      setCards(props.cardData);
    }
  }, [props.cardData]);


  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            location={card.location}
            price={card.price}
            year={card.year}
            building={card.building}
            gender={card.gender}
          />
        ))}
      </div>
    </div>
  );
}

export default App;