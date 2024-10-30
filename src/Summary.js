import React from 'react';
import './Summary.css'; 

const Summary = () => {
  return (
    <div>
      <h1>Summary</h1>
      <div className="container">
        <h2>abc</h2>
        <div className="summary-details">
          <p>Codes Count: 1</p>
          <p>Code Redemption Limit: 1</p>
          <p>Auto Update: Turned on</p>
          <p>Time Frame: Not defined</p>
          <p>Discount Type: Amount</p>
          <p>Discount Value: ₹100.00</p>
          <p>Discount Effect: Apply the discount to item subtotal</p>
          <p>Validation Rules: Business Validation Rule - 9/25/2024</p>
          <p>Metadata: 0 attributes</p>
          <p>Category: -</p>
        </div>
      </div>

      <div className="container">
        <h2>Discounted / Excluded products</h2>
        <div className="summary-details">
          <p>Included: Discount each order line item(s)</p>
          <p>Excluded: No products</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
