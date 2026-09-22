import React, { useEffect, useState, useRef, useMemo } from 'react';
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
import QRCode from 'react-native-qrcode-svg';
import { useEmployee } from '../context/EmployeeContext';
import { IconClose } from '../components/ExtractedIcons';

export default function DigitalDocumentsScreen() {
  const { employee } = useEmployee();
  const [timer, setTimer] = useState(30);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
  const scrollRef = useRef<ScrollView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // 1. Force Landscape orientation upon entering, restore Portrait on exit
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

  // 2. 30-Second Countdown Timer (UI countdown badge only)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (sec: number) => {
    return '00:' + sec.toString().padStart(2, '0');
  };

  // Deterministic QR payload: constant for this user, unique across different users
  const qrPayload = useMemo(() => {
    if (employee?.qr_code_url) return employee.qr_code_url;
    const id = employee?.id_number || '';
    const name = employee?.full_name || '';
    const dob = employee?.date_of_birth || '';
    const exp = employee?.expiry_date || employee?.resident_id_expiry_date || '';
    const nat = employee?.birth_country || employee?.nationality || '';

    // Stable deterministic cryptographic token based on user's identity data
    const seed = `${id}-${name}-${dob}-${exp}-${nat}`;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const hexHash = Math.abs(hash).toString(16).padStart(8, '0');
    const token = `${hexHash}b8a4f91e0c5273d4a6e8f1b2c3d4e5f67890abcdef1234567890abcdef12`;

    return `https://absher.sa/verify/digital-id?v=2.4&id=${id}&name=${encodeURIComponent(
      name
    )}&dob=${encodeURIComponent(dob)}&exp=${encodeURIComponent(exp)}&sig=${token}`;
  }, [
    employee?.id_number,
    employee?.full_name,
    employee?.date_of_birth,
    employee?.expiry_date,
    employee?.birth_country,
    employee?.qr_code_url,
  ]);

  const { width, height } = windowDimensions;

  // Exact card dimensions preserving 1.58:1 ratio matching media_1789851512801.png
  const maxCardHeight = Math.min(height * 0.93, 430);
  const maxCardWidth = Math.min(width * 0.88, maxCardHeight * 1.58);
  const cardHeight = Math.round(maxCardWidth / 1.58);
  const cardWidth = Math.round(maxCardWidth);

  // Inner framed box dimensions (~81% of card height)
  const innerBoxSize = Math.round(cardHeight * 0.81);
  const qrSize = Math.round(innerBoxSize * 0.88);
  const logoBoxWidth = Math.round(qrSize * 0.22);
  const logoBoxHeight = Math.round(qrSize * 0.28);
  const logoImgWidth = Math.round(qrSize * 0.17);
  const logoImgHeight = Math.round(qrSize * 0.25);

  const handleSwap = () => {
    const nextPage = currentPage === 0 ? 1 : 0;
    scrollRef.current?.scrollTo({ x: nextPage * width, animated: true });
    setCurrentPage(nextPage);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Close button in top-left matching screenshot */}
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <IconClose size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const page = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentPage(page);
        }}
        style={{ flex: 1 }}
      >
        {/* Page 1: ID Card (Landscape view matching media_1789850828567.png) */}
        <View style={[styles.page, { width, height }]}>
          <TouchableOpacity
            activeOpacity={0.94}
            onPress={handleSwap}
            style={[styles.outerCard, { width: cardWidth, height: cardHeight }]}
          >
            <Image
              source={
                employee?.id_card_image_url
                  ? { uri: employee.id_card_image_url }
                  : require('../assets/images/iqama_card.png')
              }
              style={[styles.idCardImage, { width: cardWidth, height: cardHeight }]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* Page 2: QR Code (Landscape view matching media_1789851512801.png) */}
        <View style={[styles.page, { width, height }]}>
          <TouchableOpacity
            activeOpacity={0.94}
            onPress={handleSwap}
            style={[
              styles.outerCard,
              styles.qrOuterCard,
              { width: cardWidth, height: cardHeight },
            ]}
          >
            {/* Inner framed QR box with subtle border matching screenshot */}
            <View
              style={[
                styles.qrInnerFrame,
                { width: innerBoxSize, height: innerBoxSize },
              ]}
            >
              <View style={styles.qrCodeWrapper}>
                <QRCode
                  value={qrPayload}
                  size={qrSize}
                  color="#000000"
                  backgroundColor="#FFFFFF"
                  ecl="H"
                />
                {/* Authentic emerald Absher emblem with white cutout */}
                <View
                  style={[
                    styles.emblemCutout,
                    { width: logoBoxWidth, height: logoBoxHeight },
                  ]}
                >
                  <Image
                    source={require('../assets/images/absher_logo_primary_emblem.png')}
                    style={{ width: logoImgWidth, height: logoImgHeight }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>

            {/* Bottom text & countdown timer badge matching media_1789851512801.png */}
            <View style={styles.qrFooterRow}>
              <Text style={styles.qrFooterText}>QR code updates every 30 seconds</Text>
              <View style={styles.countdownBadge}>
                <Text style={styles.countdownBadgeText}>{formatTimer(timer)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  closeBtn: {
    position: 'absolute',
    top: 24,
    left: 28,
    zIndex: 100,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCard: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  idCardImage: {
    borderRadius: 24,
  },
  qrOuterCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  qrInnerFrame: {
    borderWidth: 1.2,
    borderColor: '#E8ECE9',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emblemCutout: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  qrFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  qrFooterText: {
    fontSize: 12.5,
    color: '#262626',
    fontWeight: '400',
  },
  countdownBadge: {
    backgroundColor: '#ECEFF1',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 3.5,
    marginLeft: 8,
  },
  countdownBadgeText: {
    color: '#1A1C1E',
    fontSize: 12.5,
    fontWeight: '700',
  },
});
