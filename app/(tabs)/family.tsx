import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
  HeaderSettingsIcon,
  HeaderNotificationsIcon,
  HeaderSearchIcon,
  IconEmptyPeople,
  ChatDotsIcon,
} from '../../components/ExtractedIcons';

export default function FamilyScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');

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

        <Text style={styles.title}>Family</Text>

        <View style={styles.searchBar}>
          <HeaderSearchIcon size={20} color="#8E9590" />
          <TextInput
            placeholder="Search by name, ID"
            placeholderTextColor="#7B8580"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Empty State Centered */}
      <View style={styles.emptyContainer}>
        <IconEmptyPeople size={68} color="#8E9590" />
        <Text style={styles.emptyTitle}>No Family Members</Text>
        <Text style={styles.emptySub}>
          Once you have family members, they will display here.
        </Text>
      </View>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <ChatDotsIcon size={28} color="#FFFFFF" />
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
  emptyContainer: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
  emptySub: {
    fontSize: 14,
    color: '#8E9590',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 20,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#1E6B4E',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});
