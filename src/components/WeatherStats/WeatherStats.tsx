import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const mockStats = {
  humidity: 66,
  windSpeed: 11,
  windDirection: 'NO',
  uvIndex: 9,
  visibility: 9,
};

export default function WeatherStats() {
  return (
    <View style={styles.container}>

      {/* Linha 1 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>💧 UMIDADE</Text>
          <Text style={styles.value}>{mockStats.humidity}%</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>💨 VENTO</Text>
          <Text style={styles.value}>{mockStats.windSpeed} km/h</Text>
        </View>
      </View>

      {/* Linha 2 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>🔆 UV</Text>
          <Text style={styles.value}>{mockStats.uvIndex}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>👁 VISIBILIDADE</Text>
          <Text style={styles.value}>{mockStats.visibility} km</Text>
        </View>
      </View>

    </View>
  );
}