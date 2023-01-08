import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartState, TApiAllProductsResponse } from "../types";

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
  totalVat: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<TApiAllProductsResponse>) {
      const existingCartItemIndex = state.products.findIndex(product => product.id === action.payload.id)
      const existingCartItem = state.products[existingCartItemIndex]
      let updatedItems;

      // logic for adding same item as increased quantity
      if (existingCartItem) {
        updatedItems = [...state.products]
        let newQuantity = Number(existingCartItem.quantity)
        if (existingCartItem.quantity! < action.payload.quantity_available) { // check for quantity < quantity_available
          newQuantity += Number(action.payload.quantity);
        }
        updatedItems[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: newQuantity
        }
      } else {
        updatedItems = state.products.concat(action.payload)
      }

      state.products = updatedItems;
      state.total += action.payload.price * (action.payload.quantity || 1);
      state.totalVat += action.payload.vat
      state.quantity += 1;
    },
  },
})

const { actions, reducer } = cartSlice;
export const { addProduct } = actions;
export default reducer;
