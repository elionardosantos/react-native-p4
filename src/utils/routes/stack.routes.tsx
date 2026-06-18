import React from "react"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from "./tab.routes";
import InfoScreen from "../../screens/InfoScreen/InfoScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tabs" component={TabNavigator} />
                <Stack.Screen name="Info" component={InfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};