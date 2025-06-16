import React, { useState, useEffect } from 'react';
import './Destinations.css';
import { useNavigate } from 'react-router-dom';
const Destinations = () => {
  const [places, setPlaces] = useState([]);
  const [travellers, setTravellers] = useState(2);
  const [budget, setBudget] = useState('0');
  const navigate = useNavigate();
  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/places');
      const data = await response.json();
      setPlaces(data);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  const parseBudget = (budgetVal) => {
    return [0, budgetVal > 0 ? budgetVal : Infinity];
  };

  const filteredPlaces = places.filter(place => {
    const [minBudget, maxBudget] = parseBudget(budget);
    const totalCost = place.price_per_person_rupees * travellers;
    return totalCost >= minBudget && totalCost <= maxBudget;
  });

  return (
    <div className="dhome">
      <div className="dhero-section">
        <div className="doverlay">
          <h1>Wander the World</h1><h1>One Destination at a Time</h1>
          <p>Book Your Trip Now</p>
        </div>
      </div>
<div className="search-bar">
<div className="coolinput search-field">
  <label htmlFor="tour-date" className="text">Select Tour Date</label>
  <input type="date" id="tour-date" className="input" />
</div>
  <div className="coolinput search-field">
    <label htmlFor="travellers" className="text">Travellers</label>
    <input
      id="travellers"
      type="number"
      min="1"
      value={travellers}
      onChange={(e) => setTravellers(Number(e.target.value))}
      placeholder="2"
      className="input"
    />
  </div>
  <div className="coolinput search-field">
    <label htmlFor="budget" className="text">Budget</label>
    <input
      id="budget"
      type="number"
      placeholder="0"
      value={budget}
      onChange={(e) => setBudget(Number(e.target.value))}
      className="input"
    />
  </div>
  <button className="search-btn" aria-label="Search">
    <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>
</div>
      <div className="places-grid">
        {filteredPlaces.map((place) => (
          <div key={place._id} className="card">
          <div className="card-image-container">
            <img
              src={place.image}
              alt={place.title}
              className="card-image"
            />
          </div>
          
          <div className="content">
            <div className="card-content">
              <h3 className="card-title">{place.title}</h3>
              <p className="card-price">₹{place.price_per_person_rupees*travellers} for {travellers} persons</p>
            </div>
            <div className="card-button-container">
            <button className="card-button" onClick={() => navigate(`/place/${place._id}`)}>Read More</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;