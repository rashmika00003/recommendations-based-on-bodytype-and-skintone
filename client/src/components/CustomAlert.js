import React from 'react';
import '../style/customAlert.css';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert">
        <span className="custom-alert-icon">✔️</span>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;
