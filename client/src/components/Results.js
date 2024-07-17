import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../style/results.css";

const Results = () => {
  const location = useLocation();
  const { products } = location.state;
  const navigate = useNavigate();

  const handleReviewButtonClick = () => {
    navigate('/review-form');
  };

  return (
    <div className="results-container">
      <div className="header-container">
        <h1>Furnish In Style</h1>
        <button className="review-button" onClick={handleReviewButtonClick}>Give Review</button>
      </div>
      <div className="filter-container">
        <label>
          Filter by Occasion:
          <select>
            <option value="">Select Occasion</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="party">Party</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <label>
          Filter by Price Range:
          <select>
            <option value="">Select Price Range</option>
            <option value="0-199">$199 - $550</option>
            <option value="551-1000">$551 - $1000</option>
            <option value="1001-2000">$1001 - $2000</option>
            <option value="2001-5000">$2001 - $5000</option>
            <option value="5001">$5001+</option>
          </select>
        </label>
        <label>
          Sort By:
          <select>
            <option value="">Sort By</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="ratings">Ratings</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>
  
      {products.length > 0 ? (
        <section className="container-fluid product-grid">
          {products.map((product) => (
            <div className="ProductCard" key={product.productId}>
              <img
                src={product.productImage}
                className="card-img-top"
                alt={product.productName}
              />
              <div className="card-body">
                <h5 className="card-title fs-6">{product.productName}</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="fs-6 fw-bold">Rs. {product.productPrice}</span>
                  <span
                    className="text-danger fw-bold"
                    style={{ fontSize: "11px", marginLeft: "5px" }}
                  >
                    ({product.productColor})
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-add-to-bag">Add to Bag</button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p>No available products</p>
      )}
    </div>
  );
};

export default Results;
