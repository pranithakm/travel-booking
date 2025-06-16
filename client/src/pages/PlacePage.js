import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PlacePage.css';

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [people, setPeople] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [finalPrice, setFinalPrice] = useState(0);
  const [budgetPlan, setBudgetPlan] = useState('Budget');

  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const getMultiplier = (plan) => {
    switch (plan) {
      case 'Medium': return 5 / 3;
      case 'Luxury': return 2;
      default: return 1; // Budget
    }
  };

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/places/${id}`);
        setPlace(response.data);
      } catch (error) {
        console.error('Error fetching place:', error);
      }
    };

    fetchPlace();
  }, [id]);

  useEffect(() => {
    if (place) {
      const multiplier = getMultiplier(budgetPlan);
      const basePrice = Math.round((place.price_per_person_rupees * multiplier) / 1000) * 1000;
      setFinalPrice(Math.round(basePrice * people));

      if (startDate) {
        const start = new Date(startDate);
        const end = new Date(start);
        end.setDate(start.getDate() + place.days - 1);
        setEndDate(end.toISOString().split('T')[0]);
      }
    }
  }, [place, people, budgetPlan, startDate]);

  const handleBooking = async (e) => {
    e.preventDefault();
  
    // Check if user is logged in (using localStorage)
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Please login to book your experience.');
      return;
    }
  
    const bookingData = {
      name,
      email,
      phone,
      userId: user._id, // optional, if user ID is needed
      placeId: id,
      placeTitle: place.title,
      budgetPlan,
      people,
      startDate,
      endDate,
      totalPrice: finalPrice,
    };
  
    try {
      const response = await axios.post('http://localhost:4000/api/bookings', bookingData);
      alert('Booking successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
  };
  if (!place) return <div>Loading...</div>;

  return (
    <div className="topcont">
      <div className="place-container">
        <img src={place.image} alt={place.title} />
        <h1>{place.title}</h1>
      </div>

      <div className="place-info">
        <div className="left-info">
          <h2>Description</h2>
          <p>{place.description}</p>

          <h2>Language Used</h2>
          <p>{place.language_used}</p>

          <h2>Duration</h2>
          <p>{place.days} days / {place.days - 1} nights</p>

          <h2>Places Covered</h2>
          <ul>
            {place.places_covered.map((placeName, index) => (
              <li key={index}>{placeName}</li>
            ))}
          </ul>

          <h2>Plan Per Day</h2>
          <ul>
            {place.plan_per_day.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>

          <h2>Price</h2>
          <p>₹{place.price_per_person_rupees}/- per person</p>
        </div>

        <div className="right-booking">
          <div className="booking-container">
            <form className="booking-form" onSubmit={handleBooking}>
              <div className="booking-title">Book Your Experience: <b>{place.title}</b></div>

              <div className="input-group">
                <input type="text" id="name" className="input-field" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="name" className="input-label">Full Name</label>
              </div>

              <div className="input-group">
                <input type="email" id="email" className="input-field" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="email" className="input-label">Email Address</label>
              </div>

              <div className="input-group">
                <input type="tel" id="phone" className="input-field" placeholder=" " value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <label htmlFor="phone" className="input-label">Phone Number</label>
              </div>

              <div className="input-group">
                <input
                  type="date"
                  id="date"
                  className="input-field"
                  placeholder=" "
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <label htmlFor="date" className="input-label">Start Date</label>
              </div>

              <div className="input-group">
                <input
                  type="number"
                  min="1"
                  value={people}
                  onChange={(e) => setPeople(parseInt(e.target.value))}
                  className="input-field"
                  placeholder=" "
                  required
                />
                <label htmlFor="people" className="input-label">Number of People</label>
              </div>

              <div className="input-group">
                <select
                  className="input-field"
                  value={budgetPlan}
                  onChange={(e) => setBudgetPlan(e.target.value)}
                  required
                >
                  <option value="Budget">Budget</option>
                  <option value="Medium">Medium</option>
                  <option value="Luxury">Luxury</option>
                </select>
                <label className="input-label">Select Budget Plan</label>
              </div>

              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Place:</strong></td>
                      <td>{place.title}</td>
                    </tr>
                    <tr>
                      <td><strong>Budget Plan:</strong></td>
                      <td>{budgetPlan}</td>
                    </tr>
                    <tr>
                      <td><strong>Start Date:</strong></td>
                      <td>{startDate || 'Not selected'}</td>
                    </tr>
                    <tr>
                      <td><strong>End Date:</strong></td>
                      <td>{endDate || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td><strong>Number of People:</strong></td>
                      <td>{people}</td>
                    </tr>
                    <tr>
                      <td><strong>Total Price:</strong></td>
                      <td>₹{finalPrice}/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-btn">Book Now</button>
              </div>

              <div className="error-message" id="error-message"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;