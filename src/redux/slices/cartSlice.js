import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  status: 'idle',
  error: null,
};

// Helper function to create a unique key for each variant
const createVariantKey = (product) => {
  return `${product.id}-${product.selectedSize}-${product.selectedColor}`;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const variantKey = createVariantKey(action.payload);
      const existingItem = state.items.find(item => createVariantKey(item) === variantKey);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1
        });
      }
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action) => {
      const variantKey = createVariantKey(action.payload);
      state.items = state.items.filter(item => createVariantKey(item) !== variantKey);
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    updateQuantity: (state, action) => {
      const variantKey = createVariantKey(action.payload);
      const item = state.items.find(item => createVariantKey(item) === variantKey);
      if (item) {
        item.quantity = action.payload.quantity;
        state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
