import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ ...item, quantity: 1 })
      }
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },

    increaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload)

      if (!item) {
        return
      }

      if (item.quantity <= 1) {
        return state.filter((cartItem) => cartItem.id !== action.payload)
      }

      item.quantity -= 1
    },

    clearCart: () => {
      return []
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer
