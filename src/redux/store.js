import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from './slice/authentication';
import customerReducer from './slice/customers';
import productsReducer from './slice/products';

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        products: productsReducer,
        customers: customerReducer
    }
})