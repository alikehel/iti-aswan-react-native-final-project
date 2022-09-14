// import * as React from "react";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { init } from "../redux/productsSlice";
import Product from "../components/Product";
import axios from "axios";

//dev
import productsDataa from "../data/products.json";

export default function App() {
    const products = useSelector((state) => state.products.value);
    const searchedProducts = useSelector((state) => state.searchedProducts.value);
    // console.log(searchedProducts);
    const dispatch = useDispatch();

    useEffect(async () => {
        const response = (await axios.get("https://dummyjson.com/products")).data.products;

        //dev
        // const response = productsDataa;

        const productsData = response.map((item) => {
            return {
                id: item.id,
                title: item.title,
                description: item.description,
                rating: "",
                price: item.price,
                image: item.images[0],
            };
        });
        // console.log(productsData);
        dispatch(init(productsData));
    }, []);

    // useEffect(() => {
    //     dispatch(init(state, productsData));
    // }, []);

    // const [products, setProducts] = useState(productsData);

    return (
        <View style={styles.container}>
            {searchedProducts != null ? (
                //  searchedProducts.map((item) => {
                //       return <Product key={item.id} product={item} />;
                //   })
                <FlatList
                    data={searchedProducts}
                    renderItem={({ item }) => {
                        return <Product key={item.id} product={item} isCart={false} />;
                    }}
                    keyExtractor={(item, index) => item.id}
                />
            ) : (
                // products.map((item) => {
                //     return <Product key={item.id} product={item} />;
                // })
                <FlatList
                    data={products}
                    renderItem={({ item }) => {
                        return <Product key={item.id} product={item} isCart={false} />;
                    }}
                    keyExtractor={(item, index) => item.id}
                />
            )}
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
