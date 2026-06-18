import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabNavigator } from "./src/utils/routes/tab.routes";
import { WeatherProvider } from "./src/context/WeatherContext";

export default function App() {
  return (
    <WeatherProvider>
      <SafeAreaProvider>
        <TabNavigator />
      </SafeAreaProvider>
    </WeatherProvider>
  );
}
