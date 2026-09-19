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

// 1. Home Tab Icon (Solid filled house with chimney and centered door)
const SvgHome = ({ size = 24, color = '#23A365' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M12 3L2 12h3v8a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-8h3L12 3z" />
    <Path d="M17 4.5v3.2l2 1.8V4.5h-2z" />
  </Svg>
);

// 2. Services Tab Icon (Solid crossed hammer and open-end wrench)
const SvgServices = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    {/* Hammer */}
    <Path d="M4.2 9.2L7 6.4l1.4 1.4-1.1 1.1 2.8 2.8 1.8-1.8c.4-.4 1-.4 1.4 0l.7.7-4.2 4.2-2.1-2.1c-.4-.4-.4-1 0-1.4l1.8-1.8-2.8-2.8 1.1-1.1-1.4-1.4-2.8 2.8c-.4.4-.4 1 0 1.4l.7.7z" />
    <Path d="M11 13l7.3 7.3c.6.6 1.5.6 2.1 0l.6-.6c.6-.6.6-1.5 0-2.1L13.7 10.3 11 13z" />
    {/* Wrench */}
    <Path d="M19.8 4.2a4.2 4.2 0 0 0-5.5.6l2.1 2.1-1.4 1.4-2.1-2.1a4.2 4.2 0 0 0-.6 5.5l-8.1 8.1c-.6.6-.6 1.5 0 2.1l.6.6c.6.6 1.5.6 2.1 0l8.1-8.1a4.2 4.2 0 0 0 5.5-.6 4.2 4.2 0 0 0-.7-5.6z" />
  </Svg>
);

// 3. Family Tab Icon (Two solid filled people silhouettes: adult & child)
const SvgFamily = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Circle cx="8" cy="9" r="2.8" />
    <Path d="M4 19c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5v1H4v-1z" />
    <Circle cx="16" cy="8" r="3.2" />
    <Path d="M13.5 19v-1c0-1.2.4-2.2 1.1-3 1-.8 2.4-1.2 3.9-1.2s3.5 1.5 3.5 4.2v1h-8.5z" />
  </Svg>
);

// 4. Workers Tab Icon (Solid filled briefcase / toolbox with handle)
const SvgWorkers = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M9 5h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v2H4V9a2 2 0 0 1 2-2h2V6a1 1 0 0 1 1-1zm1 2h4V6.5h-4V7z" />
    <Path d="M4 12.5h6v1.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.5h6V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.5z" />
  </Svg>
);

// 5. Other Tab Icon (4 solid filled rounded squares)
const SvgOther = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2" />
    <Rect x="13" y="3.5" width="7.5" height="7.5" rx="2" />
    <Rect x="3.5" y="13" width="7.5" height="7.5" rx="2" />
    <Rect x="13" y="13" width="7.5" height="7.5" rx="2" />
  </Svg>
);

