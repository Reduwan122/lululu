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
import { Ionicons, AppIcon } from '../../components/AppIcon';
import { useEmployee } from '../../context/EmployeeContext';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.headerBg} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
          <View style={styles.headerIconsLeft}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/settings')}>
              <AppIcon name="options-outline" size={24} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <AppIcon name="globe-outline" size={24} color={colors.accent} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerIconsRight}>
            <TouchableOpacity style={styles.iconBtn}>
              <AppIcon name="notifications-outline" size={24} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <AppIcon name="search-outline" size={24} color={colors.accent} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Card */}
        <TouchableOpacity
          style={styles.profileCard}
          onPress={() => router.push('/profile')}
          activeOpacity={0.8}
        >
          {employee?.photo_url ? (
            <Image source={{ uri: employee.photo_url }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={28} color={colors.greyText} />
            </View>
          )}
          <View style={{ flex: 1, marginLeft: 14 }}>
            <Text style={styles.profileName}>{employee?.full_name || 'Your Name'}</Text>
            <Text style={styles.profileSub}>{employee?.id_number || '-'}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.greyText} />
        </TouchableOpacity>

        {/* Banner: Take a Quick Survey */}
        <View style={styles.banner}>
          <View style={styles.bannerIconWrap}>
            <AppIcon name="chatbubble-ellipses-outline" size={22} color="#FFFFFF" />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.bannerTitle}>Take a Quick Survey</Text>
            <Text style={styles.bannerSub}>Share your experience with Absher services</Text>
            <TouchableOpacity style={styles.bannerCta}>
              <Text style={styles.bannerCtaText}>Start Survey</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* My Digital Documents Preview */}
        <Text style={styles.sectionTitle}>My Digital Documents</Text>
        <TouchableOpacity
          style={styles.documentsBox}
          activeOpacity={0.85}
          onPress={() => router.push('/digital-documents')}
        >
          {employee?.id_card_image_url ? (
            <Image
              source={{ uri: employee.id_card_image_url }}
              style={styles.documentsPreview}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.documentsPlaceholder}>
              <AppIcon name="card-outline" size={48} color={colors.accent} />
              <Text style={styles.documentsPlaceholderText}>View Digital ID & Verification</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Quick Access */}
        <View style={styles.quickAccessHeader}>
          <Text style={styles.sectionTitleDark}>Quick Access</Text>
        </View>

        <View style={styles.quickAccessBody}>
          {/* Big Card 1: My Vehicles */}
          <TouchableOpacity style={styles.bigCard} activeOpacity={0.8}>
            <View style={styles.quickIconWrap}>
              <AppIcon name="car-outline" size={26} color={colors.accent} />
            </View>
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.quickTitle}>My Vehicles</Text>
              <Text style={styles.quickSub}>View details, renew registration & more</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.greyText} />
          </TouchableOpacity>

          {/* Grid Cards */}
          <View style={styles.grid}>
            <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
              <AppIcon name="finger-print-outline" size={26} color={colors.accent} />
              <Text style={styles.gridTitle}>Authentication Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
              <AppIcon name="airplane-outline" size={26} color={colors.accent} />
              <Text style={styles.gridTitle}>Absher Travel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
              <AppIcon name="alert-circle-outline" size={26} color={colors.accent} />
              <Text style={styles.gridTitle}>Report Minor Accidents</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
              <AppIcon name="person-circle-outline" size={26} color={colors.accent} />
              <Text style={styles.gridTitle}>Update Resident Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Big Card 2: My Weapons */}
          <TouchableOpacity style={styles.bigCard} activeOpacity={0.8}>
            <View style={styles.quickIconWrap}>
              <AppIcon name="shield-outline" size={26} color={colors.accent} />
            </View>
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.quickTitle}>My Weapons</Text>
              <Text style={styles.quickSub}>View weapons details & licenses</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.greyText} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <AppIcon name="chatbubble-outline" size={26} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const colors = {
  bg: '#F4F6F5',
  headerBg: '#D9EDE2',
  card: '#FFFFFF',
  textDark: '#14200D',
  greyText: '#5C6B62',
  bannerBg: '#1E6B4E',
  accent: '#1E6B4E',
  border: '#DDE3DF',
  quickAccessBg: '#FFFFFF',
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: colors.headerBg,
    paddingHorizontal: 20,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerIconsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    padding: 6,
    marginRight: 8,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  avatarPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#EDF2EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    color: colors.textDark,
    fontSize: 17,
    fontWeight: '700',
  },
  profileSub: {
    color: colors.greyText,
    fontSize: 13,
    marginTop: 3,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: colors.bannerBg,
    marginHorizontal: 16,
    marginTop: 14,
    padding: 16,
    borderRadius: 16,
  },
  bannerIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  bannerSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 8,
  },
  bannerCta: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },
  bannerCtaText: {
    color: colors.bannerBg,
    fontSize: 12,
    fontWeight: '700',
  },
  sectionTitle: {
    color: colors.textDark,
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  documentsBox: {
    backgroundColor: colors.card,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  documentsPreview: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  documentsPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  documentsPlaceholderText: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  quickAccessHeader: {
    marginHorizontal: 16,
    marginTop: 22,
    marginBottom: 10,
  },
  sectionTitleDark: {
    color: colors.textDark,
    fontSize: 18,
    fontWeight: '700',
  },
  quickAccessBody: {
    marginHorizontal: 16,
  },
  bigCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  quickIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDF2EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickTitle: {
    color: colors.textDark,
    fontSize: 15,
    fontWeight: '700',
  },
  quickSub: {
    color: colors.greyText,
    fontSize: 12,
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  gridCard: {
    width: '48.5%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  gridTitle: {
    color: colors.textDark,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
