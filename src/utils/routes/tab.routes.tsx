import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importe o seu componente de TabBar customizado (ajuste o caminho se necessário)
import BottomTabBar from '../../components/BottomTabBar/bottomTabBar'; 

// Importe as suas telas (ajuste os caminhos se necessário)
import HomeScreen from '../../screens/Home/Home';
import SearchScreen from '../../screens/Search/Search';
import FavoritesScreen from '../../screens/Favorite/Favorite';

// Cria a instância do navegador de abas
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    // O NavigationContainer DEVE ser o elemento mais externo da navegação
    <NavigationContainer>
      
      <Tab.Navigator
        // Injetando o seu BottomTabBar customizado aqui
        tabBar={(props) => <BottomTabBar {...props} />}
        
        // Escondendo o cabeçalho padrão para você ter controle total do design
        screenOptions={{
          headerShown: false, 
        }}
      >
        {/* Declarando as rotas e conectando com as telas */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}