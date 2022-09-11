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
      // const itemIndex = state.products.findIndex(
      //   (product) => product._id === action.payload._id
      // );
      // if(itemIndex >= 0){
      //     state.products[itemIndex].cartQuantity += state.products[itemIndex].quantity;
      // }else{
      // const tempProduct = { ...action.payload, cartQuantity: 1 };
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
    },
    // decreaseCart(state, action) {
    //   const itemIndex = state.products.findIndex(
    //     (product) => product._id === action.payload._id
    //   );
    //   if (state.products[itemIndex].quantity > 1) {
    //     state.products[itemIndex].quantity -= 1;
    //   }
    // },
    // increaseCart(state, action) {
    //   const itemIndex = state.products.findIndex(
    //     (product) => product._id === action.payload._id
    //   );
    //   state.products[itemIndex].quantity += 1;
    // },
  },
});

export const { addProduct, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
