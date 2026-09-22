import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Switch,
  Image,
  Alert,
  Platform,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { useEmployee } from '../context/EmployeeContext';
import { IconClose } from '../components/ExtractedIcons';

const supportLinks = [
  'Support Center',
  'App Services Guide',
  'Accessibility Guide',
  'Live Chat',
  'FAQs',
  'Privacy Policy',
];

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { employee, logout } = useEmployee();

  const [useBiometrics, setUseBiometrics] = useState(true);
  const [blurImages, setBlurImages] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [calendar, setCalendar] = useState<'gregorian' | 'hijri'>('gregorian');

  const fullName = employee?.full_name || 'Absher User';
  const idNumber = employee?.id_number || '';

  const handleSignOut = async () => {
    const doLogout = async () => {
      try {
        if (logout) await logout();
      } catch (err) {
        console.warn('Logout error:', err);
      }
      router.replace('/welcome');
    };

    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined' && window.confirm) {
        if (window.confirm('Are you sure you want to log out?')) {
          await doLogout();
        }
      } else {
        await doLogout();
      }
      return;
    }

    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: doLogout,
        },
      ]
    );
  };

  const handleDeleteIdentity = async () => {
    const doDelete = async () => {
      if (logout) await logout();
      router.replace('/welcome');
    };

    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined' && window.confirm) {
        if (window.confirm('Are you sure you want to delete your digital identity from this device?')) {
          await doDelete();
        }
      } else {
        await doDelete();
      }
      return;
    }

    Alert.alert(
      'Delete Your Digital Identity',
      'Are you sure you want to delete your digital identity from this device?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: doDelete,
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* 1. Header (Light Theme matching media_1789850202615.png) */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.closeButton}
          activeOpacity={0.7}
        >
          <IconClose size={24} color="#101412" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. ACCOUNT DETAILS */}
        <Text style={styles.sectionHeader}>ACCOUNT DETAILS</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.profileRow}
            onPress={() => router.push('/profile')}
            activeOpacity={0.7}
          >
            <Image
              source={
                employee?.photo_url
                  ? { uri: employee.photo_url }
                  : require('../assets/images/profile_user.png')
              }
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{fullName}</Text>
              <Text style={styles.profileId}>ID No. {idNumber}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.actionRow} activeOpacity={0.7}>
            <Text style={styles.rowTitle}>Absher Authenticator</Text>
          </TouchableOpacity>
        </View>

        {/* 3. PRIVACY AND SECURITY */}
        <Text style={styles.sectionHeader}>PRIVACY AND SECURITY</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.actionRow} activeOpacity={0.7}>
            <Text style={styles.rowTitle}>Trusted Devices</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Use Biometrics */}
          <View style={styles.settingBlock}>
            <View style={styles.toggleRow}>
              <Text style={styles.rowTitle}>Use Biometrics</Text>
              <Switch
                value={useBiometrics}
                onValueChange={setUseBiometrics}
                trackColor={{ false: '#E0E2E1', true: '#175438' }}
                thumbColor="#FFFFFF"
              />
            </View>
            <Text style={styles.settingDescription}>
              Biometrics are required to access your Digital Documents and Absher Authenticator while logged out, and allows you to stay logged in for longer.
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Blur images */}
          <View style={styles.settingBlock}>
            <View style={styles.toggleRow}>
              <Text style={styles.rowTitle}>Blur images</Text>
              <Switch
                value={blurImages}
                onValueChange={setBlurImages}
                trackColor={{ false: '#E0E2E1', true: '#175438' }}
                thumbColor="#FFFFFF"
              />
            </View>
            <Text style={styles.settingDescription}>
              All images for woman will be blurred and not fully visible.
            </Text>
          </View>
        </View>

        {/* 4. PREFERENCES */}
        <Text style={styles.sectionHeader}>PREFERENCES</Text>
        <View style={styles.card}>
          <View style={styles.actionRow}>
            <Text style={styles.sectionCardTitle}>Language</Text>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setLanguage('ar')}
            activeOpacity={0.7}
          >
            <Text style={styles.radioLabel}>عربي</Text>
            <View style={[styles.radioOuter, language === 'ar' && styles.radioOuterSelected]}>
              {language === 'ar' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setLanguage('en')}
            activeOpacity={0.7}
          >
            <Text style={styles.radioLabel}>English</Text>
            <View style={[styles.radioOuter, language === 'en' && styles.radioOuterSelected]}>
              {language === 'en' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Calendar Card (matching media_1789850684816.png) */}
        <View style={[styles.card, { marginTop: 12 }]}>
          <View style={styles.settingBlock}>
            <Text style={styles.sectionCardTitle}>Calendar</Text>
            <Text style={styles.settingDescription}>
              Where possible, all dates will be displayed as Gregorian
            </Text>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setCalendar('gregorian')}
            activeOpacity={0.7}
          >
            <Text style={styles.radioLabel}>Gregorian</Text>
            <View style={[styles.radioOuter, calendar === 'gregorian' && styles.radioOuterSelected]}>
              {calendar === 'gregorian' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setCalendar('hijri')}
            activeOpacity={0.7}
          >
            <Text style={styles.radioLabel}>Hijri</Text>
            <View style={[styles.radioOuter, calendar === 'hijri' && styles.radioOuterSelected]}>
              {calendar === 'hijri' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Delete Your Digital Identity Card */}
        <TouchableOpacity
          style={[styles.card, styles.deleteCard]}
          onPress={handleDeleteIdentity}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteText}>Delete Your Digital Identity</Text>
        </TouchableOpacity>

        {/* 5. SUPPORT (matching media_1789850684816.png) */}
        <Text style={styles.sectionHeader}>SUPPORT</Text>
        <View style={styles.card}>
          {supportLinks.map((item, idx) => (
            <View key={item}>
              <TouchableOpacity style={styles.actionRow} activeOpacity={0.7}>
                <Text style={styles.rowTitle}>{item}</Text>
              </TouchableOpacity>
              {idx < supportLinks.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* 6. Log Out Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleSignOut}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    padding: 4,
    marginRight: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#101412',
    letterSpacing: -0.4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 40,
  },
  sectionHeader: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#6C757D',
    letterSpacing: 0.5,
    marginTop: 18,
    marginBottom: 8,
    marginLeft: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ECEFEF',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#E0E2E1',
  },
  profileInfo: {
    marginLeft: 14,
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#101412',
    letterSpacing: -0.2,
  },
  profileId: {
    fontSize: 13.5,
    color: '#6C757D',
    marginTop: 2,
  },
  actionRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#101412',
  },
  sectionCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#101412',
  },
  settingBlock: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingDescription: {
    fontSize: 13,
    color: '#6C757D',
    lineHeight: 18,
    marginTop: 6,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#101412',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#6C757D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#175438',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#175438',
  },
  deleteCard: {
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  deleteText: {
    color: '#B33A3A',
    fontSize: 15,
    fontWeight: '700',
  },
  logoutButton: {
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: '#175438',
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logoutText: {
    color: '#175438',
    fontSize: 16,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F2F1',
    marginHorizontal: 16,
  },
});
