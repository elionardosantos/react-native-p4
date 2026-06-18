import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <Text>WeatherHeader</Text>
    </View>
  );
}

