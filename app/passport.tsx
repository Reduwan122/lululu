import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';
import { useAppColors } from '../hooks/useAppColors';

export default function PassportScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();
  const [copied, setCopied] = useState(false);

  const fields = [
    { label: 'Passport Number', value: employee?.passport_number || '-', copyable: true },
    { label: 'Type', value: employee?.passport_type || 'P' },
    { label: 'Issuing Date', value: employee?.passport_issuing_date || '-' },
    { label: 'Expiry Date', value: employee?.passport_expiry_date || '-' },
    { label: 'Issuing City', value: employee?.passport_issuing_city || '-' },
    { label: 'Status', value: employee?.passport_status || 'Valid' },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.bg}
      />

      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.white }]}>Passport Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <View style={[styles.sectionHeader, { borderBottomColor: colors.border }]}>
            <View style={[styles.sectionIconWrap, { backgroundColor: colors.cardAlt }]}>
              <Ionicons name="airplane-outline" size={22} color={colors.accent} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.white }]}>Passport Details</Text>
          </View>

          <View style={styles.fieldsWrap}>
            {fields.map((f, idx) => (
              <View key={idx} style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <View>
                  <Text style={[styles.fieldLabel, { color: colors.greyText }]}>{f.label}</Text>
                  <Text style={[styles.fieldValue, { color: colors.white }]}>{f.value}</Text>
                </View>
                {f.copyable && (
                  <TouchableOpacity onPress={handleCopy} style={styles.copyBtn}>
                    <Ionicons
                      name={copied ? 'checkmark-circle' : 'copy-outline'}
                      size={20}
                      color={colors.accent}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </View>
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 16,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  sectionCard: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  sectionIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 12,
  },
  fieldsWrap: {
    paddingHorizontal: 16,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  fieldLabel: {
    fontSize: 13,
  },
  fieldValue: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  copyBtn: {
    padding: 8,
  },
});
