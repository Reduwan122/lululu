import React from 'react';
import { Tabs } from 'expo-router';
import { AppIcon } from '../../components/AppIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#22C55E',
        tabBarInactiveTintColor: '#8E9590',
        tabBarStyle: {
          backgroundColor: '#161917',
          borderTopColor: '#161917',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AppIcon name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => (
            <AppIcon name="grid-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="family"
        options={{
          title: 'Family',
          tabBarIcon: ({ color }) => (
            <AppIcon name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="workers"
        options={{
          title: 'Workers',
          tabBarIcon: ({ color }) => (
            <AppIcon name="briefcase-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: 'Other',
          tabBarIcon: ({ color }) => (
            <AppIcon name="ellipsis-horizontal" size={22} color={color} />
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
