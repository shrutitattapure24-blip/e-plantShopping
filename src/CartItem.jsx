import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, removeItem, removeFromCart, updateQuantity } from './CartSlice'

const CartItem = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const [checkoutNotice, setCheckoutNotice] = useState('')

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * (item.cost ?? item.price ?? 0),
    0,
  )

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id))
      return
    }
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
  }

  return (
    <main className="cart-page cart-container">
      <div className="page-header cart-header">
        <div>
          <span className="eyebrow">Your Basket</span>
          <h1>Shopping Cart</h1>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/plants" className="primary-button get-started-button1">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => {
              const unitPrice = item.cost ?? item.price ?? 0
              return (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-image" />

                  <div className="cart-item-details">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="unit-price">₹{unitPrice} each</p>
                    </div>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item)}
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleIncrement(item)}
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="item-total">₹{item.quantity * unitPrice}</div>
                </div>
              )
            })}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total plants</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total cost</span>
              <strong>₹{totalAmount}</strong>
            </div>

            <button
              type="button"
              className="checkout-button get-started-button1"
              onClick={() => setCheckoutNotice('Coming Soon')}
            >
              Checkout
            </button>
            {checkoutNotice && <p className="checkout-message">{checkoutNotice}</p>}

            <Link to="/plants" className="secondary-button get-started-button1">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  )
}

export default CartItem
