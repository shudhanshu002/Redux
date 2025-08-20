import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg';
// import HeartIcon from '../assets/heart-icon.svg'; // Assuming you have a heart icon
import { useSelector } from 'react-redux';

export default function Header() {
  // 1. Select the necessary data from the Redux store
  const { cartItems, wishList } = useSelector((state) => state);

  // 2. Calculate the total quantity by summing the quantity of each item in the cart
  const totalCartQuantity = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0 // Start the sum at 0
  );

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="nav-links">
          <Link className="nav-icon" to="/wishlist">
            <img src={CartIcon} alt="wishlist-icon" />
            {wishList.length > 0 && (
              <div className="cart-items-count">{wishList.length}</div>
            )}
          </Link>
          <Link className="nav-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            {/* 3. Use the calculated total to conditionally render the badge */}
            {totalCartQuantity > 0 && (
              <div className="cart-items-count">
                {totalCartQuantity}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}