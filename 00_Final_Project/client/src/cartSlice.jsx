import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
    wishlist: [],
  },
  reducers: {
    // ================= CART =================
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.qnty += 1;
      } else {
        state.cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
          qnty: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        item.qnty += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item && item.qnty > 1) {
        item.qnty -= 1;
      }
    },

    // 🗑️ REMOVE ITEM COMPLETELY
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // ================= WISHLIST =================
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
