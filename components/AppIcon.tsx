import React from 'react';
import { Image, ImageStyle, StyleProp, View } from 'react-native';
import Svg, { Path, Circle, Rect, G, Line } from 'react-native-svg';

export const customIcons: Record<string, any> = {
  'logo-1': require('../assets/icons/logo1.png'),
  'logo-2': require('../assets/icons/logo2.png'),
  'sponsor-details-icon': require('../assets/icons/sponsor-details-icon.png'),
  'health-insurance-icon': require('../assets/icons/health-insurance-icon.png'),
  'hajj-details-icon': require('../assets/icons/hajj-details-icon.png'),
  'empty-documents': require('../assets/icons/empty-documents.png'),
  'iqama-card': require('../assets/extracted/iqama_card_full.png'),
  'profile-user': require('../assets/images/profile_user.png'),
};

// 1. Equalizer / Sliders (Top Header Left 1)
const SvgTuneVertical = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line x1="6" y1="3" x2="6" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Line x1="12" y1="3" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Line x1="18" y1="3" x2="18" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Line x1="4" y1="8" x2="8" y2="8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <Line x1="10" y1="16" x2="14" y2="16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <Line x1="16" y1="11" x2="20" y2="11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </Svg>
);

// 2. Globe with Lat/Long (Top Header Left 2)
const SvgGlobe = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
    <Path
      d="M12 3a13 13 0 0 1 4 9 13 13 0 0 1-4 9 13 13 0 0 1-4-9 13 13 0 0 1 4-9z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <Line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

// 3. Notification Bell (Top Header Right 1)
const SvgBell = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 4. Search Magnifying Glass (Top Header Right 2)
const SvgSearch = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" />
    <Line x1="16.5" y1="16.5" x2="21" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

