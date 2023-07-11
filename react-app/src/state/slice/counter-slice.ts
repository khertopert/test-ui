import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increase: (state, action) => {
            state.value = state.value + action.payload;
        },
        decrease: (state, action) => {
            state.value = state.value - action.payload;
        }
    }
});

export const { increase, decrease } = counterSlice.actions;
export const counterSelector = (state: AppState) => state.counter;