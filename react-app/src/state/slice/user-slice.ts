import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        roles: [],
        token: undefined,
    },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.roles = action.payload.roles;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.name = '';
            state.roles = [];
            state.token = undefined;
        }
    }
})

export const { logout, login } = userSlice.actions;
export const userSelector = (state: AppState) => state.user;