import React from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Profile from './Profile'; // Adjust the path based on your file structure


function Card({ title, imageUrl, description, location, price, year, building, gender }) {
  // let navigate = useNavigate();

  // const goToProfile = () => {
  //   navigate('/Profile'); // Navigate to the profile page
  // };
  //onClick={goToProfile}
  return (  
    <div className="col-md-6 col-xl-3 d-flex">
      <div className="card mb-4">
        {/* Image */}
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-unstyled">
            <li><strong>Location:</strong> {location}</li>
            <li><strong>Price:</strong> {price}</li>
            <li><strong>Year:</strong> {year}</li>
            <li><strong>Building:</strong> {building}</li>
            <li><strong>Gender:</strong> {gender}</li>
          </ul>
          <a className="btn btn-dark">Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Card;