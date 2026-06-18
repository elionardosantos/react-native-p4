import React from 'react';
import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { WeatherCondition } from '../../@types/weather';
import {styles} from "./styles";

// Códigos da OpenWeatherMap:
// 01 = céu limpo, 02 = poucas nuvens, 03 = nuvens dispersas
// 04 = nuvens fechadas, 09 = garoa, 10 = chuva
// 11 = tempestade, 13 = neve, 50 = névoa
// Sufixo: d = dia, n = noite

type IconName = keyof typeof MaterialIcons.glyphMap;

const ICON_MAP: Record<string, IconName | undefined> = {
    '01d': 'sunny',
    '01n': 'mode-night',
    '02d': 'cloud',
    '02n': 'nights-stay',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '04n': 'cloud',
    '09d': 'grain',
    '09n': 'grain',
    '10d': 'umbrella',
    '10n': 'umbrella',
    '11d': 'thunderstorm',
    '11n': 'thunderstorm',
    '13d': 'ac-unit',
    '13n': 'ac-unit',
    '50d': 'blur-on',
    '50n': 'blur-on',
};

const COLOR_MAP: Record<string, string> = {
    '01d': '#FFD700',
    '01n': '#B0C4DE',
    '02d': '#FFC107',
    '02n': '#90A4AE',
    '03d': '#90A4AE',
    '03n': '#78909C',
    '04d': '#78909C',
    '04n': '#607D8B',
    '09d': '#64B5F6',
    '09n': '#4FC3F7',
    '10d': '#42A5F5',
    '10n': '#29B6F6',
    '11d': '#7E57C2',
    '11n': '#5C6BC0',
    '13d': '#E0F7FA',
    '13n': '#B2EBF2',
    '50d': '#B0BEC5',
    '50n': '#90A4AE',
};

interface WeatherIconProps {
    condition: WeatherCondition;
    size?: number;
}

export default function WeatherIcon({ condition, size = 32 }: WeatherIconProps) {
    const iconCode = condition.icon;
    const iconName: IconName = ICON_MAP[iconCode] ?? 'device-thermostat';
    const iconColor: string = COLOR_MAP[iconCode] ?? '#B0B8D1';

    return (
        <View style={styles.container}>
            <MaterialIcons name={iconName} size={size} color={iconColor} />
        </View>
    );
}