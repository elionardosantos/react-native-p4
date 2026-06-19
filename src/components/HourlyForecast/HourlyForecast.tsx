import React from "react";
import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { useWeather } from "../../context/WeatherContext";
import styles from "./styles";

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
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.condition.icon}@2x.png`,
                }}
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
