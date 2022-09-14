import { createSlice } from "@reduxjs/toolkit";
// import productsData from "../data/productsData";

// async () => {
//     const response = (await axios.get("https://fakestoreapi.com/products")).data;
//     const productsData = response.map((item) => {
//         return {
//             id: item.id,
//             title: item.title,
//             description: "",
//             rating: "",
//             price: item.price,
//             image: item.image,
//         };
//     });
// };

const initialState = {
    // value: productsData,
    value: false,
};

export const isSignedInSlice = createSlice({
    name: "isSignedIn",
    initialState,
    reducers: {
        signin: (state) => {
            state.value = true;
        },
        signout: (state) => {
            state.value = false;
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
export const { signin, signout } = isSignedInSlice.actions;

export default isSignedInSlice.reducer;
