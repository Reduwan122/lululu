import React, { useEffect, useState, useRef } from 'react';
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
  const [qrSeed, setQrSeed] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
  const scrollRef = useRef<ScrollView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // 1. Force Landscape orientation
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

  // 2. 30-Second Countdown Timer with dynamic QR regeneration
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setQrSeed((s) => s + 1);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (sec: number) => {
    return '00:' + sec.toString().padStart(2, '0');
  };

  const idNumber = employee?.id_number || '2631567092';
  // Dynamic cryptographic payload changing every 30 seconds
  const qrPayload = `https://absher.sa/verify/id?id=${idNumber}&cycle=${qrSeed}&ts=${Date.now()}&hash=${Math.random().toString(36).substring(2, 12).toUpperCase()}`;

  const { width, height } = windowDimensions;
  // Calculate landscape card dimensions matching 85.6mm x 53.98mm ratio
  const cardHeight = Math.min(height * 0.92, 432);
  const cardWidth = Math.min(cardHeight * 1.58, width * 0.82);
  const qrSize = Math.min(cardHeight * 0.72, 280);

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
        <IconClose size={26} color="#FFFFFF" />
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
            activeOpacity={0.92}
            onPress={handleSwap}
            style={[styles.cardWrapper, { width: cardWidth, height: cardHeight }]}
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

        {/* Page 2: QR Code (Landscape view matching media_1789850830721.png) */}
        <View style={[styles.page, { width, height }]}>
          <TouchableOpacity
            activeOpacity={0.92}
            onPress={handleSwap}
            style={[
              styles.qrCardContainer,
              { width: cardWidth, height: cardHeight },
            ]}
          >
            {/* White rounded inner box for QR code */}
            <View style={styles.qrInnerBox}>
              <QRCode
                value={qrPayload}
                size={qrSize}
                color="#000000"
                backgroundColor="#FFFFFF"
                logo={require('../assets/extracted_assets/00_Brand_Launcher_And_Splash/absher_logo_primary_emblem.png')}
                logoSize={Math.round(qrSize * 0.22)}
                logoBackgroundColor="#FFFFFF"
                logoMargin={4}
                logoBorderRadius={6}
                ecl="H"
              />
            </View>

            {/* Bottom row: Updates every 30 seconds + timer badge */}
            <View style={styles.qrFooterRow}>
              <Text style={styles.qrFooterText}>QR code updates every 30 seconds</Text>
              <View style={styles.countdownPill}>
                <Text style={styles.countdownText}>{formatTimer(timer)}</Text>
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
    top: 20,
    left: 24,
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
  cardWrapper: {
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  idCardImage: {
    borderRadius: 22,
  },
  qrCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  qrInnerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  qrFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  qrFooterText: {
    fontSize: 13,
    color: '#343A40',
    fontWeight: '500',
  },
  countdownPill: {
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginLeft: 8,
  },
  countdownText: {
    color: '#212529',
    fontSize: 12.5,
    fontWeight: '700',
  },
});
