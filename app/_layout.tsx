import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
} from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { EmployeeProvider, useEmployee } from '../context/EmployeeContext';

SplashScreen.preventAutoHideAsync().catch(() => {});

function RootNavigation({ fontsLoaded }: { fontsLoaded: boolean }) {
  const { session, loading } = useEmployee();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loading || !fontsLoaded) return;

    SplashScreen.hideAsync().catch(() => {});

    const inAuthGroup = segments[0] === 'login' || segments[0] === 'welcome';

    if (!session && !inAuthGroup) {
      router.replace('/welcome');
    } else if (session && inAuthGroup) {
      router.replace('/(tabs)');
    }
  }, [session, loading, fontsLoaded, segments]);

  if (loading || !fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#14200D' }}>
        <ActivityIndicator size="large" color="#1E6B4E" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    ...Ionicons.font,
    ...MaterialCommunityIcons.font,
    ...MaterialIcons.font,
    ...FontAwesome.font,
    ...Feather.font,
    ...AntDesign.font,
    ...Entypo.font,
    ...SimpleLineIcons.font,
    ...Octicons.font,
  });

  const isReady = fontsLoaded || !!fontError;

  return (
    <SafeAreaProvider>
      <EmployeeProvider>
        <RootNavigation fontsLoaded={isReady} />
      </EmployeeProvider>
    </SafeAreaProvider>
  );
}
