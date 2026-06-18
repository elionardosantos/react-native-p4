import React from 'react';
import { View, Text } from 'react-native';
import { useWeather } from '../../context/WeatherContext';
import styles from './styles';

export default function WeatherStats() {
  const { weatherData } = useWeather();

  if (!weatherData) return null;

  return (
    <View style={styles.container}>

      {/* Linha 1 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>💧 UMIDADE</Text>
          <Text style={styles.value}>{weatherData.humidity}%</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>💨 VENTO</Text>
          <Text style={styles.value}>{Math.round(weatherData.windSpeed)} km/h</Text>
        </View>
      </View>

      {/* Linha 2 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>🔆 UV</Text>
          <Text style={styles.value}>{weatherData.uvIndex ?? 'N/A'}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>👁 VISIBILIDADE</Text>
          <Text style={styles.value}>{weatherData.visibility} km</Text>
        </View>
      </View>

    </View>
  );
}