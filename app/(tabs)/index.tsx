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
      <StatusBar barStyle="dark-content" backgroundColor="#D9EDE2" />

      {/* Top Header Bar */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        {/* Left Official Logos */}
        <View style={styles.headerLogos}>
          <Image
            source={require('../../assets/icons/logo1.png')}
            style={styles.logoAbsher}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/icons/logo2.png')}
            style={styles.logoEmblem}
            resizeMode="contain"
          />
        </View>

        {/* Right Action Icons (Search, Settings, Notifications) */}
        <View style={styles.headerIconsRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <AppIcon name="search-outline" size={22} color="#1E6B4E" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push('/settings')}
            activeOpacity={0.7}
          >
            <AppIcon name="settings-outline" size={22} color="#1E6B4E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <AppIcon name="notifications-outline" size={22} color="#1E6B4E" />
          </TouchableOpacity>
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
          <Image
            source={
              employee?.photo_url
                ? { uri: employee.photo_url }
                : require('../../assets/images/profile_user.png')
            }
            style={styles.avatarImage}
            resizeMode="cover"
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {employee?.full_name || 'MD SUMON MIA'}
            </Text>
            <Text style={styles.profileSub}>
              ID No.: {employee?.id_number || '2631567092'}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Take a Quick Survey Banner */}
        <View style={styles.surveyBanner}>
          <View style={styles.surveyTopRow}>
            <View style={styles.surveyIconWrap}>
              <AppIcon
                name="chatbubble-ellipses-outline"
                size={20}
                color="#FFFFFF"
              />
            </View>
            <View style={styles.surveyContent}>
              <Text style={styles.surveyTitle}>Take a Quick Survey</Text>
              <Text style={styles.surveySub}>
                Share your experience to help us improve.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.surveyCta} activeOpacity={0.7}>
            <Text style={styles.surveyCtaText}>Start Survey</Text>
          </TouchableOpacity>
        </View>

        {/* My Digital Documents Section */}
        <Text style={styles.sectionTitle}>My Digital Documents</Text>
        <TouchableOpacity
          style={styles.digitalDocCard}
          activeOpacity={0.9}
          onPress={() => router.push('/digital-documents')}
        >
          <Image
            source={
              employee?.id_card_image_url
                ? { uri: employee.id_card_image_url }
                : require('../../assets/extracted/iqama_card_full.png')
            }
            style={styles.iqamaCardImage}
            resizeMode="cover"
          />
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
            <AppIcon name="car-outline" size={24} color="#1E6B4E" />
          </View>
          <View style={styles.accessTextWrap}>
            <Text style={styles.accessTitle}>My Vehicles</Text>
            <Text style={styles.accessSub}>
              View details, renew documents, report accidents, and much more.
            </Text>
          </View>
        </TouchableOpacity>

        {/* 2x2 Grid */}
        <View style={styles.gridContainer}>
          {/* Authentication Services */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/services')}
          >
            <AppIcon name="finger-print-outline" size={26} color="#1E6B4E" />
            <Text style={styles.gridTitle}>Authentication{'\n'}Services</Text>
          </TouchableOpacity>

          {/* Absher Travel */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/services')}
          >
            <AppIcon name="map-outline" size={26} color="#1E6B4E" />
            <Text style={styles.gridTitle}>Absher Travel</Text>
          </TouchableOpacity>

          {/* Report Minor Accident */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/services')}
          >
            <AppIcon name="car-emergency" size={26} color="#1E6B4E" />
            <Text style={styles.gridTitle}>Report Minor{'\n'}Accident</Text>
          </TouchableOpacity>

          {/* Update Resident Photo */}
          <TouchableOpacity
            style={styles.gridCard}
            activeOpacity={0.85}
            onPress={() => router.push('/profile')}
          >
            <AppIcon name="person-circle-outline" size={26} color="#1E6B4E" />
            <Text style={styles.gridTitle}>Update Resident{'\n'}Photo</Text>
          </TouchableOpacity>
        </View>

        {/* 2. My Weapons */}
        <TouchableOpacity
          style={styles.bigAccessCard}
          activeOpacity={0.85}
          onPress={() => router.push('/(tabs)/services')}
        >
          <View style={styles.accessIconBadge}>
            <AppIcon name="pistol-outline" size={24} color="#1E6B4E" />
          </View>
          <View style={styles.accessTextWrap}>
            <Text style={styles.accessTitle}>My Weapons</Text>
            <Text style={styles.accessSub}>
              View weapons details, issue and view carry permits.
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.85}
        onPress={() => {}}
      >
        <AppIcon
          name="chatbubble-ellipses-outline"
          size={24}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#D9EDE2',
  },
  header: {
    backgroundColor: '#D9EDE2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerLogos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoAbsher: {
    width: 32,
    height: 44,
  },
  logoEmblem: {
    width: 44,
    height: 44,
    marginLeft: 10,
  },
  headerIconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 14,
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 36,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  profileInfo: {
    marginLeft: 14,
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#14200D',
    letterSpacing: -0.2,
  },
  profileSub: {
    fontSize: 13,
    color: '#5C6B62',
    marginTop: 4,
  },
  surveyBanner: {
    backgroundColor: '#CCE8D8',
    borderRadius: 16,
    marginTop: 14,
    padding: 16,
  },
  surveyTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  surveyIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#1E6B4E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  surveyContent: {
    flex: 1,
  },
  surveyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#14200D',
  },
  surveySub: {
    fontSize: 13,
    color: '#4E5F55',
    marginTop: 4,
    lineHeight: 18,
  },
  surveyCta: {
    alignSelf: 'flex-end',
    marginTop: 6,
  },
  surveyCtaText: {
    color: '#1E6B4E',
    fontSize: 15,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14200D',
    marginTop: 20,
    marginBottom: 12,
    letterSpacing: -0.2,
  },
  digitalDocCard: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: '#FFFFFF',
  },
  iqamaCardImage: {
    width: '100%',
    height: 220,
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
    color: '#14200D',
  },
  accessSub: {
    fontSize: 12,
    color: '#5C6B62',
    marginTop: 3,
    lineHeight: 16,
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
    color: '#14200D',
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
    backgroundColor: '#1E6B4E',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
});
