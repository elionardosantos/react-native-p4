import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      <Text>WeatherHeader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A2E',
  },
});