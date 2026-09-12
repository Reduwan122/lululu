import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { Ionicons } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';
import { useAppColors } from '../hooks/useAppColors';

export default function ProfileScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.greenDark}
      />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={[styles.header, { backgroundColor: colors.green, paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.onGreen} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.onGreen }]}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: colors.card }]}>
          {employee?.photo_url ? (
            <Image source={{ uri: employee.photo_url }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, { backgroundColor: colors.cardAlt }]}>
              <Ionicons name="person" size={32} color={colors.greyText} />
            </View>
          )}
          <Text style={[styles.name, { color: colors.white }]}>
            {employee?.full_name || 'Your Name'}
          </Text>
          <View style={styles.idRow}>
            <Text style={[styles.idText, { color: colors.greyText }]}>
              {employee?.id_number ? `ID: ${employee.id_number}` : '-'}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.detailsLink}
            onPress={() => router.push('/personal-details')}
          >
            <Text style={[styles.detailsLinkText, { color: colors.accent }]}>
              Personal Details
            </Text>
            <Ionicons name="chevron-forward" size={16} color={colors.accent} />
          </TouchableOpacity>
        </View>

        {/* Half Cards Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.halfCard, { backgroundColor: colors.card }]}
            onPress={() => router.push('/passport')}
            activeOpacity={0.8}
          >
            <Ionicons name="airplane-outline" size={28} color={colors.accent} />
            <Text style={[styles.cardLabel, { color: colors.white }]}>Passport</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.halfCard, { backgroundColor: colors.card }]}
            onPress={() => router.push('/resident-id')}
            activeOpacity={0.8}
          >
            <Ionicons name="card-outline" size={28} color={colors.accent} />
            <Text style={[styles.cardLabel, { color: colors.white }]}>Resident ID</Text>
          </TouchableOpacity>
        </View>

        {/* List Card */}
        <View style={[styles.listCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity
            style={styles.listRow}
            onPress={() => router.push('/driving-license')}
          >
            <Ionicons name="car-outline" size={24} color={colors.accent} />
            <Text style={[styles.listLabel, { color: colors.white }]}>Driving License</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.greyText} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <TouchableOpacity
            style={styles.listRow}
            onPress={() => router.push('/visa')}
          >
            <Ionicons name="document-text-outline" size={24} color={colors.accent} />
            <Text style={[styles.listLabel, { color: colors.white }]}>Visa</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.greyText} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <TouchableOpacity
            style={styles.listRow}
            onPress={() => router.push('/labor-importations')}
          >
            <Ionicons name="people-outline" size={24} color={colors.accent} />
            <Text style={[styles.listLabel, { color: colors.white }]}>Labor Importations</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.greyText} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>

        {/* Travel Eligibility Banner */}
        <View style={[styles.travelBanner, { backgroundColor: colors.green }]}>
          <View style={[styles.tagPill, { backgroundColor: colors.overlay }]}>
            <Text style={[styles.tagText, { color: colors.onGreen }]}>Active</Text>
          </View>
          <Text style={[styles.travelTitle, { color: colors.onGreen }]}>
            Travel Eligibility
          </Text>
          <Text style={styles.travelSub}>
            {employee?.travel_status || 'Eligible to travel internationally'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 16,
  },
  profileCard: {
    marginTop: -14,
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  idRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  idText: {
    fontSize: 13,
  },
  detailsLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  detailsLinkText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  halfCard: {
    width: '48.5%',
    borderRadius: 14,
    padding: 16,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
  },
  listCard: {
    borderRadius: 14,
    marginHorizontal: 16,
    marginTop: 14,
    paddingHorizontal: 16,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  listLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 12,
  },
  divider: {
    height: 1,
  },
  travelBanner: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    padding: 20,
    minHeight: 120,
    justifyContent: 'flex-end',
  },
  tagPill: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  travelTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  travelSub: {
    color: '#DCEAE3',
    fontSize: 13,
    marginTop: 4,
  },
});
