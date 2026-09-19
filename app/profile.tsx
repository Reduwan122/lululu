import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Clipboard,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { useEmployee } from '../context/EmployeeContext';
import {
  IconArrowBack,
  IconCopy,
  IconChevronForward,
  IconGlobe,
  IconCreditCard,
  IconFileLines,
  IconEmptyPeople,
} from '../components/ExtractedIcons';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();
  const [copied, setCopied] = useState(false);

  const idNumber = employee?.id_number || '2631567092';
  const fullName = employee?.full_name || 'MD SUMON MIA';

  const handleCopyId = () => {
    Clipboard.setString(idNumber);
    setCopied(true);
    if (Platform.OS === 'android') {
      ToastAndroid.show('ID copied to clipboard', ToastAndroid.SHORT);
    } else {
      Alert.alert('Copied', 'ID copied to clipboard');
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#175438" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* 1. Header (Emerald Green matching media_1789850159118.png) */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <IconArrowBack size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Top Profile Summary Card */}
        <View style={styles.profileCard}>
          <Image
            source={
              employee?.photo_url
                ? { uri: employee.photo_url }
                : require('../assets/images/profile_user.png')
            }
            style={styles.avatar}
            resizeMode="cover"
          />

          <Text style={styles.name}>{fullName}</Text>

          <TouchableOpacity
            style={styles.idRow}
            onPress={handleCopyId}
            activeOpacity={0.7}
          >
            <Text style={styles.idText}>ID No. {idNumber}</Text>
            <View style={styles.copyIconWrap}>
              <IconCopy size={16} color={copied ? '#23A365' : '#8E9590'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.detailsLink}
            onPress={() => router.push('/personal-details')}
            activeOpacity={0.7}
          >
            <Text style={styles.detailsLinkText}>My Personal Details</Text>
            <IconChevronForward size={14} color="#23A365" />
          </TouchableOpacity>
        </View>

        {/* 3. Two-Column Grid: My Passport & My Resident ID */}
        <View style={styles.gridRow}>
          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => router.push('/passport')}
            activeOpacity={0.8}
          >
            <IconGlobe size={28} color="#23A365" />
            <Text style={styles.gridTitle}>My Passport</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => router.push('/resident-id')}
            activeOpacity={0.8}
          >
            <IconCreditCard size={28} color="#23A365" />
            <Text style={styles.gridTitle}>My Resident ID</Text>
          </TouchableOpacity>
        </View>

        {/* 4. Full-Width Stacked Card: My Visa & My Driving License */}
        <View style={styles.stackedCard}>
          <TouchableOpacity
            style={styles.stackedRow}
            onPress={() => router.push('/visa')}
            activeOpacity={0.8}
          >
            <IconFileLines size={24} color="#23A365" />
            <Text style={styles.stackedTitle}>My Visa</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.stackedRow}
            onPress={() => router.push('/driving-license')}
            activeOpacity={0.8}
          >
            <IconCreditCard size={24} color="#23A365" />
            <Text style={styles.stackedTitle}>My Driving License</Text>
          </TouchableOpacity>
        </View>

        {/* 5. Large Emerald Green Travel Card: My Travel Records */}
        <TouchableOpacity
          style={styles.travelCard}
          onPress={() => router.push('/personal-details')}
          activeOpacity={0.85}
        >
          <View style={styles.travelBadge}>
            <Text style={styles.travelBadgeText}>Inside Kingdom</Text>
          </View>
          <Text style={styles.travelTitle}>My Travel Records</Text>
          <Text style={styles.travelSubtitle}>Find your last trips details</Text>
        </TouchableOpacity>

        {/* 6. Full-Width Card: Labor Importations */}
        <View style={styles.stackedCard}>
          <TouchableOpacity
            style={styles.stackedRow}
            onPress={() => router.push('/labor-importations')}
            activeOpacity={0.8}
          >
            <IconEmptyPeople size={24} color="#23A365" />
            <Text style={styles.stackedTitle}>Labor Importations</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#101412',
  },
  header: {
    backgroundColor: '#175438',
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  profileCard: {
    backgroundColor: '#191E1B',
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 14,
    backgroundColor: '#2A332E',
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    marginTop: 14,
  },
  idRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  idText: {
    fontSize: 14.5,
    color: '#8E9590',
    fontWeight: '400',
  },
  copyIconWrap: {
    marginLeft: 6,
    padding: 2,
  },
  detailsLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  detailsLinkText: {
    fontSize: 14.5,
    fontWeight: '600',
    color: '#23A365',
    marginRight: 4,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gridCard: {
    width: '48.5%',
    backgroundColor: '#191E1B',
    borderRadius: 16,
    padding: 16,
    minHeight: 110,
    justifyContent: 'space-between',
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 16,
    letterSpacing: -0.2,
  },
  stackedCard: {
    backgroundColor: '#191E1B',
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  stackedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  stackedTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 16,
    letterSpacing: -0.2,
  },
  divider: {
    height: 1,
    backgroundColor: '#232A26',
    marginHorizontal: 16,
  },
  travelCard: {
    backgroundColor: '#175438',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },
  travelBadge: {
    alignSelf: 'flex-end',
    backgroundColor: '#0E3824',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  travelBadgeText: {
    color: '#FFFFFF',
    fontSize: 12.5,
    fontWeight: '600',
  },
  travelTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
    marginTop: 12,
  },
  travelSubtitle: {
    fontSize: 13.5,
    color: '#A3C9B8',
    marginTop: 4,
  },
});
