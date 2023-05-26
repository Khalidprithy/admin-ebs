import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk('fetchCustomers', async () => {
    const response = await fetch('https://dummyjson.com/users');
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
        builder.addCase(fetchCustomers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchCustomers.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }
});

export default customersSlice.reducer