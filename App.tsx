import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabNavigator } from "./src/utils/routes/tab.routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <TabNavigator />
    </SafeAreaProvider>
  );
}
