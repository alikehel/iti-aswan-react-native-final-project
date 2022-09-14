// import * as React from "react";
// import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { init } from "../redux/productsSlice";
import Product from "../components/Product";
import { addToCart, removeFromCart, init } from "../redux/cartSlice";

//dev
import productsDataa from "../data/products.json";

export default function App() {
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.products.value);
    // const searchedProducts = useSelector((state) => state.searchedProducts.value);
    // console.log(searchedProducts);

    // useEffect(async () => {

    const getCartStorage = async () => {
        const data = JSON.parse(await AsyncStorage.getItem("loggedinUser")).cart;
        console.log(data);
        dispatch(init(data));
    };

    const setCartStorage = async () => {
        await AsyncStorage.mergeItem("loggedinUser", JSON.stringify({ cart: JSON.stringify(cart) }));
    };

    useEffect(() => {
        getCartStorage();
    }, []);

    useEffect(() => {
        setCartStorage();
    }, [cart]);

    const changeQuantity = (product, sign) => {
        // console.log(products);
        if (product.quantity == 1 && sign == -1) {
            deleteCartProduct(product);
            console.log("deleted");
        } else {
            const newCart = cart.map((item) => {
                if (product == item) {
                    const newQuantity = product.quantity + sign;
                    return { ...product, quantity: newQuantity };
                } else {
                    return item;
                }
            });
            dispatch(init(newCart));
        }
    };

    const deleteCartProduct = (deletedProduct) => {
        const newproducts = cart.filter((product) => {
            return deletedProduct != product;
        });
        dispatch(init(newproducts));
        // console.log(newproducts);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => {
                    return (
                        <Product
                            key={item.id}
                            product={item}
                            isCart={true}
                            deleteCartProduct={deleteCartProduct}
                            changeQuantity={changeQuantity}
                        />
                    );
                }}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // padding: 5,
        // backgroundColor: "#ddd",
        flex: 1,
        // alignItems: "center",
        // justifyContent: "space-around",
    },
});
