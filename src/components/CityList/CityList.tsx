import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";

export interface City {
  id: string;
  name: string;
  country: string;
  emoji: string;
  state?: string;
}

interface CityItemProp {
  item: City;
  onPress: (city: City) => void;
  isLoading: boolean;
}

interface CityListProp {
  searchQuery?: string;
  onSelectCity: (city: City) => void;
  isLoading?: boolean;
  apiCities?: City[];
}

interface EmptyStateProp {
  query: string;
}

const PopularCities: City[] = [
  { id: "1", name: "São Paulo", country: "BR", emoji: "🇧🇷" },
  { id: "2", name: "Rio de Janeiro", country: "BR", emoji: "🇧🇷" },
  { id: "3", name: "New York", country: "US", emoji: "🇺🇸" },
  { id: "4", name: "London", country: "GB", emoji: "󠁧󠁢󠁥󠁮󠁧🇬🇧" },
  { id: "5", name: "Tokyo", country: "JP", emoji: "🇯🇵" },
  { id: "6", name: "Cairo", country: "EG", emoji: "🇪🇬" },
  { id: "7", name: "Berlin", country: "DE", emoji: "🇩🇪" },
  { id: "8", name: "Roma", country: "IT", emoji: "🇮🇹" },
  { id: "9", name: "Paris", country: "FR", emoji: "🇫🇷" },
  { id: "10", name: "Sydney", country: "AU", emoji: "🇦🇺" },
];

const CityItem = ({ item, onPress, isLoading }: CityItemProp) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => onPress(item)}
    disabled={isLoading}
    activeOpacity={0.7}
  >
    <Text style={styles.itemEmoji}>{item.emoji}</Text>

    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCountry}>
        {" "}
        {item.state ? `${item.state}, ${item.country}` : item.country}
      </Text>
    </View>
  </TouchableOpacity>
);

const Separator = () => <View style={styles.separator} />;

const EmptyState = ({ query }: EmptyStateProp) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyTitle}>Nenhuma cidade encontrada</Text>
    <Text style={styles.emptySubtitle}>Nenhuma resultado para {query}</Text>
  </View>
);

export default function CityList({
  searchQuery = "",
  onSelectCity,
  isLoading = false,
  apiCities,
}: CityListProp) {
  const isSearching = searchQuery.trim().length > 0;
  const filteredCities = isSearching ? (apiCities ?? []) : PopularCities;

  const renderItem: ListRenderItem<City> = ({ item }) => (
    <CityItem item={item} onPress={onSelectCity} isLoading={isLoading} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {isSearching ? "Resultados" : "Cidades populares"}
      </Text>
      {isLoading ? (
        <View style={styles.emptyContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={filteredCities}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={<EmptyState query={searchQuery} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            filteredCities.length === 0 ? styles.emptyList : styles.list
          }
        />
      )}
    </View>
  );
}
