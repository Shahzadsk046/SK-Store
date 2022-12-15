import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      // }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.products.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );

      state.products = nextCartItems;
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },

    clearAllCart(state) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },

    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
        state.total -= action.payload.price;
        // state.total += acti
      }
    },
    increaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      state.products[itemIndex].quantity += 1;
      state.total += action.payload.price;
    },
  },
});

export const {
  addProduct,
  removeFromCart,
  clearAllCart,
  decreaseCart,
  increaseCart,
} = cartSlice.actions;
export default cartSlice.reducer;