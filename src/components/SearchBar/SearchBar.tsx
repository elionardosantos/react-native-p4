import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface SearchBarProp {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
  editable?: boolean;
}

export default function SearchBar({
  value,
  onChangeText,
  onClear,
  placeholder = "Buscar cidade...",
  editable = true,
}: SearchBarProp) {
  const hasText = value && value.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={styles.lupa}>🔍</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          editable={editable}
        />
      </View>
    </View>
  );
}
