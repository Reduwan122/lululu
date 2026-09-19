// 100% Pixel-Perfect Authentic SVG Vector Icons matching Absher App Reference Screenshots
import React from 'react';
import Svg, { Path, Circle, Rect, Line, SvgProps } from 'react-native-svg';

export interface ExtractedIconProps extends SvgProps {
  size?: number;
  color?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. BOTTOM NAVIGATION TABS (Solid Icons)
// ─────────────────────────────────────────────────────────────────────────────

// Tab 1: Home (Solid House with Chimney and Centered Doorway)
export const TabHomeIcon = ({ size = 24, color = '#23A365', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Path d="M12 2.5L2 11.5h3v9a1 1 0 0 0 1 1h4v-5.5h4v5.5h4a1 1 0 0 0 1-1v-9h3L12 2.5z" />
    <Path d="M17 4v3.5l2 1.8V4h-2z" />
  </Svg>
);

// Tab 2: Services (Crossed Open-End Wrench and Screwdriver / Hammer)
export const TabServicesIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    {/* Screwdriver */}
    <Path d="M4.2 9.2L7 6.4l1.4 1.4-1.1 1.1 2.8 2.8 1.8-1.8c.4-.4 1-.4 1.4 0l.7.7-4.2 4.2-2.1-2.1c-.4-.4-.4-1 0-1.4l1.8-1.8-2.8-2.8 1.1-1.1-1.4-1.4-2.8 2.8c-.4.4-.4 1 0 1.4l.7.7z" />
    <Path d="M11 13l7.3 7.3c.6.6 1.5.6 2.1 0l.6-.6c.6-.6.6-1.5 0-2.1L13.7 10.3 11 13z" />
    {/* Open-End Wrench */}
    <Path d="M19.8 4.2a4.2 4.2 0 0 0-5.5.6l2.1 2.1-1.4 1.4-2.1-2.1a4.2 4.2 0 0 0-.6 5.5l-8.1 8.1c-.6.6-.6 1.5 0 2.1l.6.6c.6.6 1.5.6 2.1 0l8.1-8.1a4.2 4.2 0 0 0 5.5-.6 4.2 4.2 0 0 0-.7-5.6z" />
  </Svg>
);

// Tab 3: Family (Two Figures: Adult on Left, Child on Right)
export const TabFamilyIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Circle cx="8" cy="8.5" r="2.8" />
    <Path d="M4 19c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5v1H4v-1z" />
    <Circle cx="16" cy="10" r="2.3" />
    <Path d="M13.5 19.5v-.8c0-1.8 1.6-3.2 3.5-3.2s3.5 1.4 3.5 3.2v.8h-7z" />
  </Svg>
);

// Tab 4: Workers (Solid Briefcase / Toolbox with Handle)
export const TabWorkersIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Path d="M9 5.5h6a1 1 0 0 1 1 1v1h2.5a2 2 0 0 1 2 2v2H3.5v-2a2 2 0 0 1 2-2H8v-1a1 1 0 0 1 1-1zm1.5 2h3V6.8h-3V7.5z" />
    <Path d="M3.5 13h6.2v1.5a1 1 0 0 0 1 1h2.6a1 1 0 0 0 1-1V13h6.2v5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-5z" />
  </Svg>
);

// Tab 5: Other (EXACT 4 Rounded Squares in 2x2 Grid, matching screenshot)
export const TabOtherIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Rect x="3.5" y="3.5" width="7" height="7" rx="2" />
    <Rect x="13.5" y="3.5" width="7" height="7" rx="2" />
    <Rect x="3.5" y="13.5" width="7" height="7" rx="2" />
    <Rect x="13.5" y="13.5" width="7" height="7" rx="2" />
  </Svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// 2. TOP HEADER BAR (Delicate Line-Art / Outline Icons)
// ─────────────────────────────────────────────────────────────────────────────

