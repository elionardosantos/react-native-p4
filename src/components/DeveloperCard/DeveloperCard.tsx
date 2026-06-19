import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './styles';

interface DeveloperCardProps {
  name: string;
  photo: any;
  github: string;
  linkedin: string;
}

export default function DeveloperCard({ name, photo, github, linkedin }: DeveloperCardProps) {
  return (
    <View style={styles.card}>
      <Image source={photo} style={styles.avatar} />
      <View style={styles.cardInfo}>
        <Text style={styles.devName}>{name}</Text>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(github)}>
            <FontAwesome name="github" size={16} color="#FFFFFF" />
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(linkedin)}>
            <FontAwesome name="linkedin-square" size={16} color="#0077B5" />
            <Text style={styles.linkText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}