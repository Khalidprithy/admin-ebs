import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    return response.json();
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE'
    });
    console.log("deleteProduct", response)
    return response.json();
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = false;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = false;
            })
            .addCase(fetchProductById.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                console.log("deleted successfully")
                // Handle the deletion logic if needed
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default productsSlice.reducer;
