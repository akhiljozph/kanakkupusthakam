import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {

        }
    },
    reducers: {
        saveUserInfo: (state) => {
            state.value = {}
        }
    }
});

export const { saveUserInfo } = authSlice.actions;

export default authSlice.reducer;