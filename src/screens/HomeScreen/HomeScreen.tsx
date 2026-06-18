import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import styles from "./styles";
import WeatherHeader from "../../components/WeatherHeader/WeatherHeader";


export default function HomeScreen(){
    return (
        <ScrollView style={styles.container}>
            <WeatherHeader />
        </ScrollView>
    );
}

