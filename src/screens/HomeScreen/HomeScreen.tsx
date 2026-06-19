import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherHeader from '../../components/WeatherHeader/WeatherHeader';
import WeatherStats from '../../components/WeatherStats/WeatherStats';
import { HourlyForecast } from '../../components/HourlyForecast/HourlyForecast';
import { useWeather } from '../../context/WeatherContext';
import styles from './styles';

export default function HomeScreen() {
  const { loadWeather } = useWeather();

  useEffect(() => {
    loadWeather('Greenland');
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <WeatherHeader />
        <WeatherStats />
        <HourlyForecast />        
      </ScrollView>
    </SafeAreaView>
  );
}