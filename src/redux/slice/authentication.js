import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const loadUserFromStorage = () => {
    return (dispatch) => {
        const user = localStorage.getItem("user");
        if (user) {
            dispatch(authenticationSlice.actions.setUser(JSON.parse(user)));
        }
    };
};

export const login = createAsyncThunk(
    'authentication/login',
    async ({ username, password }) => {
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
    }
);

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    },
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
                // Store user in local storage
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
            });
    }
});

export const { setUser, clearUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;