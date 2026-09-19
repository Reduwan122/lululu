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
  QuickTravelIcon,
  IconClock,
  IconCube,
  IconSquareCheck,
  IconHeart,
  IconFileLines,
  IconMobileScreen,
  IconCheckDouble,
  IconUniversalAccess,
  IconCreditCard,
  IconBuilding,
  IconLayerGroup,
  IconPencil,
  ChatDotsIcon,
} from '../../components/ExtractedIcons';

interface OtherServiceItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  hasStackBadge?: boolean;
}

const preferredServices: OtherServiceItem[] = [
  { id: 'pref-1', label: 'Manage Appointments', icon: IconClock },
  { id: 'pref-2', label: 'Document Delivery', icon: IconCube },
];

const otherServices: OtherServiceItem[] = [
  { id: 'oth-1', label: 'Travel', icon: QuickTravelIcon },
  { id: 'oth-2', label: 'Manage Authorizations', icon: IconSquareCheck },
  { id: 'oth-3', label: 'Donate with Furijat', icon: IconHeart },
  { id: 'oth-4', label: 'Donate with Ehsan', icon: IconHeart },
  { id: 'oth-5', label: 'Manage Visit Visa', icon: IconFileLines },
  { id: 'oth-6', label: 'Service Activation Sites', icon: IconMobileScreen },
  { id: 'oth-7', label: 'Manage Qabul Requests', icon: IconCheckDouble },
  { id: 'oth-8', label: 'Birth Certificates Services', icon: IconUniversalAccess, hasStackBadge: true },
  { id: 'oth-9', label: 'Death Certificates Services', icon: IconCreditCard, hasStackBadge: true },
  { id: 'oth-10', label: 'Government Payments', icon: IconBuilding },
  { id: 'oth-11', label: 'Resident ID Requests', icon: IconCreditCard },
  { id: 'oth-12', label: 'Border Number Inquiry', icon: IconCreditCard },
];

export default function OtherScreen() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleAction = (_item: OtherServiceItem) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const filteredOther = otherServices.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#101412" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <View style={styles.headerTopRow}>
          <Text style={styles.title}>Other Services</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/settings')}>
              <HeaderSettingsIcon size={22} color="#23A365" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <HeaderNotificationsIcon size={22} color="#23A365" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchBar}>
          <HeaderSearchIcon size={20} color="#8E9590" />
          <TextInput
            placeholder="Search by Service"
            placeholderTextColor="#7B8580"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Preferred Services Section */}
        {search === '' && (
          <View style={styles.preferredSection}>
            <Text style={styles.preferredTitle}>Preferred Services</Text>
            <View style={styles.grid}>
              {preferredServices.map((item) => {
                const IconComponent = item.icon;
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.gridCard}
                    onPress={() => handleAction(item)}
                    activeOpacity={0.8}
                  >
                    <IconComponent size={26} color="#23A365" />
                    <Text style={styles.gridTitle}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {/* Other Services Grid */}
        <View style={styles.grid}>
          {filteredOther.map((item) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.gridCard}
                onPress={() => handleAction(item)}
                activeOpacity={0.8}
              >
                <View style={styles.cardTopRow}>
                  <IconComponent size={26} color="#23A365" />
                  {item.hasStackBadge && (
                    <IconLayerGroup size={18} color="#8E9590" />
                  )}
                </View>
                <Text style={styles.gridTitle}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Personalise Space link */}
        <TouchableOpacity style={styles.personaliseRow} activeOpacity={0.7}>
          <IconPencil size={16} color="#23A365" />
          <Text style={styles.personaliseText}>Personalise Space</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    marginBottom: 16,
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
    paddingBottom: 40,
  },
  preferredSection: {
    backgroundColor: '#175438',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  preferredTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 14,
    letterSpacing: -0.2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridTitle: {
    fontSize: 14.5,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 20,
    marginTop: 14,
  },
  personaliseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 24,
    gap: 8,
  },
  personaliseText: {
    color: '#23A365',
    fontSize: 14.5,
    fontWeight: '600',
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