// 6. Car Outline (My Vehicles)
const SvgCar = ({ size = 24, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M3 11h18v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="7" cy="14" r="1.5" fill={color} />
    <Circle cx="17" cy="14" r="1.5" fill={color} />
  </Svg>
);

// 7. Fingerprint (Authentication Services)
const SvgFingerprint = ({ size = 26, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2a9.96 9.96 0 0 0-7.07 2.93A10 10 0 0 0 2 12c0 2.2.72 4.24 1.93 5.88M12 6a5.98 5.98 0 0 0-4.24 1.76A6 6 0 0 0 6 12c0 1.33.43 2.55 1.16 3.54M12 10a2 2 0 0 0-2 2c0 .44.14.85.39 1.18M12 2c2.76 0 5.26 1.12 7.07 2.93A10 10 0 0 1 22 12c0 4.14-2.52 7.69-6.13 9.21M12 6c1.66 0 3.16.67 4.24 1.76A6 6 0 0 1 18 12c0 2.76-1.68 5.13-4.08 6.14M12 10a2 2 0 0 1 2 2c0 .88-.57 1.63-1.37 1.89"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

// 8. Folded Map (Absher Travel)
const SvgMap = ({ size = 26, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zM9 3v15M15 6v15"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 9. Report Minor Accident (Car with Siren Light on Roof)
const SvgAccidentCar = ({ size = 26, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Siren light */}
    <Path d="M11 2h2v2h-2z" fill={color} />
    <Path d="M8 3.2l1 1.3M16 3.2l-1 1.3" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    {/* Car body */}
    <Path
      d="M5 12l1.5-4.5A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.5L19 12M3 12h18v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="7.5" cy="15" r="1.5" fill={color} />
    <Circle cx="16.5" cy="15" r="1.5" fill={color} />
  </Svg>
);

// 10. Update Resident Photo (User in Circle)
const SvgUserCircle = ({ size = 26, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.8} />
    <Circle cx="12" cy="9" r="3.3" stroke={color} strokeWidth={1.8} />
    <Path
      d="M6 18.5c1.5-2.6 3.7-3.8 6-3.8s4.5 1.2 6 3.8"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

// 11. My Weapons (Handgun / Pistol Silhouette)
const SvgPistol = ({ size = 24, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 8h-9l-1-2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4l1 7a2 2 0 0 0 2 1.8h3a1 1 0 0 0 1-1l.7-6.8H21a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-9 4h-2l-.5-2.5h2.5L12 12z"
      fill={color}
    />
  </Svg>
);

// 12. Chat Speech Bubble with 3 Dots (Survey Banner & FAB)
const SvgChatDots = ({ size = 24, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="8.5" cy="11.5" r="1.1" fill={color} />
    <Circle cx="12" cy="11.5" r="1.1" fill={color} />
    <Circle cx="15.5" cy="11.5" r="1.1" fill={color} />
  </Svg>
);

// 13. Settings Gear
const SvgSettings = ({ size = 24, color = '#1E6B4E' }: { size?: number; color?: string }) => (
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

// 14. Notification Bell
const SvgBell = ({ size = 24, color = '#1E6B4E' }: { size?: number; color?: string }) => (
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

// 15. Search Magnifying Glass
const SvgSearch = ({ size = 24, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" />
    <Line x1="16.5" y1="16.5" x2="21" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

// 16. Arrow Back
const SvgArrowBack = ({ size = 24, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 12H5M12 19l-7-7 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 17. Close X
const SvgClose = ({ size = 24, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 18. Document Outline
const SvgDocumentText = ({ size = 26, color = '#1E6B4E' }: { size?: number; color?: string }) => (
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

// 19. User Outline (person-outline)
const SvgUserOutline = ({ size = 26, color = '#1E6B4E' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="7.5" r="3.8" stroke={color} strokeWidth={1.8} />
    <Path
      d="M5 20.5v-1.5A5.5 5.5 0 0 1 10.5 13.5h3a5.5 5.5 0 0 1 5.5 5.5v1.5"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// 20. Chevron Right Arrow
const SvgChevronRight = ({ size = 20, color = '#8C9991' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// 21. 3 Horizontal Dots
const SvgDots = ({ size = 24, color = '#8E9590' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="5" cy="12" r="1.8" fill={color} />
    <Circle cx="12" cy="12" r="1.8" fill={color} />
    <Circle cx="19" cy="12" r="1.8" fill={color} />
  </Svg>
);

import {
  TabHomeIcon,
  TabServicesIcon,
  TabFamilyIcon,
  TabWorkersIcon,
  TabOtherIcon,
  GridOutlineIcon,
  HeaderSearchIcon,
  HeaderSettingsIcon,
  HeaderNotificationsIcon,
  QuickVehiclesIcon,
  QuickFingerprintIcon,
  QuickTravelIcon,
  QuickAccidentCarIcon,
  QuickUserCircleIcon,
  QuickWeaponsIcon,
  ChatDotsIcon,
} from './ExtractedIcons';

const iconMap: Record<string, React.ComponentType<any>> = {
  // Navigation & Tabs
  'home': TabHomeIcon,
  'home-outline': TabHomeIcon,
  'services': TabServicesIcon,
  'construct': TabServicesIcon,
  'construct-outline': TabServicesIcon,
  'wrench': TabServicesIcon,
  'family': TabFamilyIcon,
  'people': TabFamilyIcon,
  'people-outline': TabFamilyIcon,
  'workers': TabWorkersIcon,
  'briefcase': TabWorkersIcon,
  'briefcase-outline': TabWorkersIcon,
  'other': TabOtherIcon,
  'grid': TabOtherIcon,
  'grid-outline': GridOutlineIcon,
  'apps': TabOtherIcon,
  'apps-outline': GridOutlineIcon,
  'view-digital-documents': GridOutlineIcon,
  'ellipsis-horizontal': SvgDots,
  'dots-horizontal': SvgDots,
  'more-horizontal': SvgDots,

  // Header Actions
  'search': HeaderSearchIcon,
  'search-outline': HeaderSearchIcon,
  'settings': HeaderSettingsIcon,
  'settings-outline': HeaderSettingsIcon,
  'gear': HeaderSettingsIcon,
  'notifications': HeaderNotificationsIcon,
  'notifications-outline': HeaderNotificationsIcon,
  'bell': HeaderNotificationsIcon,

  // Quick Access & Services
  'car': QuickVehiclesIcon,
  'car-outline': QuickVehiclesIcon,
  'fingerprint': QuickFingerprintIcon,
  'finger-print': QuickFingerprintIcon,
  'finger-print-outline': QuickFingerprintIcon,
  'map': QuickTravelIcon,
  'map-outline': QuickTravelIcon,
  'car-emergency': QuickAccidentCarIcon,
  'car-sport': QuickAccidentCarIcon,
  'car-sport-outline': QuickAccidentCarIcon,
  'person-circle': QuickUserCircleIcon,
  'person-circle-outline': QuickUserCircleIcon,
  'account-circle': QuickUserCircleIcon,
  'account-circle-outline': QuickUserCircleIcon,
  'pistol': QuickWeaponsIcon,
  'pistol-outline': QuickWeaponsIcon,
  'gun': QuickWeaponsIcon,
  'weapon': QuickWeaponsIcon,

  // Chat & Survey
  'chatbubble': ChatDotsIcon,
  'chatbubble-outline': ChatDotsIcon,
  'chatbubble-ellipses': ChatDotsIcon,
  'chatbubble-ellipses-outline': ChatDotsIcon,
  'message': ChatDotsIcon,
  'comment': ChatDotsIcon,

  // Common
  'person': SvgUserOutline,
  'person-outline': SvgUserOutline,
  'user': SvgUserOutline,
  'chevron-forward': SvgChevronRight,
  'chevron-right': SvgChevronRight,
  'arrow-back': SvgArrowBack,
  'arrow-back-outline': SvgArrowBack,
  'close': SvgClose,
  'close-outline': SvgClose,
  'document-text': SvgDocumentText,
  'document-text-outline': SvgDocumentText,
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
  color = '#1E6B4E',
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

  const SvgComponent = iconMap[name] || iconMap[name?.toLowerCase()] || SvgOther;

  return (
    <View style={style as any}>
      <SvgComponent size={size} color={color} />
    </View>
  );
}

export const Ionicons = ({
  name,
  size = 24,
  color = '#1E6B4E',
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
