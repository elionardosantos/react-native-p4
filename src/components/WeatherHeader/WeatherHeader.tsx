import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const mockData = {
  city: 'São Paulo',
  country: 'BR',
  temp: 21,
  description: 'Céu Limpo',
  feelsLike: 19,
  unit: 'C',
};

export default function WeatherHeader() {
  return (
    <View style={styles.container}>

      {/* Linha do topo */}
      <View style={styles.topRow}>
        <Text style={styles.cityName}>📍 {mockData.city}</Text>
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.unitButton}>
            <Text style={styles.unitButtonText}>°F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.refreshButton}>
            <Text style={styles.refreshText}>🔄</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

