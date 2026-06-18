import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherHeader from '../../components/WeatherHeader/WeatherHeader';
import styles from './styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <WeatherHeader />
      </ScrollView>
    </SafeAreaView>
  );
}

