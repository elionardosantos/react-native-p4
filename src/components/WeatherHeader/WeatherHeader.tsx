import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
    <LinearGradient
       colors={['#1E5BF2', '#10182F']}
       style={styles.container}
>
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

      {/* Ícone e Temperatura */}
      <View style={styles.centerBlock}>
        <Text style={styles.weatherIcon}>☀️</Text>
        <Text style={styles.temperature}>{mockData.temp}°</Text>
        <Text style={styles.description}>{mockData.description}</Text>
        <Text style={styles.feelsLike}>
          Sensação {mockData.feelsLike}° · {mockData.city}, {mockData.country}
        </Text>
      </View>

    </LinearGradient>
  );
}