// import * as React from "react";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from "react-native";
import Products from "../components/Products";
import SearchProduct from "../components/SearchProduct";

export default function App() {
    return (
        <View style={styles.container}>
            <SearchProduct />
            <Products />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "#ddd",
        flex: 1,
        // alignItems: "center",
        // justifyContent: "space-around",
    },
});
