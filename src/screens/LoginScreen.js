// import * as React from "react";
// import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase, TextInput } from "react-native";
import bcrypt from "bcryptjs";

export default function App({ navigation, isSinedIn, setIsSignedIn }) {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const handleUsernameChange = (data) => {
        setLoginData({ ...loginData, username: data });
    };

    const handlePasswordChange = (data) => {
        setLoginData({ ...loginData, password: data });
    };

    const handleLogin = async () => {
        if (!loginData.username || !loginData.password) {
            console.log("complete ur data");
            return;
        }
        if (loginData.username.length < 6 || loginData.password.length < 6) {
            console.log("wrong data");
            return;
        }
        const usernameExist = JSON.parse(await AsyncStorage.getItem(loginData.username));
        if (!usernameExist) {
            console.log("this user doesn't exist");
            return;
        }
        const hashedPassword = usernameExist;
        if (bcrypt.compareSync(loginData.password, hashedPassword)) {
            AsyncStorage.setItem(
                "loggedinUser",
                JSON.stringify({
                    name: loginData.username,
                    cart: [],
                })
            );
            setIsSignedIn(true);
            // navigation.navigate("Home");
        } else {
            console.log("wrong username or password");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 10 }}>
                <Text htmlFor="username">Username</Text>
                <TextInput
                    style={styles.input}
                    id="username"
                    type="text"
                    onChangeText={(value) => handleUsernameChange(value)}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text htmlFor="password">Password</Text>
                <TextInput
                    style={styles.input}
                    id="password"
                    type="password"
                    onChangeText={(value) => handlePasswordChange(value)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Login</Text>
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
    input: {
        borderRadius: 5,
        borderWidth: 5,
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
