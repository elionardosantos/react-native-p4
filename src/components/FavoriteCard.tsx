import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface FavoriteCardProps {
  city: string;
  condition: string;
  temperature: number;
  uvIndex: number;
  icon: string;
  onRemove: () => void;
}

export function FavoriteCard({
  city,
  condition,
  temperature,
  uvIndex,
  icon,
  onRemove,
}: FavoriteCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.city}>
          {icon} {city}
        </Text>

        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.remove}>🗑️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.condition}>
        {condition}
      </Text>

      <Text style={styles.temperature}>
        🌡️ {temperature}°C
      </Text>

      <Text style={styles.uv}>
        ☀️ UV: {uvIndex}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242444",
    padding: 16,
    marginVertical: 8,
    borderRadius: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  city: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  remove: {
    fontSize: 20,
    color: "#FF4757",
  },

  condition: {
    fontSize: 16,
    color: "#B0B8D1",
    marginTop: 8,
  },

  temperature: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 8,
  },

  uv: {
    fontSize: 16,
    color: "#B0B8D1",
    marginTop: 4,
  },
});