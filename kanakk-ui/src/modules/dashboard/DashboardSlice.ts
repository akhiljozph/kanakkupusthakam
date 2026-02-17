import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        value: {

        }
    },
    reducers: {
        loadAnalytics: (state) => {
            state.value = {}
        }
    }
});

export const { loadAnalytics } = dashboardSlice.actions;

export default dashboardSlice.reducer;