import React from 'react';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useEmployee } from '../context/EmployeeContext';

export default function Index() {
  const { session, loading } = useEmployee();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D9EDE2' }}>
        <ActivityIndicator size="large" color="#1E6B4E" />
      </View>
    );
  }

  if (session) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/welcome" />;
}

