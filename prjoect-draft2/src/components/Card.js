import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, imageUrl, description, location, price, year, building, gender }) {
  let navigate = useNavigate();

  
  return (
    <div className="col-md-6 col-xl-3 d-flex">
      <div className="card mb-4">
        {/* Image */}
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <ul className="list-unstyled">
            <li><strong>Location:</strong> {location}</li>
            <li><strong>Price:</strong> {price}</li>
            <li><strong>Year:</strong> {year}</li>
            <li><strong>Building:</strong> {building}</li>
            <li><strong>Gender:</strong> {gender}</li>
          </ul>

          <button onClick={() => navigate(`/profile/${id}`)}>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
