// import * as React from "react";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from "react-native";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function App(props) {
    return (
        <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
            <BottomTabNavigator.Screen
                name="Login"
                children={() => <LoginScreen isSignedIn={props.isSignedIn} setIsSignedIn={props.setIsSignedIn} />}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="ios-log-in" color={color} size={size} />,
                }}
            />
            <BottomTabNavigator.Screen
                name="Signup"
                children={() => <SignupScreen isSignedIn={props.isSignedIn} setIsSignedIn={props.setIsSignedIn} />}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="ios-log-in-outline" color={color} size={size} />,
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({});
