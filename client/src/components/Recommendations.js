import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/recommendations.css";

const Recommendations = () => {
  const [height, setHeight] = useState('');
  const [bustSize, setBustSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [hipsSize, setHipsSize] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [noProductsMessage, setNoProductsMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height, bustSize, waistSize, hipsSize, skinTone }),
    });
    const data = await response.json();
    if (data.length === 0) {
      setNoProductsMessage('No available products');
    } else {
      setNoProductsMessage('');
      navigate('/results', { state: { products: data } });
    }
  };

  return (
    <div className="recommendations-container">
      <h1>Voilaaa!</h1>
      <div className="recommendation-header">
        <h2>"Find Your Perfect Fit with Custom Recommendations!"</h2>
        <button className="check-reviews-button">Check Reviews</button>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h3 className="centered">Enter your measurements here!</h3>
          <label>
            Height (in centimeters):
            <input type="number" value={height} onChange={(event) => setHeight(event.target.value)} required />
          </label>
          <label>
            Bust Size (in centimeters):
            <input type="number" value={bustSize} onChange={(event) => setBustSize(event.target.value)} required />
          </label>
          <label>
            Waist Size (in centimeters):
            <input type="number" value={waistSize} onChange={(event) => setWaistSize(event.target.value)} required />
          </label>
          <label>
            Hips Size (in centimeters):
            <input type="number" value={hipsSize} onChange={(event) => setHipsSize(event.target.value)} required />
          </label>
          <h3 className="centered">Choose your skinTone from below palette!</h3>
          <label>
            <div className="skin-tone-container">
              <input
                type="radio"
                value="PORCELAIN"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="porcelain"
              />
              <label htmlFor="porcelain" className="skin-tone-label" style={{ backgroundColor: '#F7D2C4' }}>PORCELAIN</label>

              <input
                type="radio"
                value="ALMOND"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="almond"
              />
              <label htmlFor="almond" className="skin-tone-label" style={{ backgroundColor: '#FFD7BE' }}>ALMOND</label>

              <input
                type="radio"
                value="BEIGE"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="beige"
              />
              <label htmlFor="beige" className="skin-tone-label" style={{ backgroundColor: '#F5DEB3' }}>BEIGE</label>

              <input
                type="radio"
                value="WARM BEIGE"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="warmBeige"
              />
              <label htmlFor="warmBeige" className="skin-tone-label" style={{ backgroundColor: '#FFD7BE' }}>WARM BEIGE</label>

              <input
                type="radio"
                value="HONEY"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="honey"
              />
              <label htmlFor="honey" className="skin-tone-label" style={{ backgroundColor: '#FFC394' }}>HONEY</label>

              <input
                type="radio"
                value="GOLDEN"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="golden"
              />
              <label htmlFor="golden" className="skin-tone-label" style={{ backgroundColor: '#F2C464' }}>GOLDEN</label>

              <input
                type="radio"
                value="CHESTNUT"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="chestnut"
              />
              <label htmlFor="chestnut" className="skin-tone-label" style={{ backgroundColor: '#964B00' }}>CHESTNUT</label>

              <input
                type="radio"
                value="ESPRESSO"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="espresso"
              />
              <label htmlFor="espresso" className="skin-tone-label" style={{ backgroundColor: '#663300' }}>ESPRESSO</label>
            </div>
          </label>
          <button type="submit">Get Recommendations</button>
        </form>
      </div>
      {noProductsMessage && <p>{noProductsMessage}</p>}
    </div>
  );
};

export default Recommendations;


