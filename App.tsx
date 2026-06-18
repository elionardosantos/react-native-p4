import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigator } from "./src/utils/routes/stack.routes";
import { WeatherProvider } from "./src/context/WeatherContext";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <WeatherProvider>
      <StatusBar style="light"/>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </WeatherProvider>
  );
}