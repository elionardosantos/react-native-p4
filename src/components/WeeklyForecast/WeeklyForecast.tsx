import React from "react";
import { View, Text, Image } from "react-native";
import { useWeather } from "../../context/WeatherContext";
import styles from "./styles";

const getWeatherIcon = (iconCode: string) => {
  switch (iconCode) {
    case "01d":
      return require("../../assets/sun.png");
    case "01n":
      return require("../../assets/moon.png");
    case "02d":
      return require("../../assets/partlycloud.png");
    case "02n":
      return require("../../assets/mooncloud.png");
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return require("../../assets/cloud.png");
    case "09d":
    case "09n":
      return require("../../assets/hrainy.png");
    case "10d":
    case "10n":
      return require("../../assets/lrainy.png");
    case "11d":
    case "11n":
      return require("../../assets/thunder.png");
    case "13d":
    case "13n":
      return require("../../assets/snow.png");
    case "50d":
    case "50n":
      return require("../../assets/foggy.png");
    default:
      return require("../../assets/cloud.png");
  }
};

export function WeeklyForecast() {
  const { weeklyForecast } = useWeather();

  const forecastToRender = weeklyForecast?.slice(0, 6) || [];

  if (forecastToRender.length === 0) return null;

  const minOfWeek = Math.min(...forecastToRender.map((item) => item.tempMin));
  const maxOfWeek = Math.max(...forecastToRender.map((item) => item.tempMax));

  const actualRange = maxOfWeek - minOfWeek;
  const rangeToUse = Math.max(actualRange, 25);

  const midPoint = (maxOfWeek + minOfWeek) / 2;

  const scaleMin = midPoint - rangeToUse / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>PRÓXIMOS 5 DIAS</Text>

      {forecastToRender.map((item, index) => {
        const startPos = ((item.tempMin - scaleMin) / rangeToUse) * 100;
        const barWidth = ((item.tempMax - item.tempMin) / rangeToUse) * 100;

        return (
          <View key={index} style={styles.row}>
            <Text style={styles.dayText}>{item.day}</Text>

            <View style={styles.iconContainer}>
              {item.condition?.icon && (
                <Image
                  source={getWeatherIcon(item.condition.icon)}
                  style={styles.iconSmall}
                />
              )}
            </View>

            <Text style={styles.tempTextMin}>{Math.round(item.tempMin)}°</Text>

            <View style={styles.barWrapper}>
              <View style={styles.barBackground}>
                <View
                  style={[
                    styles.barFill,
                    {
                      width: `${Math.max(barWidth, 8)}%`,
                      left: `${startPos}%`,
                    },
                  ]}
                />
              </View>
            </View>

            <Text style={styles.tempTextMax}>{Math.round(item.tempMax)}°</Text>
          </View>
        );
      })}
    </View>
  );
}
