// import * as React from "react";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from "react-native";
import ProductsScreen from "./ProductsScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
import { useSelector } from "react-redux";
const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function App({ setIsSignedIn }) {
    const cart = useSelector((state) => state.cart.value);

    return (
        <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
            <BottomTabNavigator.Screen name="Products" component={ProductsScreen} />
            <BottomTabNavigator.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: cart.length }} />
            <BottomTabNavigator.Screen
                name="Profile"
                children={() => <ProfileScreen setIsSignedIn={setIsSignedIn} />}
            />
        </BottomTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({});
