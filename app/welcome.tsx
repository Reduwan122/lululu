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
      <StatusBar barStyle="dark-content" backgroundColor="#D8ECE1" />
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header with curved bottom */}
        <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
          <View style={styles.headerTopRow}>
            <View style={{ flex: 1 }} />
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push('/settings')}
              activeOpacity={0.7}
            >
              <AppIcon name="settings-outline" size={22} color="#166444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <AppIcon name="notifications-outline" size={22} color="#166444" />
            </TouchableOpacity>
          </View>

          {/* Absher & Saudi Emblem Logos */}
          <View style={styles.logoRow}>
            <AppIcon
              name="business-outline"
              pngKey="logo-1"
              size={64}
              style={styles.logo1}
            />
            <AppIcon
              name="apps-outline"
              pngKey="logo-2"
              size={64}
              style={styles.logo2}
            />
          </View>

          <Text style={styles.appTitle}>Absher E-Services</Text>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => router.push('/login')}
            activeOpacity={0.85}
          >
            <Text style={styles.loginBtnText}>Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Public Services Section */}
        <View style={styles.publicSection}>
          <View style={styles.publicHeaderRow}>
            <Text style={styles.sectionTitle}>Public Services</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            {publicServices.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.gridCard}
                activeOpacity={0.8}
              >
                <AppIcon name={item.icon} size={28} color="#166444" />
                <Text style={styles.gridTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer Branding */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Powered by National Information Center
            </Text>
            <Text style={styles.footerSubText}>
              All rights are reserved by the Ministry of Interior
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F3F6F4',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#D8ECE1',
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
  },
  headerTopRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconBtn: {
    padding: 6,
    marginLeft: 6,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  logo1: {
    width: 48,
    height: 64,
  },
  logo2: {
    width: 64,
    height: 64,
    marginLeft: 16,
  },
  appTitle: {
    color: '#18251C',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 18,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#1E6B4E',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  publicSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  publicHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#18251C',
  },
  seeAll: {
    color: '#1E6B4E',
    fontSize: 14,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  footerContainer: {
    marginTop: 36,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#5C6B64',
    textAlign: 'center',
  },
  footerSubText: {
    fontSize: 11,
    color: '#8A9690',
    marginTop: 6,
    textAlign: 'center',
  },
});
