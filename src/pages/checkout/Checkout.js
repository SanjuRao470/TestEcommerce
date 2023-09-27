import React from 'react';
import './Checkout.css'; // Import your CSS file

function Checkout() {
  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Order Summary</h2>
        {/* Display order items and prices here */}
      </div>
      <div className="payment-details">
        <h2>Payment Details</h2>
        {/* Add payment form fields (e.g., card number, expiration date, etc.) */}
      </div>
      <button className="checkout-button">Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
