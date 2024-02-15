import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart';
 // Import your checkout CSS file
import './cart.css'
const SHIPPING_CHARGES = 25;

const Checkout = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = cartTotal();
    const total = round(subtotal + SHIPPING_CHARGES, 2);
    return total;
  };

  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length >= 1 ? (
        <div className="checkout-items">
          {cart.map((item) => (
            <div className="checkout-item" key={item.product.id}>
              <div className="item-image">
                <img src={item.product.image} alt="" />
              </div>
              <div className="item-details">
                <div className="title">
                  <Link to={'/product/' + item.product.id} className="title-link">
                    {item.product.title}
                  </Link>
                </div>
                <span className="price">${round(item.product.price * item.quantity, 2)}</span>
                <div className="quantity-control">
                  <button onClick={() => increaseQuantity(item.product.id)}>+</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.product.id)} disabled={item.quantity === 1}>
                    -
                  </button>
                  <div className="remove" onClick={() => removeFromCart(item.product.id)}>
                    Remove
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="error">
          <p>&#9432; Cart is empty</p>
        </div>
      )}

      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Subtotal:</span>
          <span className="price">${round(cartTotal(), 2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping Fee:</span>
          <span className="price">${SHIPPING_CHARGES}</span>
        </div>
        <div className="summary-item">
          <span>Total:</span>
          <span className="price">${calculateTotal()}</span>
        </div>
      </div>

      <button className="confirm-btn">Confirm Order</button>
    </div>
  );
};

export default Checkout;
