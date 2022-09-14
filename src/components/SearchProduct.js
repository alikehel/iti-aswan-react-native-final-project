// import * as React from "react";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase, TextInput } from "react-native";
// import { TextInput } from "react-native-web";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../redux/searchedProductsSlice";

export default function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.value);
    const handleSearchChange = (value) => {
        const filteredProducts = products.filter((item) => {
            return item.title.toLowerCase().includes(value.toLowerCase());
        });
        dispatch(filter({ value, filteredProducts }));

        //dev
        // console.log(filter);
        // const s = useSelector((state) => state.products.value);
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} type="text" onChangeText={(value) => handleSearchChange(value)} />
            <Ionicons name="search" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "#ddd",
        // flex: 1,
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
        borderWidth: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        marginVertical: 5,
    },
    input: {
        flexGrow: 1,
    },
});
