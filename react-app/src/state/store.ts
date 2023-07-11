import { counterSlice } from './slice/counter-slice';
import { configureStore } from "@reduxjs/toolkit";

export const ReduxStore = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer
    }
});

export type AppStore = typeof ReduxStore;
export type AppState = ReturnType<AppStore["getState"]>;