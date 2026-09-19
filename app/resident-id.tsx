import React, { useState } from 'react';
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
import { router } from 'expo-router';
import { Ionicons } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';
import { useAppColors } from '../hooks/useAppColors';

export default function ResidentIdScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();
  const [copied, setCopied] = useState(false);

  const fields = [
    { label: 'Resident ID Number', value: employee?.resident_id_number || employee?.id_number || '-', copyable: true },
    { label: 'ID Version', value: employee?.resident_id_version || '1' },
    { label: 'Issuing Date', value: employee?.resident_id_issuing_date || '-' },
    { label: 'Expiry Date', value: employee?.resident_id_expiry_date || '-' },
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
        <Text style={[styles.headerTitle, { color: colors.white }]}>Resident ID</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Clickable ID Card Preview leading to Full Landscape Viewer */}
        <TouchableOpacity
          style={styles.cardPreviewWrap}
          activeOpacity={0.88}
          onPress={() => router.push('/digital-documents')}
        >
          <Image
            source={
              employee?.id_card_image_url
                ? { uri: employee.id_card_image_url }
                : require('../assets/images/iqama_card.png')
            }
            style={styles.cardPreviewImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <View style={[styles.sectionHeader, { borderBottomColor: colors.border }]}>
            <View style={[styles.sectionIconWrap, { backgroundColor: colors.cardAlt }]}>
              <Ionicons name="card-outline" size={22} color={colors.accent} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.white }]}>Resident ID Details</Text>
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
  cardPreviewWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  cardPreviewImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
});
