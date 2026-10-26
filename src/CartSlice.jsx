import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const normalizedItem = {
        ...item,
        id: item.id,
        name: item.name,
        cost: item.cost ?? item.price ?? 0,
      }

      const existingItem = state.find(
        (cartItem) => cartItem.id === normalizedItem.id || cartItem.name === normalizedItem.name,
      )

      if (existingItem) {
        existingItem.quantity += 1
        existingItem.cost = existingItem.cost ?? normalizedItem.cost
      } else {
        state.push({ ...normalizedItem, quantity: 1 })
      }
    },

    removeItem: (state, action) => {
      const target = action.payload
      return state.filter(
        (item) => item.id !== target && item.name !== target,
      )
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.find((cartItem) => cartItem.id === id || cartItem.name === id)

      if (!item) {
        return
      }

      const nextQuantity = Number(quantity) || 0

      if (nextQuantity <= 0) {
        return state.filter((cartItem) => cartItem.id !== id && cartItem.name !== id)
      }

      item.quantity = nextQuantity
    },

    addToCart: (state, action) => {
      const item = action.payload
      const normalizedItem = {
        ...item,
        cost: item.cost ?? item.price ?? 0,
      }

      const existingItem = state.find(
        (cartItem) => cartItem.id === normalizedItem.id || cartItem.name === normalizedItem.name,
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ ...normalizedItem, quantity: 1 })
      }
    },

    removeFromCart: (state, action) => {
      const target = action.payload
      return state.filter((item) => item.id !== target && item.name !== target)
    },

    increaseQuantity: (state, action) => {
      const target = action.payload
      const item = state.find((cartItem) => cartItem.id === target || cartItem.name === target)
      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const target = action.payload
      const item = state.find((cartItem) => cartItem.id === target || cartItem.name === target)

      if (!item) {
        return
      }

      if (item.quantity <= 1) {
        return state.filter((cartItem) => cartItem.id !== target && cartItem.name !== target)
      }

      item.quantity -= 1
    },

    clearCart: () => {
      return []
    },
  },
})

export const {
  addItem,
  addToCart,
  removeItem,
  removeFromCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer
