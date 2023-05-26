import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const login = createAsyncThunk('authentication/login', async ({ username, password }) => {

    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    Cookies.set("token", data.token);
    return data;
});

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
            });
    }
});

export default authenticationSlice.reducer;
