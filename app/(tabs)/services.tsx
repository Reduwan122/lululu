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
import {
  HeaderSettingsIcon,
  HeaderNotificationsIcon,
  HeaderSearchIcon,
  QuickFingerprintIcon,
  QuickUserCircleIcon,
  QuickAccidentCarIcon,
  IconUniversalAccess,
  IconCreditCard,
  IconGlobe,
  ChatDotsIcon,
} from '../../components/ExtractedIcons';

interface ServiceItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  route?: string;
}

const serviceList: ServiceItem[] = [
  { id: '1', label: 'Register Newborn', icon: IconUniversalAccess },
  { id: '2', label: 'Renew Driving License', icon: IconCreditCard, route: '/(tabs)/services' },
  { id: '3', label: 'Renew Resident ID', icon: IconCreditCard, route: '/(tabs)/services' },
  { id: '4', label: 'Authentication Services', icon: QuickFingerprintIcon },
  { id: '5', label: 'Update Resident Photo', icon: QuickUserCircleIcon, route: '/profile' },
  { id: '6', label: 'Report Minor Accident', icon: QuickAccidentCarIcon },
  { id: '7', label: 'Update Passport Information', icon: IconGlobe },
];

export default function ServicesScreen() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleServicePress = (service: ServiceItem) => {
    if (service.route) {
      router.push(service.route as any);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const filteredServices = serviceList.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#101412" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <View style={styles.headerTopRow}>
          <View style={{ flex: 1 }} />
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/settings')}>
              <HeaderSettingsIcon size={22} color="#23A365" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <HeaderNotificationsIcon size={22} color="#23A365" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>My Services</Text>

        <View style={styles.searchBar}>
          <HeaderSearchIcon size={20} color="#8E9590" />
          <TextInput
            placeholder="Search by Service..."
            placeholderTextColor="#7B8580"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <TouchableOpacity
                key={service.id}
                style={styles.gridCard}
                onPress={() => handleServicePress(service)}
                activeOpacity={0.8}
              >
                <IconComponent size={26} color="#23A365" />
                <Text style={styles.gridTitle}>{service.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Loading Modal */}
      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#23A365" />
            <Text style={{ color: '#FFFFFF', marginTop: 12, fontWeight: '600' }}>
              Loading service...
            </Text>
          </View>
        </View>
      </Modal>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <ChatDotsIcon size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#101412',
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
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#1E2320',
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridCard: {
    width: '48.5%',
    backgroundColor: '#191E1B',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    minHeight: 118,
    justifyContent: 'space-between',
  },
  gridTitle: {
    fontSize: 14.5,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 20,
    marginTop: 14,
  },
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingBox: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#191E1B',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 20,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#23A365',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});
