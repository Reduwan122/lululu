import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAppColors } from '../../hooks/useAppColors';

const serviceList = [
  { label: 'Register Newborn', icon: 'body-outline' },
  { label: 'Renew Driving License', icon: 'card-outline' },
  { label: 'Renew Resident ID', icon: 'card-outline' },
  { label: 'Authentication Services', icon: 'finger-print-outline' },
  { label: 'Update Resident Photo', icon: 'person-circle-outline' },
  { label: 'Report Minor Accident', icon: 'car-sport-outline' },
  { label: 'Update Passport Information', icon: 'globe-outline' },
];

export default function ServicesScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleServicePress = (_service: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  };

  const filteredServices = serviceList.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.bg}
      />

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <View style={styles.headerTopRow}>
          <View style={{ flex: 1 }} />
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/settings')}>
              <Ionicons name="settings-outline" size={22} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={22} color={colors.accent} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[styles.title, { color: colors.white }]}>Services</Text>

        <View style={[styles.searchBar, { backgroundColor: colors.cardAlt }]}>
          <Ionicons name="search" size={20} color={colors.greyText} />
          <TextInput
            placeholder="Search by Service..."
            placeholderTextColor={colors.greyText}
            style={[styles.searchInput, { color: colors.white }]}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {filteredServices.map((service, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.gridCard, { backgroundColor: colors.card }]}
              onPress={() => handleServicePress(service)}
              activeOpacity={0.8}
            >
              <Ionicons name={service.icon as any} size={28} color={colors.accent} />
              <Text style={[styles.gridTitle, { color: colors.white }]}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Loading Modal */}
      <Modal visible={loading} transparent animationType="fade">
        <View style={[styles.loadingOverlay, { backgroundColor: colors.overlay }]}>
          <View style={[styles.loadingBox, { backgroundColor: colors.card }]}>
            <ActivityIndicator size="large" color={colors.accent} />
            <Text style={{ color: colors.white, marginTop: 12, fontWeight: '600' }}>
              Loading service...
            </Text>
          </View>
        </View>
      </Modal>

      {/* FAB */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.accent }]}
        activeOpacity={0.8}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={26} color="#FFFFFF" />
      </TouchableOpacity>
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
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconBtn: {
    marginLeft: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridCard: {
    width: '48.5%',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  loadingOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingBox: {
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
});
