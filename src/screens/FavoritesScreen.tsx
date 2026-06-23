import { View, Text, StyleSheet } from "react-native";
import { FavoriteCard } from "../components/FavoriteCard";

export function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favoritos
      </Text>

      <FavoriteCard
        city="Curitiba"
        condition="Céu limpo"
        temperature={18}
        uvIndex={5.3}
        icon="☀️"
        onRemove={() => {}}
      />

      <FavoriteCard
        city="Rio de Janeiro"
        condition="Parcialmente nublado"
        temperature={28}
        uvIndex={8.1}
        icon="🌤️"
        onRemove={() => {}}
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