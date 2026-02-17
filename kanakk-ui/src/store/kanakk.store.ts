import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/AuthSlice";
import dashboardReducer from "../modules/dashboard/DashboardSlice";

export const kanakkStore = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer
    },
});