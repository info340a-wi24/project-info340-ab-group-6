import React, { useState, useEffect } from 'react';
import Card from './Card';

function App({ cardData }) {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setCards(cardData);
  }, [cardData]);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev };
      if (checked) {
        if (!newFilters[name]) {
          newFilters[name] = [value];
        } else {
          newFilters[name].push(value);
        }
      } else {
        newFilters[name] = newFilters[name].filter(item => item !== value);
        if (newFilters[name].length === 0) {
          delete newFilters[name];
        }
      }
      return newFilters;
    });
  };

  const filteredCards = cards.filter(card => {
    return Object.keys(filters).every(filterName =>
      filters[filterName].includes(card[filterName])
    );
  });

  return (
    <div className="container">
      {/* Assuming you have checkboxes like this */}
      <div>
        {/* Example checkbox for "gender" filter */}
        <label><input type="checkbox" name="gender" value="Male" onChange={handleFilterChange} /> Male</label>
        <label><input type="checkbox" name="gender" value="Female" onChange={handleFilterChange} /> Female</label>
        <label><input type="checkbox" name="gender" value="They/Them" onChange={handleFilterChange} /> They/Them</label>
        <label><input type="checkbox" name="gender" value="Other" onChange={handleFilterChange} /> Other</label>
        {/* Add other checkboxes for different filters */}
      </div>
      <div className="row">
        {filteredCards.map((card, index) => (
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