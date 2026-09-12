import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';
import { useAppColors } from '../hooks/useAppColors';
import { customIcons } from '../components/AppIcon';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function PersonalDetailsScreen() {
  const colors = useAppColors();
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();

  const [expandedPersonal, setExpandedPersonal] = useState(true);
  const [expandedSponsor, setExpandedSponsor] = useState(true);
  const [expandedHealth, setExpandedHealth] = useState(true);
  const [expandedHajj, setExpandedHajj] = useState(true);

  const toggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setter((prev) => !prev);
  };

  const personalFields = [
    { label: 'Name', value: employee?.full_name || '-' },
    { label: 'Birth City', value: employee?.birth_city || '-' },
    { label: 'Birth Country/Region', value: employee?.birth_country || '-' },
    { label: 'Date of Birth', value: employee?.date_of_birth || '-' },
    { label: 'Marital Status', value: employee?.marital_status || '-' },
    { label: 'No. of sponsorship transfers', value: employee?.sponsorship_transfers || '-' },
    { label: 'Religion', value: employee?.religion || '-' },
    { label: 'Work Permit', value: employee?.work_permit || '-' },
    { label: 'Biometrics Collected', value: employee?.biometrics_collected || '-' },
    { label: 'Travel Status', value: employee?.travel_status || '-' },
  ];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]} edges={['bottom', 'left', 'right']}>
      <StatusBar
        barStyle={colors.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.bg}
      />

      <View style={[styles.header, { backgroundColor: colors.bg, paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.white }]}>Personal Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Section 1: Personal Information */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity
            style={[styles.sectionHeader, { borderBottomColor: colors.border }]}
            onPress={() => toggle(setExpandedPersonal)}
          >
            <View style={[styles.sectionIconWrap, { backgroundColor: colors.cardAlt }]}>
              <Ionicons name="person-outline" size={20} color={colors.accent} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.white }]}>
              Personal Information
            </Text>
            <Ionicons
              name={expandedPersonal ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.greyText}
            />
          </TouchableOpacity>

          {expandedPersonal && (
            <View style={styles.fieldsWrap}>
              {personalFields.map((field, idx) => (
                <View key={idx} style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                  <Text style={[styles.fieldLabel, { color: colors.greyText }]}>{field.label}</Text>
                  <Text style={[styles.fieldValue, { color: colors.white }]}>{field.value}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Section 2: Sponsor Details */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity
            style={[styles.sectionHeader, { borderBottomColor: colors.border }]}
            onPress={() => toggle(setExpandedSponsor)}
          >
            <View style={[styles.sectionIconWrap, { backgroundColor: colors.cardAlt }]}>
              <Image source={customIcons['sponsor-details-icon']} style={{ width: 22, height: 22 }} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.white }]}>
              Sponsor Details
            </Text>
            <Ionicons
              name={expandedSponsor ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.greyText}
            />
          </TouchableOpacity>

          {expandedSponsor && (
            <View style={styles.fieldsWrap}>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Sponsor Name</Text>
                <Text style={[styles.fieldValue, { color: colors.white }]}>
                  {employee?.sponsor_name || '-'}
                </Text>
              </View>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Sponsor ID Number</Text>
                <Text style={[styles.fieldValue, { color: colors.white }]}>
                  {employee?.sponsor_id_number || '-'}
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Section 3: Health Insurance */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity
            style={[styles.sectionHeader, { borderBottomColor: colors.border }]}
            onPress={() => toggle(setExpandedHealth)}
          >
            <View style={[styles.sectionIconWrap, { backgroundColor: colors.cardAlt }]}>
              <Image source={customIcons['health-insurance-icon']} style={{ width: 22, height: 22 }} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.white }]}>
              Health Insurance
            </Text>
            <Ionicons
              name={expandedHealth ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.greyText}
            />
          </TouchableOpacity>

          {expandedHealth && (
            <View style={styles.fieldsWrap}>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Blood Type</Text>
                <Text style={[styles.fieldValue, { color: colors.white }]}>
                  {employee?.blood_type || '-'}
                </Text>
              </View>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Issuing Date</Text>
                <Text style={[styles.fieldValue, { color: colors.white }]}>
                  {employee?.health_issuing_date || '-'}
                </Text>
              </View>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Expiry Date</Text>
                <Text style={[styles.fieldValue, { color: colors.white }]}>
                  {employee?.health_expiry_date || '-'}
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Section 4: Hajj Details */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity
            style={[styles.sectionHeader, { borderBottomColor: colors.border }]}
            onPress={() => toggle(setExpandedHajj)}
          >
            <View style={[styles.sectionIconWrap, { backgroundColor: colors.cardAlt }]}>
              <Image source={customIcons['hajj-details-icon']} style={{ width: 22, height: 22 }} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.white }]}>
              Hajj Details
            </Text>
            <Ionicons
              name={expandedHajj ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.greyText}
            />
          </TouchableOpacity>

          {expandedHajj && (
            <View style={styles.fieldsWrap}>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Hajj Status</Text>
                <View style={[styles.statusPill, { backgroundColor: colors.green }]}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusPillText}>
                    {employee?.hajj_status || 'Eligible'}
                  </Text>
                </View>
              </View>
              <View style={[styles.fieldRow, { borderBottomColor: colors.border }]}>
                <Text style={[styles.fieldLabel, { color: colors.greyText }]}>Last Year Performed</Text>
                <Text style={[styles.fieldValue, { color: colors.white }]}>
                  {employee?.hajj_last_year || '-'}
                </Text>
              </View>
            </View>
          )}
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
    fontSize: 19,
    fontWeight: '600',
    marginLeft: 16,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  sectionCard: {
    borderRadius: 14,
    marginBottom: 14,
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
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },
  fieldsWrap: {
    paddingHorizontal: 16,
  },
  fieldRow: {
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  fieldLabel: {
    fontSize: 13,
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginRight: 6,
  },
  statusPillText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});
