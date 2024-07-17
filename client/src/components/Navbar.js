import React, { useState } from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/myntra/myntra.png';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/home" onClick={toggleMenu}>Men</Link>
        <Link to="/home" onClick={toggleMenu}>Women</Link>
        <Link to="/contact" onClick={toggleMenu}>Beauty</Link>
        <Link to="/contact" onClick={toggleMenu}> Kids</Link>
        <Link to="/recommendations" onClick={toggleMenu} className="recommendations-link">PersonalFit</Link>
      </div>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input className='sb'
          type="text"
          placeholder="Search for products,brands"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="navbar-icons">
      <Link to="/profile"><FaHeart />Wishlist</Link>
        <Link to="/cart"><FaShoppingCart />Cart</Link>
        <Link to="/profile"><FaUser />Profile</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
