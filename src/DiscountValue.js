import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiscountValue.css'; 

const DiscountValue = () => {
  const navigate = useNavigate();
  const [visibleSection, setVisibleSection] = useState(null);

  // State variables
  const [orderDiscount, setOrderDiscount] = useState(''); 
  const [productsDiscount, setProductsDiscount] = useState('');
  const [rewards, setRewards] = useState('');
  const [freeShipping, setFreeShipping] = useState(false);
  const [discountAmount, setDiscountAmount] = useState('');
  const [fixedAmount, setFixedAmount] = useState(''); 
  const [discountType, setDiscountType] = useState('amount'); 
  const [maxAmountOrderLines, setMaxAmountOrderLines] = useState('');
  const [applyToAllOrderLines, setApplyToAllOrderLines] = useState(false);
  const [maxDiscountPerOrder, setMaxDiscountPerOrder] = useState('');
  const [excludedProducts, setExcludedProducts] = useState(['']);
  const [discountedProducts, setDiscountedProducts] = useState(''); 
  const [discountedOption, setDiscountedOption] = useState('each'); 
  const [maxDiscountAmount, setMaxDiscountAmount] = useState(''); 


  const [freeProduct, setFreeProduct] = useState(''); // State for free product
  const [unitsQuantity, setUnitsQuantity] = useState(''); // State for units quantity

  const handleSubmit = () => {
    // Check for required fields
    // if (!orderDiscount) {
    //   alert('Order Discount is required.');
    //   return;
    // }

    // if (!discountAmount) {
    //   alert('Discount Amount is required.');
    //   return;
    // }

    // Log submitted data
    console.log('Submitted Data:', {
      orderDiscount,
      productsDiscount,
      rewards,
      freeShipping,
      discountAmount,
      fixedAmount,
      discountType,
      maxAmountOrderLines,
      applyToAllOrderLines,
      maxDiscountPerOrder,
      excludedProducts,
      discountedProducts,
      maxDiscountAmount, // Log the max discount amount
      freeProduct, // Log the free product
      unitsQuantity, // Log the units quantity
    });

    // Navigate to summary page
    navigate('/summary');
  };

  const handleExcludedProductChange = (index, value) => {
    const updatedExcludedProducts = [...excludedProducts];
    updatedExcludedProducts[index] = value;
    setExcludedProducts(updatedExcludedProducts);
  };

  const [effect, setEffect] = useState('addMissing'); // Default to 'addMissing'

  const addExcludedProductField = () => {
    setExcludedProducts([...excludedProducts, '']);
  };

  return (
    <div className="discount-value-container">
      <h1>3. Discount Value</h1>
      <div className="container">
        <div className="horizontal-container">
          <div className="box" onClick={() => setVisibleSection(visibleSection === 'order' ? null : 'order')}>
            <h3>Order Discount</h3>
          </div>

          <div className="box" onClick={() => setVisibleSection(visibleSection === 'products' ? null : 'products')}>
            <h3>Products Discount</h3>
          </div>

          <div className="box" onClick={() => setVisibleSection(visibleSection === 'rewards' ? null : 'rewards')}>
            <h3>Rewards</h3>
          </div>

          <div className="box" onClick={() => setVisibleSection(visibleSection === 'shipping' ? null : 'shipping')}>
            <h3>Free Shipping</h3>
          </div>
        </div>

        <div className="content-container">
          {visibleSection === 'order' && (
            <div className="content-box">
              <h4>Discount Type</h4>
              <select
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                placeholder="Select"
              >
                <option value="amount">Amount discount: Apply to whole cart</option>
                <option value="percent">Percent discount: Apply to whole cart</option>
                <option value="newPrice">New price: Apply to whole cart</option>
              </select>

              
              
              {discountType === 'amount' && (
                <>
                  <h4>Discount Amount (INR)</h4>
                  <input
                    type="number"
                    value={discountAmount}
                    onChange={(e) => setDiscountAmount(e.target.value)}
                    placeholder="Enter Discount Amount (INR)"
                    required
                  />
                </>
              )}

              {discountType === 'percent' && (
                <>
                  <h4>Percent of Discount (%)</h4>
                  <input
                    type="number"
                    value={discountAmount}
                    onChange={(e) => setDiscountAmount(e.target.value)}
                    placeholder="Enter Percent of Discount"
                    required
                  />
                  <h4>Maximum Discount Amount (INR)</h4>
                  <input
                    type="number"
                    value={maxDiscountAmount}
                    onChange={(e) => setMaxDiscountAmount(e.target.value)}
                    placeholder="Enter Maximum Discount Amount (INR)"
                  />
                </>
              )}

              {discountType === 'newPrice' && (
                <>
                  <h4>Fixed Amount (INR)</h4>
                  <input
                    type="number"
                    value={fixedAmount}
                    onChange={(e) => setFixedAmount(e.target.value)}
                    placeholder="Enter Fixed Amount (INR)"
                  />
                </>
              )}
            </div>
          )}

          {visibleSection === 'products' && (
            <div className="content-box">
              <h4>Discount Type</h4>
              <select
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                placeholder="Select"
              >
                <option value="amount">Amount discount: Apply to item subtotal</option>
                <option value="percent">Amount discount: Apply the full discount to each item unit</option>
                <option value="newPrice">Amount discount: Split the discount proportionally to amount</option>
                <option value="name">Amount discount: Split the discount proportionally to quantity</option>
                <option value="nav">Percent discount: Apply the discount to item subtotal</option>
              </select>

              <h4>Discount Amount (INR)</h4>
              <input
                type="number"
                value={productsDiscount}
                onChange={(e) => setProductsDiscount(e.target.value)}
                placeholder="Enter Discount Amount (INR)"
              />

              <h4>Maximum Amount Combined for All Order Lines (INR)</h4>
              <input
                type="number"
                value={maxAmountOrderLines}
                onChange={(e) => setMaxAmountOrderLines(e.target.value)}
                placeholder="Enter Max Amount for All Order Lines (INR)"
              />

              <h4>Discounted Products</h4>
              <div className="discounted-products-options">
                <label>
                  <input
                    type="radio"
                    value="each"
                    checked={discountedOption === 'each'}
                    onChange={() => setDiscountedOption('each')}
                  />
                  Each
                </label>
                <label>
                  <input
                    type="radio"
                    value="selected"
                    checked={discountedOption === 'selected'}
                    onChange={() => setDiscountedOption('selected')}
                  />
                  Selected
                </label>
              </div>

              {discountedOption === 'selected' && (
                <div className="selected-form">
                  <h4>Selected Products</h4>
                  <input
                    type="text"
                    value={discountedProducts}
                    onChange={(e) => setDiscountedProducts(e.target.value)}
                    placeholder="Enter selected products"
                  />
                </div>
              )}

              <label>
                <input
                  type="checkbox"
                  checked={applyToAllOrderLines}
                  onChange={() => setApplyToAllOrderLines(!applyToAllOrderLines)}
                />
                Apply the discount to All Order Lines
              </label>

              <h4>Maximum Discount Amount per Order (INR)</h4>
              <input
                type="number"
                value={maxDiscountPerOrder}
                onChange={(e) => setMaxDiscountPerOrder(e.target.value)}
                placeholder="Enter Max Discount per Order (INR)"
              />

              <h4>Excluded Products</h4>
              {excludedProducts.map((excludedProduct, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={excludedProduct}
                    onChange={(e) => handleExcludedProductChange(index, e.target.value)}
                    placeholder="Excluded Product"
                  />
                </div>
              ))}
              <button type="button" onClick={addExcludedProductField}>+ Add Another</button>
            </div>
          )}

          {visibleSection === 'rewards' && (
            <div className="content-box">
              <h4>Discount Type</h4>
              <select
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                placeholder="Select"
              >
                <option value="amount">Free products: Add missing order items to match total discount units count</option>
                <option value="percent">Free products: Always add new units items</option>
                <option value="many">Free products: Add many order items</option> {/* New option added */}
                <option value="4">Upgrade Bonus: Replace order items</option>
              </select>

              <h4>Discount Amount (INR)</h4>
              <input
                type="number"
                value={rewards}
                onChange={(e) => setRewards(e.target.value)}
                placeholder="Enter Reward Amount (INR)"
              />

              {/* Additional fields for different discount types */}
              {discountType === 'amount' && (
                <>
                  <h4>Free Product *</h4>
                  <input
                    type="text"
                    value={freeProduct}
                    onChange={(e) => setFreeProduct(e.target.value)}
                    placeholder="Type here to find"
                    required
                  />
                  <span className="required-message">Field is required.</span>
                  <h4>Units Quantity</h4>
                  <input
                    type="number"
                    value={unitsQuantity}
                    onChange={(e) => setUnitsQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    required
                  />
                </>
              )}

              {discountType === 'percent' && (
                <>
                  <h4>Free Product *</h4>
                  <input
                    type="text"
                    value={freeProduct}
                    onChange={(e) => setFreeProduct(e.target.value)}
                    placeholder="Type here to find"
                    required
                  />
                  <span className="required-message">Field is required.</span>
                  <h4>Units Quantity</h4>
                  <input
                    type="number"
                    value={unitsQuantity}
                    onChange={(e) => setUnitsQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    required
                  />
                </>
              )}

              {/* New content for 'many' discount type */}
              {discountType === 'many' && (
                <>
                  <h4>Free Product *</h4>
                  <input
                    type="text"
                    value={freeProduct}
                    onChange={(e) => setFreeProduct(e.target.value)}
                    placeholder="Type here to find"
                    required
                  />
                  <span className="required-message">Field is required.</span>
                  <h4>Units Quantity</h4>
                  <input
                    type="number"
                    value={unitsQuantity}
                    onChange={(e) => setUnitsQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    required
                  />
                   <h4>Effect</h4>
    <select value={effect} onChange={(e) => setEffect(e.target.value)}>
      <option value="addMissing">Add missing order items to match total discount units count</option>
      <option value="alwaysAdd">Always add new units items</option>
    </select>
                </>
              )}
            </div>
          )}

{visibleSection === 'shipping' && (
            <div className="content-box">
              <h4>Discount Type</h4>
              <select
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                placeholder="Select"
              >
                <option value="amount">
                  Free products: Add missing order items to match total discount units count
                </option>
              </select>

              <h4>Free Product *</h4>
              <input
                type="text"
                value={freeProduct}
                onChange={(e) => setFreeProduct(e.target.value)}
                placeholder="Type here to find"
              />
              <span className="required-message">Field is required.</span>

              <h4>Shipping</h4>
              <input
                type="text"
                value="Free Shipping"
                readOnly
              />

              <h4>Units Quantity</h4>
              <input
                type="number"
                value={unitsQuantity}
                onChange={(e) => setUnitsQuantity(e.target.value)}
                placeholder="Enter quantity"
              />
            </div>
          )}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
   

export default DiscountValue;
