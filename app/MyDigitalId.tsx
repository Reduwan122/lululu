import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useEmployee } from '../context/EmployeeContext';

export default function MyDigitalId() {
  const { employee } = useEmployee();

  const profileUrl = employee?.id_profile_image_url || employee?.photo_url || null;
  const cardUrl = employee?.id_card_image_url || null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Profile Picture</Text>
      <Image
        source={
          profileUrl
            ? { uri: profileUrl }
            : require('../assets/images/profile_user.png')
        }
        style={styles.profileImage}
        resizeMode="cover"
      />

      <Text style={[styles.label, { marginTop: 24 }]}>Digital ID Card</Text>
      <Image
        source={
          cardUrl
            ? { uri: cardUrl }
            : require('../assets/images/iqama_card.png')
        }
        style={styles.cardImage}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#14200D',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EEE',
  },
  cardImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },
  emptyText: {
    color: '#8A9690',
    fontSize: 14,
    marginVertical: 10,
  },
});
