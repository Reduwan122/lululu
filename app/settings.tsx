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
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { Ionicons } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';

const helpLinks = [
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

  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [calendar, setCalendar] = useState<'gregorian' | 'hijri'>('gregorian');

  const handleSignOut = async () => {
    await logout();
    router.replace('/welcome');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={26} color={colors.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Account Details */}
        <Text style={styles.sectionLabel}>ACCOUNT DETAILS</Text>
        <View style={styles.card}>
          <View style={styles.accountRow}>
            {employee?.photo_url ? (
              <Image source={{ uri: employee.photo_url }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Ionicons name="person" size={24} color={colors.greyText} />
              </View>
            )}
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.accountName}>{employee?.full_name || 'Absher User'}</Text>
              <Text style={styles.accountId}>{employee?.id_number || '-'}</Text>
            </View>
          </View>
        </View>

        {/* Preferences */}
        <Text style={styles.sectionLabel}>PREFERENCES</Text>
        <View style={styles.card}>
          <View style={styles.toggleRow}>
            <Text style={styles.rowText}>Push Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: colors.accent }}
            />
          </View>
          <Text style={styles.helperText}>Receive instant updates about document status.</Text>

          <View style={styles.divider} />

          <View style={styles.toggleRow}>
            <Text style={styles.rowText}>Enable Face ID / Fingerprint</Text>
            <Switch
              value={biometrics}
              onValueChange={setBiometrics}
              trackColor={{ false: '#767577', true: colors.accent }}
            />
          </View>
          <Text style={styles.helperText}>Use biometric verification to login quickly.</Text>
        </View>

        {/* Language */}
        <Text style={styles.sectionLabel}>LANGUAGE</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setLanguage('en')}
          >
            <Text style={styles.rowText}>English</Text>
            <View style={[styles.radioOuter, language === 'en' && styles.radioOuterActive]}>
              {language === 'en' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setLanguage('ar')}
          >
            <Text style={styles.rowText}>العربية (Arabic)</Text>
            <View style={[styles.radioOuter, language === 'ar' && styles.radioOuterActive]}>
              {language === 'ar' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <Text style={styles.sectionLabel}>CALENDAR</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setCalendar('gregorian')}
          >
            <Text style={styles.rowText}>Gregorian Calendar</Text>
            <View style={[styles.radioOuter, calendar === 'gregorian' && styles.radioOuterActive]}>
              {calendar === 'gregorian' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setCalendar('hijri')}
          >
            <Text style={styles.rowText}>Hijri Calendar</Text>
            <View style={[styles.radioOuter, calendar === 'hijri' && styles.radioOuterActive]}>
              {calendar === 'hijri' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Help & Support */}
        <Text style={styles.sectionLabel}>HELP & SUPPORT</Text>
        <View style={styles.card}>
          {helpLinks.map((item, idx) => (
            <View key={idx}>
              <TouchableOpacity style={styles.row}>
                <Text style={styles.rowText}>{item}</Text>
              </TouchableOpacity>
              {idx < helpLinks.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleSignOut}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const colors = {
  bg: '#F4F6F5',
  card: '#FFFFFF',
  border: '#E7EBE9',
  textDark: '#14181A',
  greyText: '#6B7A75',
  accent: '#1E6B4E',
  danger: '#C0392B',
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    backgroundColor: colors.bg,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.textDark,
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sectionLabel: {
    color: colors.greyText,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginTop: 20,
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EDEFEE',
  },
  avatarPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountName: {
    color: colors.textDark,
    fontSize: 17,
    fontWeight: '700',
  },
  accountId: {
    color: colors.greyText,
    fontSize: 13,
    marginTop: 2,
  },
  row: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  rowText: {
    color: colors.textDark,
    fontSize: 15,
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  helperText: {
    color: colors.greyText,
    fontSize: 12,
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 6,
    lineHeight: 18,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.greyText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: colors.accent,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.accent,
  },
  logoutBtn: {
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  logoutText: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: '700',
  },
});
