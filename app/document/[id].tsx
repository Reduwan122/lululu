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
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { Ionicons } from '../../components/AppIcon';
import { useAppColors } from '../../hooks/useAppColors';

const docCatalog: Record<string, { name: string; type: string }> = {
  '1': { name: 'National ID Card', type: 'Identity' },
  '2': { name: 'Passport', type: 'Identity' },
  '3': { name: 'Driving License', type: 'License' },
  '4': { name: 'Birth Certificate', type: 'Certificate' },
};

export default function DocumentDetail() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  const isNew = id === 'new';
  const docInfo = id && !isNew ? docCatalog[id] : null;
  const title = isNew ? 'Add Document' : docInfo?.name || 'Document';

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.greenDark}
      />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={[styles.header, { backgroundColor: colors.green, paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.onGreen} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.onGreen }]}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.previewBox, { backgroundColor: colors.card }]}>
          <Ionicons name="document-text-outline" size={64} color={colors.accent} />
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: '600', marginTop: 12 }}>
            {docInfo?.name || 'Document Preview'}
          </Text>
        </View>

        <Text style={[styles.label, { color: colors.greyText }]}>Document Type</Text>
        <Text style={[styles.value, { color: colors.white }]}>{docInfo?.type || 'General'}</Text>

        <Text style={[styles.label, { color: colors.greyText }]}>Status</Text>
        <Text style={[styles.value, { color: colors.accent }]}>Verified & Active</Text>

        {!isNew && (
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => router.back()}
          >
            <Ionicons name="trash-outline" size={20} color="#FF6B6B" />
            <Text style={styles.deleteText}>Delete Document</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  content: {
    padding: 20,
  },
  previewBox: {
    height: 180,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  deleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF6B6B',
    borderRadius: 24,
    paddingVertical: 12,
    marginTop: 20,
  },
  deleteText: {
    color: '#FF6B6B',
    fontWeight: '600',
    marginLeft: 6,
  },
});
