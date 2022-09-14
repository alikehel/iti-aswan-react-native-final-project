// import * as React from "react";
// import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase, TextInput, Alert } from "react-native";
import bcrypt from "bcryptjs";

export default function App({ navigation, setIsSignedIn }) {
    const [loggedInUser, setLoggedInUser] = useState("");

    useEffect(async () => {
        const loggedinUser = JSON.parse(await AsyncStorage.getItem("loggedinUser"));
        setLoggedInUser(loggedinUser.name);
    }, []);

    const handleSignout = async () => {
        await AsyncStorage.removeItem("loggedinUser");
        setIsSignedIn(false);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>
                    {loggedInUser.toUpperCase()}'s PROFILE
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSignout()}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        width: "50%",
        alignSelf: "center",
        height: 50,
    },
    button: {
        backgroundColor: "#000",
        // width: "50%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        paddingVertical: 5,
    },
    buttonText: {
        color: "#fff",
    },
});
