import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../slices/apiSlice';
import cartReducer from '../slices/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;