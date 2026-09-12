import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '../../components/AppIcon';
import { useAppColors } from '../../hooks/useAppColors';

const myDocuments = [
  { id: '1', name: 'National ID Card', type: 'Identity', icon: 'card' },
  { id: '2', name: 'Passport', type: 'Identity', icon: 'airplane' },
  { id: '3', name: 'Driving License', type: 'License', icon: 'car' },
  { id: '4', name: 'Birth Certificate', type: 'Certificate', icon: 'document-text' },
];

export default function DocumentsScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.greenDark}
      />

      <View style={[styles.header, { backgroundColor: colors.green, paddingTop: insets.top + 12 }]}>
        <Text style={[styles.headerTitle, { color: colors.onGreen }]}>My Documents</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {myDocuments.map((doc) => (
          <TouchableOpacity
            key={doc.id}
            style={[styles.card, { backgroundColor: colors.card }]}
            onPress={() => router.push(`/document/${doc.id}`)}
          >
            <View style={[styles.iconWrap, { backgroundColor: colors.cardAlt }]}>
              <Ionicons name={doc.icon as any} size={24} color={colors.accent} />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={[styles.cardTitle, { color: colors.white }]}>{doc.name}</Text>
              <Text style={[styles.cardSub, { color: colors.greyText }]}>{doc.type}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.greyText} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardSub: {
    fontSize: 12,
    marginTop: 2,
  },
});
