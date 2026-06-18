import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useWeather } from '../../context/WeatherContext';
import styles from './styles';

export default function WeatherHeader() {
  const { currentCity, weatherData, unit, toggleUnit, isLoading } = useWeather();

  if (isLoading) {
    return (
      <LinearGradient colors={['#1E5BF2', '#10182F']} style={styles.container}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </LinearGradient>
    );
  }

  if (!currentCity || !weatherData) {
    return (
      <LinearGradient colors={['#1E5BF2', '#10182F']} style={styles.container}>
        <View style={styles.centerBlock}>
          <Text style={styles.description}>Nenhuma cidade selecionada</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#1E5BF2', '#10182F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Linha do topo */}
      <View style={styles.topRow}>
        <Text style={styles.cityName}>📍 {currentCity.name}</Text>
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.unitButton} onPress={toggleUnit}>
            <Text style={styles.unitButtonText}>
              {unit === 'metric' ? '°F' : '°C'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.refreshButton}>
            <Text style={styles.refreshText}>🔄</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ícone e Temperatura */}
      <View style={styles.centerBlock}>
        <Text style={styles.weatherIcon}>☀️</Text>
        <Text style={styles.temperature}>{Math.round(weatherData.temperatura)}°</Text>
        <Text style={styles.description}>{weatherData.condition.description}</Text>
        <Text style={styles.feelsLike}>
  Sensação {Math.round(weatherData.feelsLike)}° · {currentCity.name}, {currentCity.country}
</Text>
      </View>

    </LinearGradient>
  );
}