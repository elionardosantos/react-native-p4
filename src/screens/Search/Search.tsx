import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/SearchBar";
import CityList, { City } from "../../components/CityList/CityList";
import { useWeather } from "../../context/WeatherContext";
import { styles } from "./styles";

interface SearchProp {
  navigation: any;
}

export default function Search({ navigation }: SearchProp) {
  const [query, setQuery] = useState<string>("");
  const { loadWeather } = useWeather();

  const handleClear = useCallback(() => {
    setQuery("");
  }, []);

  const handleSelectCity = useCallback(
    async (city: City) => {
      await loadWeather(city.name);
      navigation.navigate("Home", { cityName: city.name });
    },
    [loadWeather, navigation],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Buscar cidades</Text>
          <Text style={styles.headerSubtitle}>Selecione para ver o clima</Text>
        </View>
      </View>
      <SearchBar
        value={query}
        onChangeText={(text: string) => setQuery(text)}
        onClear={handleClear}
      />
      <CityList searchQuery={query} onSelectCity={handleSelectCity} />
    </SafeAreaView>
  );
}
