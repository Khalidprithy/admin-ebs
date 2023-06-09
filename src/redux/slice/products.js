import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    localStorage.setItem('productsData', JSON.stringify(data));
    return data;
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
    const updatedData = JSON.parse(localStorage.getItem('productsData'));
    const updatedProducts = updatedData.products.filter(
        product => product.id !== productId
    );
    updatedData.products = updatedProducts;
    localStorage.setItem('productsData', JSON.stringify(updatedData));
    return response.json();
});

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (productData) => {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ productId, updatedProductData }) => {
        const response = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'PUT',
            body: JSON.stringify(updatedProductData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }
);
const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        data: JSON.parse(localStorage.getItem('productsData')) || null,
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        // Fetch All Products
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
            });

        // Fetch Single Product
        builder
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
            });

        // Delete a Product
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                console.log("deleted successfully");
                state.data.products = state.data.products.filter(
                    product => product.id !== action.payload.productId
                );
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Add a Product
        builder
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(addProduct.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;

                console.log("Product Added");
            })
            .addCase(addProduct.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Update a Product
        builder
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;

                const updatedProduct = action.payload;
                state.data.products = state.data.products?.map(product =>
                    product.id === updatedProduct.id ? updatedProduct : product
                );

                console.log("Product Updated");
            })
            .addCase(updateProduct.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default productsSlice.reducer;