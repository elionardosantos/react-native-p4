import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../@types/navigation';

import Home from '../../screens/Home/Home';
import Search from '../../screens/Search/Search';
import Favorite from '../../screens/Favorite/favorite';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#B0B8D1',
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopWidth: 0,
          elevation: 5,
          shadowOpacity: 0.1,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Início',
        }}
      />

      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarLabel: 'Buscar',
        }}
      />
      
      <Tab.Screen 
        name="Favorite" 
        component={Favorite} 
        options={{
          tabBarLabel: 'Favoritos',
        }}
      />
    </Tab.Navigator>
  );
}