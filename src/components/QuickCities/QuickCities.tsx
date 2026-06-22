import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useWeather } from "../../context/WeatherContext";
import styles from "./styles";

const CITIES = [
  "São Paulo",
  "Rio de Janeiro",
  "Teresópolis",
  "Curitiba",
  "Nova York",
];

export function QuickCities() {
  const { loadWeather } = useWeather();

  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>CIDADES RÁPIDAS</Text>

      <View style={styles.chipsWrapper}>
        {CITIES.map((city, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chip}
            onPress={() => loadWeather(city)}
          >
            <Text style={styles.chipText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
