import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { useState, useCallback, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/SearchBar";
import CityList, { City } from "../../components/CityList/CityList";
import { useWeather } from "../../context/WeatherContext";
import { styles } from "./styles";

interface SearchProp {
  navigation: any;
}

function countryCodeToFlag(code: string): string {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

export default function Search({ navigation }: SearchProp) {
  const [query, setQuery] = useState<string>("");
  const [apiCities, setApiCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { loadWeather } = useWeather();

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query.trim() || query.trim().length < 2) {
      setApiCities([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    debounceRef.current = setTimeout(() => {
      buscarCidades(query);
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  async function buscarCidades(text: string) {
    try {
      const apiKey = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
      console.log("API key:", apiKey);

      const result = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          text,
        )}&limit=10&appid=${apiKey}`,
      );
      const data = await result.json();
      console.log("Resposta da API:", data);

      const mapped: City[] = (data ?? [])
        .map((item: any, index: number) => ({
          id: `${item.lat}-${item.lon}-${index}`,
          name: item.name,
          country: item.country,
          emoji: countryCodeToFlag(item.country),
          state: item.state,
        }))
        .filter(
          (city: City, index: number, arr: City[]) =>
            arr.findIndex(
              (c) => c.name === city.name && c.country === city.country,
            ) === index,
        );

      setApiCities(mapped);
    } catch (erro) {
      console.error("Erro ao buscar cidades:", erro);
      setApiCities([]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleClear = useCallback(() => {
    setQuery("");
    setApiCities([]);
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
      <CityList
        searchQuery={query}
        onSelectCity={handleSelectCity}
        isLoading={isLoading}
        apiCities={apiCities}
      />
    </SafeAreaView>
  );
}
