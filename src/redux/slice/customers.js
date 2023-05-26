import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk('fetchCustomers', async () => {
    const response = await fetch('https://dummyjson.com/users');
    return response.json();
});

export const fetchCustomerCart = createAsyncThunk('customers/fetchCustomerCart', async (customerId) => {
    const response = await fetch(`https://dummyjson.com/users/${customerId}/carts`);
    return response.json();
});

const customersSlice = createSlice({
    name: "customers",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state,) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchCustomerCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCustomerCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCustomerCart.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default customersSlice.reducer;
