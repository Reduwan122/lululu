import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { useEmployee } from '../context/EmployeeContext';
import {
  IconArrowBack,
  IconChevronUp,
  IconChevronDown,
  IconPerson,
  IconMoon,
  IconKaaba,
} from '../components/ExtractedIcons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function PersonalDetailsScreen() {
  const insets = useSafeAreaInsets();
  const { employee } = useEmployee();

  const [expandedPersonal, setExpandedPersonal] = useState(true);
  const [expandedSponsor, setExpandedSponsor] = useState(false);
  const [expandedHealth, setExpandedHealth] = useState(false);
  const [expandedHajj, setExpandedHajj] = useState(false);

  const toggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setter((prev) => !prev);
  };

  const personalFields = [
    { label: 'Name', value: employee?.full_name || '-' },
    { label: 'Birth City', value: employee?.birth_city || '-' },
    { label: 'Birth Country/Region', value: employee?.birth_country || employee?.nationality || '-' },
    { label: 'Date of Birth', value: employee?.date_of_birth || '-' },
    { label: 'Marital Status', value: employee?.marital_status ? employee.marital_status.toUpperCase() : '-' },
    { label: 'No. of sponsorship transfers', value: employee?.sponsorship_transfers || '0' },
    { label: 'Religion', value: employee?.religion || 'Islam' },
    { label: 'Work Permit', value: employee?.work_permit || '-' },
    { label: 'Biometrics Collected', value: employee?.biometrics_collected === 'Enrolled' ? 'Yes' : (employee?.biometrics_collected || 'Yes') },
    { label: 'Travel Status', value: employee?.travel_status === 'Inside KSA' ? 'Inside' : (employee?.travel_status || 'Inside') },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#101412" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* 1. Header (Dark Mode matching media_1789850161446.png) */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <IconArrowBack size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Personal Details</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Accordion Card 1: Personal Details (Expanded by default) */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => toggle(setExpandedPersonal)}
            activeOpacity={0.8}
          >
            <Image
              source={
                employee?.photo_url
                  ? { uri: employee.photo_url }
                  : require('../assets/images/profile_user.png')
              }
              style={styles.headerAvatar}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>Personal Details</Text>
            <View style={styles.chevronWrap}>
              {expandedPersonal ? (
                <IconChevronUp size={20} color="#FFFFFF" />
              ) : (
                <IconChevronDown size={20} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>

          {expandedPersonal && (
            <View style={styles.fieldsContainer}>
              {personalFields.map((field, idx) => (
                <View key={idx}>
                  <View style={styles.fieldRow}>
                    <Text style={styles.fieldLabel}>{field.label}</Text>
                    <Text style={styles.fieldValue}>{field.value}</Text>
                  </View>
                  {idx < personalFields.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          )}
        </View>

        {/* 3. Accordion Card 2: Sponsor Details (Collapsed matching media_1789850163627.png) */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => toggle(setExpandedSponsor)}
            activeOpacity={0.8}
          >
            <View style={styles.sectionIconWrap}>
              <IconPerson size={22} color="#8E9590" />
            </View>
            <Text style={styles.cardTitle}>Sponsor Details</Text>
            <View style={styles.chevronWrap}>
              {expandedSponsor ? (
                <IconChevronUp size={20} color="#FFFFFF" />
              ) : (
                <IconChevronDown size={20} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>

          {expandedSponsor && (
            <View style={styles.fieldsContainer}>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>Sponsor Name</Text>
                <Text style={styles.fieldValue}>{employee?.sponsor_name || 'شركة مها علي بن حسين الربيعي للمقاولات عامة'}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>Sponsor ID Number</Text>
                <Text style={styles.fieldValue}>{employee?.sponsor_id_number || '7052548919'}</Text>
              </View>
            </View>
          )}
        </View>

        {/* 4. Accordion Card 3: Health Insurance (Collapsed matching media_1789850163627.png) */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => toggle(setExpandedHealth)}
            activeOpacity={0.8}
          >
            <View style={styles.sectionIconWrap}>
              <IconMoon size={22} color="#8E9590" />
            </View>
            <Text style={styles.cardTitle}>Health Insurance</Text>
            <View style={styles.chevronWrap}>
              {expandedHealth ? (
                <IconChevronUp size={20} color="#FFFFFF" />
              ) : (
                <IconChevronDown size={20} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>

          {expandedHealth && (
            <View style={styles.fieldsContainer}>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>Insurance Status</Text>
                <Text style={styles.fieldValue}>Valid</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>Expiry Date</Text>
                <Text style={styles.fieldValue}>{employee?.health_expiry_date || '1446/01/01'}</Text>
              </View>
            </View>
          )}
        </View>

        {/* 5. Accordion Card 4: Hajj Details (Collapsed matching media_1789850163627.png) */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => toggle(setExpandedHajj)}
            activeOpacity={0.8}
          >
            <View style={styles.sectionIconWrap}>
              <IconKaaba size={22} color="#8E9590" />
            </View>
            <Text style={styles.cardTitle}>Hajj Details</Text>
            <View style={styles.chevronWrap}>
              {expandedHajj ? (
                <IconChevronUp size={20} color="#FFFFFF" />
              ) : (
                <IconChevronDown size={20} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>

          {expandedHajj && (
            <View style={styles.fieldsContainer}>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>Eligibility Status</Text>
                <Text style={styles.fieldValue}>{employee?.hajj_status || 'Eligible'}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>Last Performed Hajj</Text>
                <Text style={styles.fieldValue}>{employee?.hajj_last_year || 'None'}</Text>
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
    backgroundColor: '#101412',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#101412',
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#191E1B',
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#2A332E',
  },
  sectionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 14,
    letterSpacing: -0.2,
  },
  chevronWrap: {
    marginLeft: 'auto',
    padding: 4,
  },
  fieldsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  fieldRow: {
    paddingVertical: 12,
  },
  fieldLabel: {
    fontSize: 13.5,
    color: '#8E9590',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#232A26',
  },
});
