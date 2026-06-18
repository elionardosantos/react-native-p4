import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    loadFavorites();
  }, []);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favoritos
      </Text>

      {favorites.map((item) => (
        <FavoriteCard
          key={item.city}
          city={item.city}
          condition={item.condition}
          temperature={item.temperature}
          uvIndex={item.uvIndex}
          icon={item.icon}
          onRemove={() => removeFavorite(item.city)}
        />
      ))}
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