// Search: Delicate Outline Magnifying Glass
export const HeaderSearchIcon = ({ size = 22, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx="10.5" cy="10.5" r="6.8" stroke={color} strokeWidth={1.8} />
    <Line x1="15.8" y1="15.8" x2="21" y2="21" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

// Settings: Delicate Outline Gear
export const HeaderSettingsIcon = ({ size = 22, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth={1.8} />
    <Path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Notifications: Delicate Outline Bell
export const HeaderNotificationsIcon = ({ size = 22, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// 3. QUICK ACCESS SECTION (Pixel-Perfect Outline & Solid Icons)
// ─────────────────────────────────────────────────────────────────────────────

// My Vehicles: Clean Outline Car Front with Headlights
export const QuickVehiclesIcon = ({ size = 24, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 11l1.6-4.5A2 2 0 0 1 8.5 5h7a2 2 0 0 1 1.9 1.5L19 11M3 11h18v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="7" cy="14.2" r="1.4" fill={color} />
    <Circle cx="17" cy="14.2" r="1.4" fill={color} />
  </Svg>
);

// Authentication Services: 100% Authentic Biometric Fingerprint (from Absher APK icon_biometric_fingerprint.svg)
export const QuickFingerprintIcon = ({ size = 26, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-41.0 -489.0 593.9 585.4" fill="none" {...props}>
    <Path
      fill={color}
      d="M48-192Q50-280 109-339Q168-398 256-400Q304-400 344-380Q385-361 414-327Q430-312 448-325Q463-341 450-359Q415-400 365-424Q315-448 256-448Q184-447 127-413Q69-379 35-321Q1-264 0-192L0-152Q2-130 24-128Q46-130 48-152L48-192M507-245Q500-266 478-263Q457-257 460-235Q464-214 464-192L464-152Q466-130 488-128Q510-130 512-152L512-192Q512-219 507-245M256-368Q227-368 202-359Q190-355 188-344Q185-333 193-323Q205-311 223-316Q239-320 256-320Q310-319 347-283Q383-246 384-192L384-167Q384-129 380-92Q379-80 386-72Q392-64 404-64Q423-65 427-84Q432-125 432-167L432-192Q430-267 381-316Q331-366 256-368M151-299Q143-307 134-308Q124-308 117-300Q81-254 80-192L80-167Q80-131 72-95Q70-83 77-74Q84-64 96-64Q113-65 118-81Q128-124 128-167L128-192Q129-233 151-265Q162-283 151-299M256-288Q215-287 188-260Q161-233 160-192L160-167Q160-113 146-61Q144-50 150-41Q156-32 168-32Q183-33 188-47Q204-106 204-167L204-192Q205-214 219-229Q234-243 256-244Q278-243 293-229Q307-214 308-192L308-167Q308-113 298-59Q296-48 302-40Q309-32 319-32Q336-33 340-49Q352-107 352-167L352-192Q351-233 324-260Q297-287 256-288M280-192Q278-214 256-216Q234-214 232-192L232-167Q232-76 200 8L194 23Q188 45 207 54Q229 60 238 41L244 25Q280-68 280-167"
    />
  </Svg>
);

// Absher Travel: 3-Panel Folded Outline Map
export const QuickTravelIcon = ({ size = 26, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zM9 3v15M15 6v15"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Report Minor Accident: Outline Car with Emergency Roof Siren
export const QuickAccidentCarIcon = ({ size = 26, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    {/* Roof Siren light */}
    <Path d="M11 2h2v2.5h-2z" fill={color} />
    <Path d="M8 3.2l1 1.2M16 3.2l-1 1.2" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    {/* Car body */}
    <Path
      d="M5 12l1.6-4.5A2 2 0 0 1 8.5 6h7a2 2 0 0 1 1.9 1.5L19 12M3 12h18v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="7" cy="15.2" r="1.4" fill={color} />
    <Circle cx="17" cy="15.2" r="1.4" fill={color} />
  </Svg>
);

// Update Resident Photo: Outline Circle with User Head & Shoulders
export const QuickUserCircleIcon = ({ size = 26, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
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

// My Weapons: Sleek Solid Green Handgun Silhouette (pointing left)
export const QuickWeaponsIcon = ({ size = 24, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Path d="M21 8h-9l-1-2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4l1 7a2 2 0 0 0 2 1.8h3a1 1 0 0 0 1-1l.7-6.8H21a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-9 4h-2l-.5-2.5h2.5L12 12z" />
  </Svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// 4. SURVEY BANNER & CHAT FLOATING ACTION BUTTON (FAB)
// ─────────────────────────────────────────────────────────────────────────────

// Chat Speech Bubble with 3 Horizontal Dots
export const ChatDotsIcon = ({
  size = 24,
  color = '#FFFFFF',
  dotsColor,
  ...props
}: ExtractedIconProps & { dotsColor?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="8.5" cy="11.5" r="1.1" fill={dotsColor || color} />
    <Circle cx="12" cy="11.5" r="1.1" fill={dotsColor || color} />
    <Circle cx="15.5" cy="11.5" r="1.1" fill={dotsColor || color} />
  </Svg>
);

// Solid filled speech bubble for Survey Banner green badge
export const SurveyChatIcon = ({ size = 20, color = '#FFFFFF', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
      fill={color}
    />
    <Circle cx="7.5" cy="10" r="1.3" fill="#1E6B4E" />
    <Circle cx="12" cy="10" r="1.3" fill="#1E6B4E" />
    <Circle cx="16.5" cy="10" r="1.3" fill="#1E6B4E" />
  </Svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRY DICTIONARY
// ─────────────────────────────────────────────────────────────────────────────
export const extractedIconRegistry: Record<string, React.ComponentType<ExtractedIconProps>> = {
  // Tabs
  'tab-home': TabHomeIcon,
  'tab-services': TabServicesIcon,
  'tab-family': TabFamilyIcon,
  'tab-workers': TabWorkersIcon,
  'tab-other': TabOtherIcon,

  // Header
  'header-search': HeaderSearchIcon,
  'header-settings': HeaderSettingsIcon,
  'header-notifications': HeaderNotificationsIcon,

  // Quick Access
  'quick-vehicles': QuickVehiclesIcon,
  'quick-fingerprint': QuickFingerprintIcon,
  'quick-travel': QuickTravelIcon,
  'quick-accident': QuickAccidentCarIcon,
  'quick-user': QuickUserCircleIcon,
  'quick-weapons': QuickWeaponsIcon,
  'chat-dots': ChatDotsIcon,
  'survey-chat': SurveyChatIcon,
};
