import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Recommendations from './components/Recommendations';
import Home from "./components/Home";
import Cart from './components/Cart';
import Checkout from "./components/Checkout";
import Results from './components/Results'; 
import ReviewForm from './components/ReviewForm';

function App() {
  const styles = {
    sectionMargin: {
      marginTop: "5rem",
    },
  };
  return (
    <div>
      <Navbar/>

      <div style={styles.sectionMargin}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/results" element={<Results />} /> 
          <Route path="/review-form" element={<ReviewForm />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
