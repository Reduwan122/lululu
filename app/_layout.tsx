import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { EmployeeProvider, useEmployee } from '../context/EmployeeContext';

SplashScreen.preventAutoHideAsync().catch(() => {});

function RootNavigation() {
  const { session, loading } = useEmployee();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loading) return;

    SplashScreen.hideAsync().catch(() => {});

    const inAuthGroup = segments[0] === 'login' || segments[0] === 'welcome';

    if (!session && !inAuthGroup) {
      router.replace('/welcome');
    }
  }, [session, loading, segments]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#14200D' }}>
        <ActivityIndicator size="large" color="#1E6B4E" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <EmployeeProvider>
        <RootNavigation />
      </EmployeeProvider>
    </SafeAreaProvider>
  );
}
