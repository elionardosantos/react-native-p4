import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {styles} from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type TabName = 'home' | 'search' | 'favorites'

interface Tab {
    name: TabName
    label: string
    icon: string
    activeIcon: string
}

interface BottomTabBarProps {
    activeTab: TabName
    onTabPress: (tab: TabName) => void
}

const TABS: Tab[] = [
    {
        name: 'home',
        label: 'Início',
        icon: 'home',
        activeIcon: 'home'
    },
    {
      name: 'search',
      label: 'Buscar',
      icon: 'search',
      activeIcon: 'search'
    },
    {
        name: 'favorites',
        label: 'Favoritos',
        icon: 'star',
        activeIcon: 'star'
    }
]

export default function BottomTabBar ({activeTab, onTabPress} : BottomTabBarProps) {
    return (
        <View style={styles.container}>
            {TABS.map((tab) => {
                const isActive = activeTab === tab.name
                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={styles.tab}
                        onPress={() => onTabPress(tab.name)}
                    >
                        <MaterialIcons
                            // @ts-ignore
                            name={isActive ? tab.activeIcon : tab.icon}
                            size={24}
                            color={isActive ? "#4F6EF7" : "#B0B8D1"}
                        />
                        <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                            {tab.label}
                        </Text>
                        {isActive && <View style={styles.activeIndicator}></View>}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}