import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

try {
  initialState = JSON.parse(localStorage.getItem('products') || '[]')
} catch (e) {
  console.log('Local storage is empty')
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const basketProductIndex = state.findIndex(cartProduct => cartProduct.id === action.payload);
      if (basketProductIndex === -1) {
        state.push({ id: action.payload, count: 1 });
      } else {
        state[basketProductIndex].count++;
      }
    },
    removeProductFormCart(state, action) {
      const basketProductIndex = state.findIndex(cartProduct => cartProduct.id === action.payload);
      if (state[basketProductIndex].count === 1) {
        state.splice(basketProductIndex, 1);
      } else {
        state[basketProductIndex].count--;
      }
    }
  },
});

export const { addProductToCart, removeProductFormCart } = cartSlice.actions;

export default cartSlice.reducer
