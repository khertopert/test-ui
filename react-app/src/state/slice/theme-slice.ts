import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light'
    },
    reducers: {
        setDarkMode: (state) => {
            state.theme = 'dark';
        },
        setLightMode: (state) => {
            state.theme = 'light';
        }
    }
});

export const { setDarkMode, setLightMode } = themeSlice.actions;
export const themeSelector = (state: AppState) => state.theme;