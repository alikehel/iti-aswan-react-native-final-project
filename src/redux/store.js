import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/productsSlice";
import searchedProductsReducer from "../redux/searchedProductsSlice";
import isSignedInReducer from "../redux/isSignedInSlice";
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        searchedProducts: searchedProductsReducer,
        isSignedIn: isSignedInReducer,
        cart: cartReducer,
    },
});
