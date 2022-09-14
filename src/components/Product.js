// import * as React from "react";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
import Ionicons from "@expo/vector-icons/Ionicons";
import { addToCart, removeFromCart, init } from "../redux/cartSlice";

export default function App(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);

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

    const addToCartt = (productt) => {
        const productExist = cart.find((product) => {
            return productt.id == product.id;
        });
        if (productExist) {
            changeQuantity(productExist, 1);
        } else {
            const product = { ...productt, quantity: 1 };
            dispatch(addToCart(product));
        }

        // console.log(lol);
        // console.log(product);
        // product.quantity = 1;
        // await setCart([...cart, product]);
        // // console.log(cart);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.product.image }} />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{props.product.title}</Text>
                <Text style={styles.description}>{props.product.description}</Text>
                <Text style={styles.rating}>{props.product.rating}</Text>
                <Text style={styles.price}>${props.product.price}</Text>
                {props.isCart ? (
                    <View style={{ flexDirection: "row", alignContent: "space-around", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => props.changeQuantity(props.product, -1)}>
                            <Ionicons name="ios-remove-circle-outline" size={25} />
                        </TouchableOpacity>
                        <Text> {props.product.quantity} </Text>
                        <TouchableOpacity onPress={() => props.changeQuantity(props.product, 1)}>
                            <Ionicons name="ios-add-circle-outline" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.deleteCartProduct(props.product)}
                            style={{ marginLeft: 15 }}>
                            <Ionicons name="ios-close-circle-outline" size={25} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ flexDirection: "row", alignContent: "space-around" }}>
                        {/* <Ionicons name="md-checkmark-circle" size={32} /> */}
                        <Button title="Add to Cart" onPress={() => addToCartt(props.product)} />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 5,
        // width: "100%",
        height: 150,
        marginVertical: 5,
        backgroundColor: "#fff",
    },
    imageContainer: {
        flex: 2,
        height: "100%",
        // backgroundColor: "#555",
    },
    image: {
        // width: 50,
        height: "100%",
    },
    rightContainer: {
        flex: 3,
        flexDirection: "column",
        // height: 150,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontWeight: "bold",
    },
});
