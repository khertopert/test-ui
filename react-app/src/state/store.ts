import { counterSlice } from './slice/counter-slice';
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/user-slice";
import { themeSlice } from "./slice/theme-slice";

export const ReduxStore = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [themeSlice.name]: themeSlice.reducer,
    }
});

export type AppStore = typeof ReduxStore;
export type AppState = ReturnType<AppStore["getState"]>;