import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DeveloperCard from '../../components/DeveloperCard/DeveloperCard';
import styles from './styles';

const developers = [
  {
    name: 'Gabriel Botelho',
    photo: require('../../../assets/devs/gabriel.jpg'),
    github: 'https://github.com/Gabriel-Botz',
    linkedin: 'https://www.linkedin.com/in/gabriel-botelho-a0b71129b/',
  },
  {
    name: 'Elionardo Silva',
    photo: require('../../../assets/devs/elionardo.jpg'),
    github: 'https://github.com/elionardosantos',
    linkedin: 'https://www.linkedin.com/in/elionardo-s-santos/',
  },
  {
    name: 'Bernardo de Oliveira',
    photo: require('../../../assets/devs/bernardo.jpg'),
    github: 'https://github.com/lcamaraol',
    linkedin: 'https://www.linkedin.com/in/bernardo-da-silva-426ba0246/',
  },
  {
    name: 'Caio Vinícius Dias',
    photo: require('../../../assets/devs/caio.jpg'),
    github: 'https://github.com/dev-caiodias',
    linkedin: 'https://www.linkedin.com/in/caio-vin%C3%ADcius-dias-26052936b/',
  },
  {
    name: 'Valois Leite',
    photo: require('../../../assets/devs/valois.jpg'),
    github: 'https://github.com/Valois1961',
    linkedin: 'https://www.linkedin.com/in/valois-costa-203565355/',
  },
  {
    name: 'Wallace Ildefonso',
    photo: require('../../../assets/devs/wallace.jpg'),
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Marcelo Mayrinck',
    photo: require('../../../assets/devs/marcelo.jpg'),
    github: 'https://github.com/arrobateh',
    linkedin: 'https://www.linkedin.com/in/wallaceildefonso/',
  },
];

export default function InfoScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sobre</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Logo e título */}
      <View style={styles.logoBlock}>
        <MaterialIcons name="wb-sunny" size={48} color="#4F6EF7" />
        <Text style={styles.appName}>WeatherApp</Text>
        <Text style={styles.appSubtitle}>Desenvolvido por</Text>
      </View>

      {/* Lista de devs */}
      <ScrollView contentContainerStyle={styles.list}>
        {developers.map((dev, index) => (
          <DeveloperCard
            key={index}
            name={dev.name}
            photo={dev.photo}
            github={dev.github}
            linkedin={dev.linkedin}
          />
        ))}
      </ScrollView>

    </View>
  );
}