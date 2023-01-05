import { createSlice } from "@reduxjs/toolkit"
import { CartState } from "../types";

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingCartItemIndex = state.products.findIndex(product => product.id === action.payload.id)

      const existingCartItem = state.products[existingCartItemIndex]

      let updatedItems;
      if (existingCartItem) {
        updatedItems = [...state.products]
        updatedItems[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: Number(existingCartItem.quantity) + Number(action.payload.quantity)
        }

      } else {
        updatedItems = state.products.concat(action.payload)
      }

      state.products = updatedItems
      state.total += action.payload.price * action.payload.quantity;
      state.quantity += 1;
    },
    updatePost(state) {
      state.quantity += 1
    },
    deletePost(state, action) { },
  },
})

const { actions, reducer } = cartSlice;
export const { addProduct, updatePost, deletePost } = actions;
export default reducer;
