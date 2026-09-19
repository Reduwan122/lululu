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
import { router } from 'expo-router';
import { AppIcon } from '../../components/AppIcon';
import { useEmployee } from '../../context/EmployeeContext';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#D8ECE0" />

      {/* Top Header with Soft Mint Background and Rounded Bottom Corners */}
      <View style={[styles.headerContainer, { paddingTop: insets.top + 8 }]}>
        <View style={styles.headerRow}>
          {/* Left Header Action Icons */}
          <View style={styles.headerIconsLeft}>
            <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
              <AppIcon name="tune-vertical" size={24} color="#166444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
              <AppIcon name="globe-outline" size={24} color="#166444" />
            </TouchableOpacity>
          </View>

          {/* Right Header Action Icons */}
          <View style={styles.headerIconsRight}>
            <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
              <AppIcon name="notifications-outline" size={24} color="#166444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
              <AppIcon name="search-outline" size={24} color="#166444" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* User Profile Card */}
        <TouchableOpacity
          style={styles.profileCard}
          onPress={() => router.push('/profile')}
          activeOpacity={0.85}
        >
          <View style={styles.avatarWrap}>
            {employee?.photo_url ? (
              <Image
                source={{ uri: employee.photo_url }}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            ) : (
              <AppIcon name="person-outline" size={26} color="#8C9991" />
            )}
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {employee?.full_name || 'Mohammed Al-Otaibi'}
            </Text>
            <Text style={styles.profileId}>
              {employee?.id_number || '1083920194'}
            </Text>
          </View>

          <AppIcon name="chevron-forward" size={20} color="#8C9991" />
        </TouchableOpacity>

        {/* Take a Quick Survey Banner */}
        <View style={styles.surveyBanner}>
          <View style={styles.surveyIconWrap}>
            <AppIcon name="chatbubble-outline" size={22} color="#FFFFFF" />
          </View>
          <View style={styles.surveyContent}>
            <Text style={styles.surveyTitle}>Take a Quick Survey</Text>
            <Text style={styles.surveySub}>
              Share your experience with Absher services
            </Text>
            <TouchableOpacity style={styles.surveyButton} activeOpacity={0.85}>
              <Text style={styles.surveyButtonText}>Start Survey</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* My Digital Documents Section */}
        <Text style={styles.sectionTitle}>My Digital Documents</Text>
        <TouchableOpacity
          style={styles.documentsCard}
          activeOpacity={0.85}
          onPress={() => router.push('/digital-documents')}
        >
          <AppIcon name="card-outline" size={48} color="#166444" />
          <Text style={styles.documentsCardText}>
            View Digital ID & Verification
          </Text>
        </TouchableOpacity>

        {/* Quick Access Section */}
        <Text style={styles.sectionTitle}>Quick Access</Text>

        {/* 1. My Vehicles */}
        <TouchableOpacity
          style={styles.bigAccessCard}
          activeOpacity={0.85}
          onPress={() => router.push('/(tabs)/services')}
        >
          <View style={styles.accessIconBadge}>
            <AppIcon name="car-outline" size={24} color="#166444" />
          </View>
          <View style={styles.accessTextWrap}>
            <Text style={styles.accessTitle}>My Vehicles</Text>
            <Text style={styles.accessSub}>
              View details, renew registration & more
            </Text>
          </View>
          <AppIcon name="chevron-forward" size={20} color="#8C9991" />
        </TouchableOpacity>

        {/* 2x2 Grid */}
        <View style={styles.gridContainer}>
          {/* Authentication Services */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/services')}
          >
            <AppIcon name="finger-print-outline" size={28} color="#166444" />
            <Text style={styles.gridTitle}>Authentication Services</Text>
          </TouchableOpacity>

          {/* Absher Travel */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/services')}
          >
            <AppIcon name="airplane-outline" size={28} color="#166444" />
            <Text style={styles.gridTitle}>Absher Travel</Text>
          </TouchableOpacity>

          {/* Report Minor Accidents */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/services')}
          >
            <AppIcon name="alert-circle-outline" size={28} color="#166444" />
            <Text style={styles.gridTitle}>Report Minor Accidents</Text>
          </TouchableOpacity>

          {/* Update Resident Profile */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/profile')}
          >
            <AppIcon name="account-circle-outline" size={28} color="#166444" />
            <Text style={styles.gridTitle}>Update Resident Profile</Text>
          </TouchableOpacity>
        </View>

        {/* 2. My Weapons */}
        <TouchableOpacity
          style={styles.bigAccessCard}
          activeOpacity={0.85}
          onPress={() => router.push('/(tabs)/services')}
        >
          <View style={styles.accessIconBadge}>
            <AppIcon name="shield-outline" size={24} color="#166444" />
          </View>
          <View style={styles.accessTextWrap}>
            <Text style={styles.accessTitle}>My Weapons</Text>
            <Text style={styles.accessSub}>
              View weapons details & licenses
            </Text>
          </View>
          <AppIcon name="chevron-forward" size={20} color="#8C9991" />
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Action Button (FAB) for Chat / Help */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.85}
        onPress={() => {}}
      >
        <AppIcon name="chatbubble-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F3F6F4',
  },
  headerContainer: {
    backgroundColor: '#D8ECE0',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerIconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerIconBtn: {
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EDF2EE',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#18251C',
    letterSpacing: -0.2,
  },
  profileId: {
    fontSize: 14,
    color: '#707C74',
    marginTop: 3,
  },
  surveyBanner: {
    backgroundColor: '#166444',
    borderRadius: 16,
    marginTop: 14,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  surveyIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    marginTop: 2,
  },
  surveyContent: {
    flex: 1,
  },
  surveyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  surveySub: {
    fontSize: 13,
    color: '#E0EDE5',
    marginTop: 4,
    lineHeight: 18,
  },
  surveyButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  surveyButtonText: {
    color: '#166444',
    fontSize: 13,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#18251C',
    marginTop: 24,
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  documentsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 36,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  documentsCardText: {
    color: '#166444',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 14,
  },
  bigAccessCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  accessIconBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#EAF4EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessTextWrap: {
    flex: 1,
    marginLeft: 14,
  },
  accessTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#18251C',
  },
  accessSub: {
    fontSize: 12,
    color: '#707C74',
    marginTop: 3,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 12,
    rowGap: 12,
  },
  gridCard: {
    width: '48.2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    minHeight: 104,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#18251C',
    lineHeight: 18,
    marginTop: 14,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#166444',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
});
