import React from 'react';
import { Image, ImageStyle, StyleProp, View } from 'react-native';
import {
  Home,
  LayoutGrid,
  Users,
  User,
  UserCircle,
  Briefcase,
  MoreHorizontal,
  Settings,
  Bell,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  X,
  MessageSquare,
  MessageCircle,
  CreditCard,
  Car,
  Fingerprint,
  Plane,
  AlertCircle,
  Shield,
  ShieldCheck,
  Globe,
  Sliders,
  FileText,
  File,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  Lock,
  RefreshCw,
  Download,
  Share2,
  Info,
  CheckCircle2,
  CheckSquare,
  CheckCheck,
  Clock,
  Phone,
  Mail,
  Building,
  BookOpen,
  Calendar,
  Package,
  Map,
  Heart,
  Smartphone,
  Copy,
  QrCode,
  Sparkles,
  CircleHelp,
} from 'lucide-react-native';

export const customIcons: Record<string, any> = {
  'logo-1': require('../assets/icons/logo1.png'),
  'logo-2': require('../assets/icons/logo2.png'),
  'sponsor-details-icon': require('../assets/icons/sponsor-details-icon.png'),
  'health-insurance-icon': require('../assets/icons/health-insurance-icon.png'),
  'hajj-details-icon': require('../assets/icons/hajj-details-icon.png'),
  'empty-documents': require('../assets/icons/empty-documents.png'),
};

const iconMap: Record<string, React.ComponentType<any>> = {
  // Navigation / Tabs
  'home': Home,
  'home-outline': Home,
  'grid': LayoutGrid,
  'grid-outline': LayoutGrid,
  'people': Users,
  'people-outline': Users,
  'briefcase': Briefcase,
  'briefcase-outline': Briefcase,
  'ellipsis-horizontal': MoreHorizontal,
  'ellipsis-horizontal-outline': MoreHorizontal,
  'ellipsis-vertical': MoreHorizontal,
  'apps': LayoutGrid,
  'apps-outline': LayoutGrid,

  // User & Profile
  'person': User,
  'person-outline': User,
  'person-circle': UserCircle,
  'person-circle-outline': UserCircle,
  'body-outline': User,
  'finger-print': Fingerprint,
  'finger-print-outline': Fingerprint,

  // Actions & Controls
  'settings': Settings,
  'settings-outline': Settings,
  'options': Sliders,
  'options-outline': Sliders,
  'notifications': Bell,
  'notifications-outline': Bell,
  'search': Search,
  'search-outline': Search,
  'globe': Globe,
  'globe-outline': Globe,
  'close': X,
  'close-outline': X,
  'arrow-back': ArrowLeft,
  'arrow-forward': ArrowRight,
  'chevron-forward': ChevronRight,
  'chevron-back': ChevronLeft,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'log-out': LogOut,
  'log-out-outline': LogOut,
  'lock-closed': Lock,
  'lock-closed-outline': Lock,
  'refresh': RefreshCw,
  'refresh-outline': RefreshCw,
  'eye': Eye,
  'eye-outline': Eye,
  'eye-off': EyeOff,
  'eye-off-outline': EyeOff,

  // Communication & Messages
  'chatbubble': MessageCircle,
  'chatbubble-outline': MessageCircle,
  'chatbubble-ellipses': MessageSquare,
  'chatbubble-ellipses-outline': MessageSquare,
  'mail': Mail,
  'mail-outline': Mail,
  'call': Phone,
  'call-outline': Phone,

  // Documents & Cards
  'card': CreditCard,
  'card-outline': CreditCard,
  'document': FileText,
  'document-outline': FileText,
  'document-text': FileText,
  'document-text-outline': FileText,
  'copy': Copy,
  'copy-outline': Copy,
  'qr-code': QrCode,
  'qr-code-outline': QrCode,
  'trash': Trash2,
  'trash-outline': Trash2,
  'download': Download,
  'download-outline': Download,
  'share-social': Share2,
  'share-social-outline': Share2,

  // Travel & Vehicles
  'car': Car,
  'car-outline': Car,
  'car-sport': Car,
  'car-sport-outline': Car,
  'airplane': Plane,
  'airplane-outline': Plane,
  'map': Map,
  'map-outline': Map,

  // Security & Health
  'shield': Shield,
  'shield-outline': Shield,
  'shield-checkmark': ShieldCheck,
  'shield-checkmark-outline': ShieldCheck,
  'alert-circle': AlertCircle,
  'alert-circle-outline': AlertCircle,
  'information-circle': Info,
  'information-circle-outline': Info,
  'checkmark-circle': CheckCircle2,
  'checkmark-circle-outline': CheckCircle2,
  'checkbox': CheckSquare,
  'checkbox-outline': CheckSquare,
  'checkmark-done': CheckCheck,
  'checkmark-done-outline': CheckCheck,
  'heart': Heart,
  'heart-outline': Heart,

  // Services & Misc
  'time': Clock,
  'time-outline': Clock,
  'calendar': Calendar,
  'calendar-outline': Calendar,
  'cube': Package,
  'cube-outline': Package,
  'book': BookOpen,
  'book-outline': BookOpen,
  'business': Building,
  'business-outline': Building,
  'phone-portrait': Smartphone,
  'phone-portrait-outline': Smartphone,
  'sparkles': Sparkles,
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
  color = '#14200D',
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

  const SvgIcon = iconMap[name] || iconMap[name?.toLowerCase()] || CircleHelp;

  return (
    <View style={style as any}>
      <SvgIcon size={size} color={color} strokeWidth={2} />
    </View>
  );
}

export const Ionicons = ({
  name,
  size = 24,
  color = '#14200D',
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
