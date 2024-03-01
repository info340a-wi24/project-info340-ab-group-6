import React, { useState, useEffect } from 'react';
import Card from './Card';
// import { Routes, Route } from 'react-router-dom';
// import Profile from './Profile';


function App({ cardData }) {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setCards(cardData);
  }, [cardData]);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        if (updatedFilters[name]) {
          updatedFilters[name].push(value);
        } else {
          updatedFilters[name] = [value];
        }
      } else {
        updatedFilters[name] = updatedFilters[name].filter(item => item !== value);
        if (updatedFilters[name].length === 0) {
          delete updatedFilters[name];
        }
      }
      return updatedFilters;
    });
  };

  const filteredCards = cards.filter(card => {
    return Object.keys(filters).every(filterName =>
      filters[filterName].includes(card[filterName])
    );
  });

  return (
    <div className="container">
      <header className="w3-top header-background">
        <nav>
          <div className="w3-left w3-padding-16 header-text">Dub Match</div>

          {/* Location Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Location</button>
            <div className="dropdown-content">
              <label><input type="checkbox" name="location" value="North Campus" onChange={handleFilterChange} /> North Campus</label>
              <label><input type="checkbox" name="location" value="West Campus" onChange={handleFilterChange} /> West Campus</label>
              <label><input type="checkbox" name="location" value="UVillage" onChange={handleFilterChange} /> UVillage</label>
            </div>
          </div>

          {/* Price Range Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Price Range</button>
            <div className="dropdown-content">
              <label><input type="checkbox" name="price" value="800 - 1000" onChange={handleFilterChange} /> 800 - 1000</label>
              <label><input type="checkbox" name="price" value="1000 - 1200" onChange={handleFilterChange} /> 1000 - 1200</label>
              <label><input type="checkbox" name="price" value="1200 - 1400" onChange={handleFilterChange} /> 1200 - 1400</label>
              <label><input type="checkbox" name="price" value="1400 - 1600" onChange={handleFilterChange} /> 1400 - 1600</label>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">School Year</button>
            <div className="dropdown-content">
              <label><input type="checkbox" name="year" value="Freshman" onChange={handleFilterChange} /> Freshman</label>
              <label><input type="checkbox" name="year" value="Sophmore" onChange={handleFilterChange} /> Sophmore</label>
              <label><input type="checkbox" name="year" value="Junior" onChange={handleFilterChange} /> Junior</label>
              <label><input type="checkbox" name="year" value="Senior" onChange={handleFilterChange} /> Senior</label>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Building Type</button>
            <div className="dropdown-content">
              <label><input type="checkbox" name="building" value="Dorm" onChange={handleFilterChange} /> Dorm</label>
              <label><input type="checkbox" name="building" value="Apartment" onChange={handleFilterChange} /> Apartment</label>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Gender</button>
            <div className="dropdown-content">
              <label><input type="checkbox" name="gender" value="Male" onChange={handleFilterChange} /> Male</label>
              <label><input type="checkbox" name="gender" value="Female" onChange={handleFilterChange} /> Female</label>
              <label><input type="checkbox" name="gender" value="They/Them" onChange={handleFilterChange} /> They/Them</label>
              <label><input type="checkbox" name="gender" value="Other" onChange={handleFilterChange} /> Other</label>
            </div>
          </div>
        </nav>
      </header>

      {/* Cards Section */}
      <div className="row" style={{ marginTop: '60px' }}> {/* Adjust margin to ensure content is visible below header */}
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