// 5. Chevron Right Arrow
const SvgChevronRight = ({ size = 20, color = '#8C9991' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 6. User Outline (Avatar Placeholder)
const SvgUserOutline = ({ size = 24, color = '#8C9991' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
    <Path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

// 7. Chat Speech Bubble (Survey Banner & FAB)
const SvgChatBubble = ({ size = 24, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 8. Digital ID Credit Card (My Digital Documents)
const SvgCreditCard = ({ size = 36, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size * 0.72} viewBox="0 0 40 28" fill="none">
    <Rect x="2" y="2" width="36" height="24" rx="4" stroke={color} strokeWidth="2.2" />
    <Line x1="2" y1="9" x2="38" y2="9" stroke={color} strokeWidth="2.2" />
    <Rect x="6" y="15" width="8" height="6" rx="1.5" stroke={color} strokeWidth="2" />
  </Svg>
);

// 9. Car Outline (My Vehicles)
const SvgCar = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M3 11h18v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="7" cy="14" r="1.5" fill={color} />
    <Circle cx="17" cy="14" r="1.5" fill={color} />
  </Svg>
);

// 10. Fingerprint (Authentication Services)
const SvgFingerprint = ({ size = 26, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2a9.96 9.96 0 0 0-7.07 2.93A10 10 0 0 0 2 12c0 2.2.72 4.24 1.93 5.88M12 6a5.98 5.98 0 0 0-4.24 1.76A6 6 0 0 0 6 12c0 1.33.43 2.55 1.16 3.54M12 10a2 2 0 0 0-2 2c0 .44.14.85.39 1.18M12 2c2.76 0 5.26 1.12 7.07 2.93A10 10 0 0 1 22 12c0 4.14-2.52 7.69-6.13 9.21M12 6c1.66 0 3.16.67 4.24 1.76A6 6 0 0 1 18 12c0 2.76-1.68 5.13-4.08 6.14M12 10a2 2 0 0 1 2 2c0 .88-.57 1.63-1.37 1.89"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
);

// 11. Airplane (Absher Travel)
const SvgAirplane = ({ size = 26, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 20 2.5s-3.5-1-5 .5L11.5 6.5 3.3 4.7a1 1 0 0 0-1.1 1.4l3.5 4.3-3.2 3.2L1 13.1a.8.8 0 0 0-1.1.2.8.8 0 0 0 .2 1.1l2.5 1.8 1.8 2.5a.8.8 0 0 0 1.1.2.8.8 0 0 0 .2-1.1l-.5-1.5 3.2-3.2 4.3 3.5a1 1 0 0 0 1.4-1.1l-1.8-8.2"
      transform="rotate(-45 12 12)"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 12. Alert Circle / Exclamation (Report Minor Accidents)
const SvgAlertCircle = ({ size = 26, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" />
    <Line x1="12" y1="8" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Circle cx="12" cy="16" r="1" fill={color} />
  </Svg>
);

// 13. Account Circle Outline (Update Resident Profile)
const SvgAccountCircle = ({ size = 26, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" />
    <Circle cx="12" cy="9" r="3.2" stroke={color} strokeWidth="1.8" />
    <Path d="M6 18.5c1.5-2.5 3.6-3.7 6-3.7s4.5 1.2 6 3.7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

// 14. Shield Outline (My Weapons)
const SvgShield = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 15. Home Tab Icon
const SvgHome = ({ size = 24, color = '#22C55E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 14 20v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5A1.5 1.5 0 0 1 8.5 21.5h-4A1.5 1.5 0 0 1 3 20v-9.5z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color === '#22C55E' || color === '#23A365' || color === '#1EAE66' ? color : 'none'}
    />
  </Svg>
);

// 16. Services Tab Icon (4 Squares Grid)
const SvgGrid = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="7.5" height="7.5" rx="2" stroke={color} strokeWidth="1.8" />
    <Rect x="13.5" y="3" width="7.5" height="7.5" rx="2" stroke={color} strokeWidth="1.8" />
    <Rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" stroke={color} strokeWidth="1.8" />
    <Rect x="3" y="13.5" width="7.5" height="7.5" rx="2" stroke={color} strokeWidth="1.8" />
  </Svg>
);

// 17. Family Tab Icon (People / Users)
const SvgFamily = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx="9" cy="7" r="4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 18. Workers Tab Icon (Briefcase)
const SvgWorkers = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="2" y="7" width="20" height="14" rx="2.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 12h20" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 19. Other Tab Icon (3 Horizontal Dots)
const SvgDots = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="5" cy="12" r="1.8" fill={color} />
    <Circle cx="12" cy="12" r="1.8" fill={color} />
    <Circle cx="19" cy="12" r="1.8" fill={color} />
  </Svg>
);

// 20. Settings Gear
const SvgSettings = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
    <Path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 21. Document Outline with Text Lines (My Documents)
const SvgDocumentText = ({ size = 26, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 22. Arrow Back
const SvgArrowBack = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 12H5M12 19l-7-7 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 23. Close X
const SvgClose = ({ size = 24, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 24. Public Services Icons
const SvgCheckbox = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="18" height="18" rx="4" stroke={color} strokeWidth="1.8" />
    <Path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const SvgBook = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const SvgCalendar = ({ size = 24, color = '#166444' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="4" width="18" height="18" rx="3" stroke={color} strokeWidth="1.8" />
    <Line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.8" />
  </Svg>
);

// Icon mapping dictionary
const iconMap: Record<string, React.ComponentType<any>> = {
  // Top Header Icons
  'tune-vertical': SvgTuneVertical,
  'tune': SvgTuneVertical,
  'sliders': SvgTuneVertical,
  'globe': SvgGlobe,
  'globe-outline': SvgGlobe,
  'notifications': SvgBell,
  'notifications-outline': SvgBell,
  'bell': SvgBell,
  'search': SvgSearch,
  'search-outline': SvgSearch,
  'settings': SvgSettings,
  'settings-outline': SvgSettings,
  'gear': SvgSettings,
  'arrow-back': SvgArrowBack,
  'arrow-back-outline': SvgArrowBack,
  'close': SvgClose,
  'close-outline': SvgClose,

  // General & Navigation
  'chevron-forward': SvgChevronRight,
  'chevron-right': SvgChevronRight,
  'person': SvgUserOutline,
  'person-outline': SvgUserOutline,
  'user': SvgUserOutline,

  // Chat & Survey
  'chatbubble': SvgChatBubble,
  'chatbubble-outline': SvgChatBubble,
  'chatbubble-ellipses': SvgChatBubble,
  'chatbubble-ellipses-outline': SvgChatBubble,
  'message': SvgChatBubble,
  'comment': SvgChatBubble,

  // Digital ID & Documents
  'card': SvgCreditCard,
  'card-outline': SvgCreditCard,
  'credit-card': SvgCreditCard,
  'credit-card-outline': SvgCreditCard,

  // Quick Access
  'car': SvgCar,
  'car-outline': SvgCar,
  'fingerprint': SvgFingerprint,
  'finger-print': SvgFingerprint,
  'finger-print-outline': SvgFingerprint,
  'airplane': SvgAirplane,
  'airplane-outline': SvgAirplane,
  'plane': SvgAirplane,
  'map': SvgAirplane, // fallback if caller requested map
  'alert-circle': SvgAlertCircle,
  'alert-circle-outline': SvgAlertCircle,
  'account-circle': SvgAccountCircle,
  'account-circle-outline': SvgAccountCircle,
  'person-circle': SvgAccountCircle,
  'person-circle-outline': SvgAccountCircle,
  'shield': SvgShield,
  'shield-outline': SvgShield,
  'shield-check': SvgShield,
  'shield-check-outline': SvgShield,

  // Tabs
  'home': SvgHome,
  'home-outline': SvgHome,
  'services': SvgGrid,
  'grid': SvgGrid,
  'grid-outline': SvgGrid,
  'apps': SvgGrid,
  'apps-outline': SvgGrid,
  'construct': SvgGrid,
  'construct-outline': SvgGrid,
  'family': SvgFamily,
  'people': SvgFamily,
  'people-outline': SvgFamily,
  'workers': SvgWorkers,
  'briefcase': SvgWorkers,
  'briefcase-outline': SvgWorkers,
  'other': SvgDots,
  'ellipsis-horizontal': SvgDots,
  'dots-horizontal': SvgDots,
  'more-horizontal': SvgDots,

  // Public Services
  'checkbox-outline': SvgCheckbox,
  'book-outline': SvgBook,
  'calendar-outline': SvgCalendar,
  'document-text': SvgDocumentText,
  'document-text-outline': SvgDocumentText,
  'file-text': SvgDocumentText,
  'document': SvgDocumentText,
};

export interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
  library?: 'ionicons' | 'mci';
  style?: StyleProp<ImageStyle>;
  pngKey?: string;
}

export function AppIcon({
  name,
  size = 24,
  color = '#166444',
  style,
  pngKey,
}: AppIconProps) {
  const key = pngKey || name;
  if (customIcons[key]) {
    return (
      <Image
        source={customIcons[key]}
        style={[{ width: size, height: size }, style]}
        resizeMode="contain"
      />
    );
  }

  const SvgComponent = iconMap[name] || iconMap[name?.toLowerCase()] || SvgGrid;

  return (
    <View style={style as any}>
      <SvgComponent size={size} color={color} />
    </View>
  );
}

export const Ionicons = ({
  name,
  size = 24,
  color = '#166444',
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}) => {
  return <AppIcon name={name} size={size} color={color} style={style} />;
};

export const MaterialCommunityIcons = Ionicons;

export default AppIcon;
