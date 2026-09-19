import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { router, Stack } from 'expo-router';
import { AppIcon } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';

export default function DigitalDocumentsScreen() {
  const { employee } = useEmployee();
  const [timer, setTimer] = useState(30);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions(window);
    });

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (sec: number) => {
    return '00:' + sec.toString().padStart(2, '0');
  };

  const { width, height } = windowDimensions;
  const contentHeight = height - 30;

  return (
    <View style={styles.safe}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <AppIcon name="close" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {/* Page 1: ID Card */}
        <View style={[styles.page, { width, height }]}>
          <Image
            source={
              employee?.id_card_image_url
                ? { uri: employee.id_card_image_url }
                : require('../assets/images/iqama_card.png')
            }
            style={{ width, height: contentHeight }}
            resizeMode="contain"
          />
        </View>

        {/* Page 2: QR Code */}
        <View style={[styles.page, { width, height }]}>
          {employee?.qr_code_url ? (
            <View style={{ width, height: contentHeight, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={{ uri: employee.qr_code_url }}
                style={{ width: 260, height: 260 }}
                resizeMode="contain"
              />
              <View style={styles.qrFooterOverlay}>
                <View style={styles.qrFooterPill}>
                  <Text style={styles.qrFooterText}>Live Security Verification</Text>
                  <View style={styles.countdownBadge}>
                    <Text style={styles.countdownText}>{formatTimer(timer)}</Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.placeholderText}>
              QR কোড এখনো আপলোড করা হয়নি
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000000',
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#C7C7CC',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  qrFooterOverlay: {
    position: 'absolute',
    bottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrFooterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  qrFooterText: {
    color: '#FFFFFF',
    fontSize: 13,
    marginRight: 10,
    fontWeight: '600',
  },
  countdownBadge: {
    backgroundColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  countdownText: {
    color: '#1C1C1E',
    fontSize: 12,
    fontWeight: '700',
  },
});
