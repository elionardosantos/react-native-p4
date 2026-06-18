import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Rotas do Tab Navigator Principal
export type RootTabParamList = {
  Inicio: undefined;
  Buscar: undefined;
  Favoritos: undefined;
};

// Rotas do Stack Navigator (caso precise empilhar telas de detalhes no futuro)
export type RootStackParamList = {
  MainTabs: undefined; // Contém o Tab Navigator
};

// Hook de navegação global para facilitar a vida do time
export type NavigationGlobalProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  StackNavigationProp<RootStackParamList>
>;