import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { AppIcon } from '../components/AppIcon';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  const publicServices = [
    { label: 'Query Hajj Eligibility', icon: 'checkbox-outline' },
    { label: 'Civil Registry Query', icon: 'card-outline' },
    { label: 'Absher Guide', icon: 'book-outline' },
    { label: 'Appointments', icon: 'calendar-outline' },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.headerBg} />
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
          <View style={styles.headerTopRow}>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/settings')}>
              <AppIcon name="settings-outline" size={22} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <AppIcon name="notifications-outline" size={22} color={colors.accent} />
            </TouchableOpacity>
          </View>

          <View style={styles.logoRow}>
            <AppIcon
              name="business-outline"
              pngKey="logo-1"
              size={140}
              color={colors.accent}
              style={{ width: 52, height: 140 }}
            />
            <AppIcon
              name="apps-outline"
              pngKey="logo-2"
              size={87}
              color={colors.accent}
              style={{ marginLeft: 16 }}
            />
          </View>
          <Text style={styles.appTitle}>Absher E-Services</Text>

          <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/login')}>
            <Text style={styles.loginBtnText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.publicSection}>
          <View style={styles.publicHeaderRow}>
            <Text style={styles.sectionTitle}>Public Services</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            {publicServices.map((item, idx) => (
              <TouchableOpacity key={idx} style={styles.gridCard} activeOpacity={0.8}>
                <AppIcon name={item.icon as any} size={26} color={colors.accent} />
                <Text style={styles.gridTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.footerText}>Powered by  National Information Center</Text>
          <Text style={styles.footerText}>All rights are reserved by the Ministry of Interior</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const colors = {
  bg: '#F4F6F5',
  headerBg: '#D9EDE2',
  card: '#FFFFFF',
  textDark: '#14200D',
  textBody: '#3A4A40',
  greyText: '#5C6B62',
  accent: '#1E6B4E',
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    backgroundColor: colors.headerBg,
    paddingHorizontal: 20,
    paddingBottom: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
  },
  headerTopRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBtn: {
    padding: 8,
    marginLeft: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 14,
  },
  appTitle: {
    color: colors.textDark,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  publicSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  publicHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: colors.textDark,
    fontSize: 18,
    fontWeight: '700',
  },
  seeAll: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
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
  footerText: {
    color: colors.greyText,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 10,
  },
});
