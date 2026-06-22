import React from "react";
import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { useWeather } from "../../context/WeatherContext";
import styles from "./styles";

const getWeatherIcon = (iconCode: string) => {
  switch (iconCode) {
    case '01d': return require('../../assets/sun.png');
    case '01n': return require('../../assets/moon.png');
    
    case '02d': return require('../../assets/partlycloud.png');
    case '02n': return require('../../assets/mooncloud.png');
    
    case '03d': 
    case '03n': 
    case '04d': 
    case '04n': 
      return require('../../assets/cloud.png');
    
    case '09d': 
    case '09n': 
      return require('../../assets/hrainy.png');
      
    case '10d': 
    case '10n': 
      return require('../../assets/lrainy.png');
      
    case '11d': 
    case '11n': 
      return require('../../assets/thunder.png');
      
    case '13d': 
    case '13n': 
      return require('../../assets/snow.png');
      
    case '50d': 
    case '50n': 
      return require('../../assets/foggy.png');
      
    default: 
      return require('../../assets/cloud.png');
  }
};

export function HourlyForecast() {
  const { hourlyForecast, isLoading } = useWeather();

  if (isLoading)
    return <ActivityIndicator color="#FFF" style={{ marginTop: 20 }} />;
  if (!hourlyForecast || hourlyForecast.length === 0) return null;

  const hourlyToRender = hourlyForecast.slice(0, 8);

  const formatTime = (timeString: string, index: number) => {
    if (index === 0) return "Agora";

    if (timeString.includes(" ")) {
      const timePart = timeString.split(" ")[1];
      return timePart.substring(0, 5);
    }
    return timeString;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>PRÓXIMAS HORAS</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {hourlyToRender.map((item, index) => (
          <View key={index} style={styles.cardItem}>
            <Text style={styles.timeText}>{formatTime(item.time, index)}</Text>

            {item.condition?.icon && (
              <Image
                source={getWeatherIcon(item.condition.icon)}
                style={styles.icon}
              />
            )}

            <Text style={styles.tempText}>
              {Math.round(item.temperature)}°C
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}