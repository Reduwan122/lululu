import React from 'react';
import { Tabs } from 'expo-router';
import { AppIcon } from '../../components/AppIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#23A365',
        tabBarInactiveTintColor: '#8E9590',
        tabBarStyle: {
          backgroundColor: '#191E1B',
          borderTopColor: '#191E1B',
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AppIcon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => (
            <AppIcon name="services" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="family"
        options={{
          title: 'Family',
          tabBarIcon: ({ color }) => (
            <AppIcon name="family" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="workers"
        options={{
          title: 'Workers',
          tabBarIcon: ({ color }) => (
            <AppIcon name="workers" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: 'Other',
          tabBarIcon: ({ color }) => (
            <AppIcon name="other" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
