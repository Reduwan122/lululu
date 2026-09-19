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
import {
  HeaderSearchIcon,
  HeaderSettingsIcon,
  HeaderNotificationsIcon,
  QuickVehiclesIcon,
  QuickFingerprintIcon,
  QuickTravelIcon,
  QuickAccidentCarIcon,
  QuickUserCircleIcon,
  QuickWeaponsIcon,
  ChatDotsIcon,
  SurveyChatIcon,
} from '../../components/ExtractedIcons';
import { useEmployee } from '../../context/EmployeeContext';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#D9EDE2" translucent={false} />

      <View style={styles.containerWrapper}>
        {/* Top Header Bar */}
        <View style={[styles.header, { paddingTop: Math.max(insets.top, 16) + 4 }]}>
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
            <TouchableOpacity
              style={styles.iconBtn}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <HeaderSearchIcon size={22} color="#1E6B4E" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push('/settings')}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <HeaderSettingsIcon size={22} color="#1E6B4E" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconBtn}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <HeaderNotificationsIcon size={22} color="#1E6B4E" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Main Top Content (User Card, Survey Banner, My Digital Documents) */}
          <View style={styles.topSection}>
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
                  <SurveyChatIcon
                    size={22}
                    color="#FFFFFF"
                    dotsColor="#175438"
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
          </View>

          {/* Quick Access Section (Mint Green Background #D9EDE2) */}
          <View style={styles.quickAccessSection}>
            <Text style={styles.quickAccessTitle}>Quick Access</Text>

            {/* 1. My Vehicles */}
            <TouchableOpacity
              style={styles.bigAccessCard}
              activeOpacity={0.85}
              onPress={() => router.push('/(tabs)/services')}
            >
              <View style={styles.accessIconBadge}>
                <QuickVehiclesIcon size={24} color="#1E6B4E" />
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
                <QuickFingerprintIcon size={26} color="#1E6B4E" />
                <Text style={styles.gridTitle}>Authentication{'\n'}Services</Text>
              </TouchableOpacity>

              {/* Absher Travel */}
              <TouchableOpacity
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/(tabs)/services')}
              >
                <QuickTravelIcon size={26} color="#1E6B4E" />
                <Text style={styles.gridTitle}>Absher Travel</Text>
              </TouchableOpacity>

              {/* Report Minor Accident */}
              <TouchableOpacity
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/(tabs)/services')}
              >
                <QuickAccidentCarIcon size={26} color="#1E6B4E" />
                <Text style={styles.gridTitle}>Report Minor{'\n'}Accident</Text>
              </TouchableOpacity>

              {/* Update Resident Photo */}
              <TouchableOpacity
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/profile')}
              >
                <QuickUserCircleIcon size={26} color="#1E6B4E" />
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
                <QuickWeaponsIcon size={26} color="#1E6B4E" />
              </View>
              <View style={styles.accessTextWrap}>
                <Text style={styles.accessTitle}>My Weapons</Text>
                <Text style={styles.accessSub}>
                  View weapons details, issue and view carry permits.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Floating Action Button (FAB) */}
        <TouchableOpacity
          style={styles.fab}
          activeOpacity={0.85}
          onPress={() => {}}
        >
          <ChatDotsIcon
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#D9EDE2',
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    backgroundColor: '#F4F6F5',
  },
  header: {
    backgroundColor: '#D9EDE2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 14,
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
    marginLeft: 12,
  },
  headerIconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 16,
    padding: 4,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  topSection: {
    paddingHorizontal: 16,
    backgroundColor: '#F4F6F5',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
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
    color: '#17211C',
    letterSpacing: -0.2,
  },
  profileSub: {
    fontSize: 13.5,
    color: '#5C6B64',
    marginTop: 3,
  },
  surveyBanner: {
    backgroundColor: '#BEE3D1',
    borderRadius: 14,
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
    borderRadius: 10,
    backgroundColor: '#175438',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  surveyContent: {
    flex: 1,
  },
  surveyTitle: {
    fontSize: 16.5,
    fontWeight: '700',
    color: '#17211C',
    letterSpacing: -0.2,
  },
  surveySub: {
    fontSize: 13.5,
    color: '#34473D',
    marginTop: 3,
    lineHeight: 18,
  },
  surveyCta: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  surveyCtaText: {
    color: '#175438',
    fontSize: 14.5,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#17211C',
    marginTop: 22,
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  digitalDocCard: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2.5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8ECE9',
  },
  iqamaCardImage: {
    width: '100%',
    height: 218,
  },
  quickAccessSection: {
    backgroundColor: '#D9EDE2',
    marginTop: 22,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  quickAccessTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#17211C',
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  bigAccessCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
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
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#E6F4ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessTextWrap: {
    flex: 1,
    marginLeft: 14,
  },
  accessTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#17211C',
  },
  accessSub: {
    fontSize: 13,
    color: '#5C6B64',
    marginTop: 2,
    lineHeight: 18,
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
    borderRadius: 14,
    padding: 16,
    minHeight: 114,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1.5,
  },
  gridTitle: {
    fontSize: 14.5,
    fontWeight: '600',
    color: '#17211C',
    lineHeight: 20,
    marginTop: 14,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#1E6B4E',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    elevation: 5,
  },
});
