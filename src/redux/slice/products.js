import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();

});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }
});

export default productsSlice.reducer