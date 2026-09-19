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
import { AppIcon } from '../components/AppIcon';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  const publicServices = [
    { label: 'Manage Digital\nIdentity', icon: 'person-outline' },
    { label: 'View Digital\nDocuments', icon: 'grid-outline' },
    { label: 'Authentication\nServices', icon: 'finger-print-outline' },
    { label: 'My Documents', icon: 'document-text-outline' },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#D8ECE1" />
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Section */}
        <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
          {/* Header Action Icons (Settings, Notifications) */}
          <View style={styles.headerTopRow}>
            <View style={{ flex: 1 }} />
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

          {/* Absher & Saudi Emblem Logos */}
          <View style={styles.logoRow}>
            <Image
              source={require('../assets/icons/logo1.png')}
              style={styles.logo1}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/icons/logo2.png')}
              style={styles.logo2}
              resizeMode="contain"
            />
          </View>

          {/* Screen Title */}
          <Text style={styles.appTitle}>Absher E-Services 24/7</Text>

          {/* Log In Button */}
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

          {/* 2x2 Public Services Grid */}
          <View style={styles.grid}>
            {publicServices.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.gridCard}
                activeOpacity={0.8}
              >
                <AppIcon name={item.icon} size={26} color="#1E6B4E" />
                <Text style={styles.gridTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer Branding */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              {'Powered by  National Information center\nAll rights are reserved by the Ministry of Interior'}
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
    backgroundColor: '#F4F7F5',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#D8ECE1',
    paddingHorizontal: 16,
    paddingBottom: 24,
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
    padding: 4,
    marginLeft: 14,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  logo1: {
    width: 48,
    height: 68,
  },
  logo2: {
    width: 68,
    height: 68,
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
    height: 48,
    backgroundColor: '#1E6B4E',
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
    paddingTop: 24,
  },
  publicHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
    lineHeight: 19,
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
    lineHeight: 18,
  },
});
