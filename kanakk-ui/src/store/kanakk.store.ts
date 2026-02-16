import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/AuthSlice";

export const kanakkStore = configureStore({
    reducer: {
        auth: authReducer
    },
});