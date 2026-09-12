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
import { Ionicons } from '../../components/AppIcon';
import { useAppColors } from '../../hooks/useAppColors';

const preferredServices = [
  { label: 'Manage Appointments', icon: 'time-outline' },
  { label: 'Document Delivery', icon: 'cube-outline' },
];

const otherServices = [
  { label: 'Travel', icon: 'map-outline' },
  { label: 'Manage Authorizations', icon: 'checkbox-outline' },
  { label: 'Donate with Furijat', icon: 'heart-outline' },
  { label: 'Donate with Ehsan', icon: 'heart-outline' },
  { label: 'Manage Visit Visa', icon: 'document-text-outline' },
  { label: 'Service Activation Sites', icon: 'phone-portrait-outline' },
  { label: 'Manage Qabul Requests', icon: 'checkmark-done-outline' },
  { label: 'Birth Certificates Services', icon: 'body-outline', badge: true },
  { label: 'Death Certificates Services', icon: 'card-outline', badge: true },
  { label: 'Government Payments', icon: 'business-outline' },
  { label: 'Resident ID Requests', icon: 'card-outline' },
  { label: 'Border Number Inquiry', icon: 'card-outline' },
];

export default function OtherScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleAction = (_service: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  };

  const filtered = otherServices.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.bg}
      />

      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <View style={styles.headerTopRow}>
          <Text style={[styles.title, { color: colors.white }]}>Other Services</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/settings')}>
              <Ionicons name="settings-outline" size={22} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={22} color={colors.accent} />
            </TouchableOpacity>
          </View>
        </View>

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
        {/* Preferred Section */}
        <View style={[styles.preferredSection, { backgroundColor: colors.green }]}>
          <Text style={[styles.sectionTitle, { color: colors.onGreen }]}>
            Preferred Services
          </Text>
          <View style={styles.grid}>
            {preferredServices.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.gridCard, { backgroundColor: colors.card }]}
                onPress={() => handleAction(item)}
                activeOpacity={0.8}
              >
                <Ionicons name={item.icon as any} size={28} color={colors.accent} />
                <Text style={[styles.gridTitle, { color: colors.white }]}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* All Other Services */}
        <View style={styles.gridWrap}>
          <View style={styles.grid}>
            {filtered.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.gridCard, { backgroundColor: colors.card }]}
                onPress={() => handleAction(item)}
                activeOpacity={0.8}
              >
                {item.badge && (
                  <View style={styles.badgeWrap}>
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.accent }} />
                  </View>
                )}
                <Ionicons name={item.icon as any} size={28} color={colors.accent} />
                <Text style={[styles.gridTitle, { color: colors.white }]}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconBtn: {
    marginLeft: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
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
    paddingBottom: 32,
  },
  preferredSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  gridWrap: {
    paddingHorizontal: 16,
    paddingTop: 12,
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
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
  },
  badgeWrap: {
    position: 'absolute',
    top: 12,
    right: 12,
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
