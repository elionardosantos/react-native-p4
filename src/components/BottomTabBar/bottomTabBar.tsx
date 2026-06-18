import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TabConfig = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  activeIcon: keyof typeof MaterialIcons.glyphMap;
};

const TABS_CONFIG: Record<string, TabConfig> = {
  Home: { label: 'Início', icon: 'home', activeIcon: 'home' },
  Search: { label: 'Buscar', icon: 'search', activeIcon: 'search' },
  Favorites: { label: 'Favoritos', icon: 'star', activeIcon: 'star' }
};

export default function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const tabConfig = TABS_CONFIG[route.name];

        if (!tabConfig) return null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={onPress}
          >
            <MaterialIcons
              name={isFocused ? tabConfig.activeIcon : tabConfig.icon}
              size={24}
              color={isFocused ? "#4F6EF7" : "#B0B8D1"}
            />
            <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
              {tabConfig.label}
            </Text>
            {isFocused && <View style={styles.activeIndicator}></View>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}