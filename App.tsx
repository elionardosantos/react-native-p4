import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './src/utils/routes/tab.routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}