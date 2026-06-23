import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useWeather } from '../../context/WeatherContext';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@weatherapp:favorites';

export default function WeatherHeader() {
  const { currentCity, weatherData, unit, toggleUnit, isLoading } = useWeather();
  const navigation = useNavigation<any>();

 async function addFavorite() {
  if (!currentCity || !weatherData) {
    alert('Cidade ou clima não encontrados');
    return;
  }

  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    const favorites = data ? JSON.parse(data) : [];

    const alreadyExists = favorites.some(
      (item: any) => item.city === currentCity.name
    );

    if (alreadyExists) {
      alert('Cidade já está nos favoritos');
      return;
    }

    const newFavorite = {
      city: currentCity.name,
      condition: weatherData.condition.description,
      temperature: Math.round(weatherData.temperatura),
      uvIndex: weatherData.uvIndex ?? 0,
      icon: '⭐',
    };

    const updatedFavorites = [...favorites, newFavorite];

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedFavorites)
    );

    alert('Cidade adicionada aos favoritos');
  } catch (error) {
    console.log(error);
    alert('Erro ao adicionar favorito');
  }
}

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
      <View style={styles.topRow}>
        <Text style={styles.cityName}><img src="" alt="" />{currentCity.name}</Text>
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.unitButton} onPress={toggleUnit}>
            <Text style={styles.unitButtonText}>
              {unit === 'metric' ? '°F' : '°C'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.refreshButton}
            onPress={() => navigation.navigate('Info')}
          >
            <MaterialIcons name="info-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.centerBlock}>
        <WeatherIcon condition={weatherData.condition} size={80} />

        <Text style={styles.temperature}>
          {Math.round(weatherData.temperatura)}°
        </Text>

        <Text style={styles.description}>
          {weatherData.condition.description.charAt(0).toUpperCase() +
            weatherData.condition.description.slice(1)}
        </Text>

        <Text style={styles.feelsLike}>
          Sensação {Math.round(weatherData.feelsLike)}° · {currentCity.name},{' '}
          {currentCity.country}
        </Text>

        <TouchableOpacity
          onPress={addFavorite}
          style={{
            marginTop: 12,
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: '#1E5BF2', fontWeight: 'bold' }}>
            ⭐ Adicionar aos Favoritos
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}