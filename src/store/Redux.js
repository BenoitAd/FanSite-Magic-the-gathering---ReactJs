import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const userDeckSlice = createSlice({
    name: 'UserDeck',
    initialState: [],
    reducers: {
        addCard: (state, action) => {
            if (!state.includes(action.payload)) state.push(action.payload);
        },
        removeCard: (state, action) => {
            state = state.filter((it) => it !== action.payload);
        },
    },
});

export const store = configureStore({
    reducer: {
        userDeckSlice: userDeckSlice.reducer,
    },
});
