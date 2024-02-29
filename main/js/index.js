import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component


document.addEventListener("DOMContentLoaded", function() {
  // Listen for changes on checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(item => {
    item.addEventListener('change', filterCards);
  });
});

function filterCards() {
  // Get all selected values for each filter
  const locations = getCheckedValues('location');
  const prices = getCheckedValues('price');
  const years = getCheckedValues('year');
  const buildings = getCheckedValues('building');
  const genders = getCheckedValues('gender');

  // Apply filters to cards
  document.querySelectorAll('.card').forEach(card => {
    const locationMatch = locations.includes(card.getAttribute('data-location')) || locations.length === 0;
    const priceMatch = prices.includes(card.getAttribute('data-price')) || prices.length === 0;
    const yearMatch = years.includes(card.getAttribute('data-year')) || years.length === 0;
    const buildingMatch = buildings.includes(card.getAttribute('data-building')) || buildings.length === 0;
    const genderMatch = genders.includes(card.getAttribute('data-gender')) || genders.length === 0;

    if (locationMatch && priceMatch && yearMatch && buildingMatch && genderMatch) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Helper function to get checked values for a given name
function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);
}