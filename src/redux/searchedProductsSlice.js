import { createSlice } from "@reduxjs/toolkit";
// import productsData from "../data/productsData";

const initialState = {
    value: null,
};

export const searchedProductsSlice = createSlice({
    name: "searchedProducts",
    initialState,
    reducers: {
        filter: (state, action) => {
            if (action.payload.value) {
                state.value = action.payload.filteredProducts;
            } else {
                state.value = null;
            }
        },
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

// Action creators are generated for each case reducer function
export const { filter } = searchedProductsSlice.actions;

export default searchedProductsSlice.reducer;
