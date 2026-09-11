import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const customIcons: Record<string, any> = {
  'logo-1': require('../assets/icons/logo1.png'),
  'logo-2': require('../assets/icons/logo2.png'),
  'sponsor-details-icon': require('../assets/icons/sponsor-details-icon.png'),
  'health-insurance-icon': require('../assets/icons/health-insurance-icon.png'),
  'hajj-details-icon': require('../assets/icons/hajj-details-icon.png'),
  'empty-documents': require('../assets/icons/empty-documents.png'),
};

interface AppIconProps {
  name: any;
  size?: number;
  color?: string;
  library?: 'ionicons' | 'mci';
  style?: StyleProp<ImageStyle>;
  pngKey?: string;
}

export function AppIcon({
  name,
  size = 24,
  color = '#000',
  library = 'ionicons',
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

  if (library === 'mci') {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }

  return <Ionicons name={name} size={size} color={color} />;
}

export default AppIcon;
