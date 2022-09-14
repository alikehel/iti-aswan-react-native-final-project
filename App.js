// import * as React from "react";
// import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { GestureResponderHandlers } from "react-native";
// import RCTAnimation from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, GestureHandlerRefContext } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import "react-native-gesture-handler";

import { store } from "./src/redux/store";
import { Provider, useSelector, useDispatch } from "react-redux";

import { signin, signout } from "./src/redux/isSignedInSlice";

const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    // const isSignedIn = useSelector((state) => state.isSignedIn.value);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(async () => {
        const loggedUser = JSON.parse(await AsyncStorage.getItem("loggedinUser"));
        // console.log(loggedUser);
        if (loggedUser) {
            setIsSignedIn(true);
        }
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator.Navigator>
                    {isSignedIn ? (
                        <StackNavigator.Screen
                            name="Home"
                            children={() => <HomeScreen setIsSignedIn={setIsSignedIn} />}
                        />
                    ) : (
                        <StackNavigator.Screen
                            name="Account"
                            children={() => <AccountScreen isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}
                        />
                    )}
                    {/* <StackNavigator.Screen
                        name="Account"
                        component={AccountScreen}
                        // options={{ animationTypeForReplace: "push" }}
                    /> */}
                    {/* <StackNavigator.Screen name="Home" component={HomeScreen} /> */}
                </StackNavigator.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({});
