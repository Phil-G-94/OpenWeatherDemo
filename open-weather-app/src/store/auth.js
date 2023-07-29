import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: "auth",

    initialState: initialAuthState,

    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
