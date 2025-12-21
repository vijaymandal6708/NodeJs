import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cart.push(actions.payload);
    },
    increaseQuantity:(state, actions)=>{
        for (var i=0; i<state.cart.length; i++){
            if(state.cart[i].id==actions.payload.id){
                state.cart[i].qnty++;
            }
        }
    },
    decreaseQuantity:(state, actions)=>{
        for (var i=0; i<state.cart.length; i++){
            if(state.cart[i].id==actions.payload.id){
                state.cart[i].qnty--;
            }
        }
    }
  }
});

export const { addToCart,increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
