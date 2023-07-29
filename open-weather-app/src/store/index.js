import { configureStore } from "@reduxjs/toolkit";

// import reducer from slice here
import authReducer from "./auth.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
