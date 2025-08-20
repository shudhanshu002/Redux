import React from 'react'
import CartItem from '../components/CartItem.js'
import { useSelector } from 'react-redux'

export default function Cart() {
  // Select both cart items and the full product list from the store
  const cartItems = useSelector((state) => state.cartItems)
  const products = useSelector((state) => state.products)

  // Create a combined list of cart items with full product details
  const cartItemsWithDetails = cartItems.map((cartItem) => {
    const productDetails = products.find(
      (product) => product.id === cartItem.productId
    )
    return {
      ...cartItem,
      ...productDetails, // Merge product details into the cart item
    }
  })

  const cartTotal = cartItemsWithDetails.reduce(
    (acc, currentItem) => acc + currentItem.quantity * currentItem.price,
    0
  )

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItemsWithDetails.map((item) => (
          <CartItem
            key={item.productId}
            productId={item.productId}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.image}
            rating={item.rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${cartTotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}