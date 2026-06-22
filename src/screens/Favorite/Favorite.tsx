import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { useWeather } from "../../context/WeatherContext";
import { FavoriteCard } from "../../components/FavoriteCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@weatherapp:favorites";

const INITIAL_FAVORITES = [
  {
    city: "Curitiba",
    condition: "Céu limpo",
    temperature: 18,
    uvIndex: 5.3,
    icon: "☀️",
  },
  {
    city: "Rio de Janeiro",
    condition: "Parcialmente nublado",
    temperature: 28,
    uvIndex: 8.1,
    icon: "🌤️",
  },
];

function Favorite() {
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES);

  const navigation = useNavigation<any>();
  const { loadWeather } = useWeather();

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  async function loadFavorites() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);

      if (data) {
        setFavorites(JSON.parse(data));
      } else {
        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(INITIAL_FAVORITES)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFavorite(city: string) {
    const updated = favorites.filter(
      (item) => item.city !== city
    );

    setFavorites(updated);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function openFavorite(city: string) {
    await loadWeather(city);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favoritos
      </Text>

    <Text style={{ color: "#FFF", marginBottom: 10 }}>
        Favoritos carregados: {favorites.length}
    </Text>

      <FlatList
  style={{ flex: 1 }}
  data={favorites}
  keyExtractor={(item) => item.city}
  showsVerticalScrollIndicator={true}
  contentContainerStyle={{
    paddingBottom: 300,
  }}
  renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => openFavorite(item.city)}
          >
            <FavoriteCard
              city={item.city}
              condition={item.condition}
              temperature={item.temperature}
              uvIndex={item.uvIndex}
              icon={item.icon}
              onRemove={() => removeFavorite(item.city)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A2E",
    padding: 16,
    paddingTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
});

export default Favorite;