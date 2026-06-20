import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherHeader from "../../components/WeatherHeader/WeatherHeader";
import WeatherStats from "../../components/WeatherStats/WeatherStats";
import { HourlyForecast } from "../../components/HourlyForecast/HourlyForecast";
import { WeeklyForecast } from "../../components/WeeklyForecast/WeeklyForecast";
import { useWeather } from "../../context/WeatherContext";
import styles from "./styles";
import { QuickCities } from "../../components/QuickCities/QuickCities";

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
        <WeeklyForecast />
        <QuickCities />
      </ScrollView>
    </SafeAreaView>
  );
}
