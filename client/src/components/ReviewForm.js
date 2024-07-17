import React, { useState } from 'react';
import CustomAlert from './CustomAlert';
import '../style/reviewForm.css'; 

const ReviewForm = () => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="review-form-container">
      <h1>Submit Your Review</h1>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)} required>
            <option value="">Select Rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
        </label>
        <button type="submit">Submit Review</button>
      </form>
      {showAlert && <CustomAlert message="Thank you for your review!" onClose={handleCloseAlert} />}
    </div>
  );
};

export default ReviewForm;

