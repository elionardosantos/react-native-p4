import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import WeatherHeader from "../components/WeatherHeader";

export default function HomeScreen(){
    return (
        <ScrollView style={styles.container}>
            <WeatherHeader />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A2E',
    },
});