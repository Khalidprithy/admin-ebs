import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slice/customers';
import productsReducer from './slice/products';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        customers: customerReducer
    }
})