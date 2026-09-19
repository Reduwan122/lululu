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

// Authentication Services: 100% Exact Biometric Fingerprint (matching media_1789847762105.jpg)
export const QuickFingerprintIcon = ({ size = 26, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 909 969" fill={color} {...props}>
    <Path
      d="M451 2Q327 11 249 50Q229 60 220 66.5Q211 73 208 80Q203 91 208 103Q212 111 219 115.5Q226 120 235 120Q241 120 245 118.5Q249 117 256 113Q302 85 370 71Q438 57 518 60Q660 63 743 111Q755 118 759.5 119.5Q764 121 771 120Q783 118 790.5 107Q798 96 795 84Q793 77 788 72Q783 67 770 60Q697 18 584 5Q568 3 517 1.5Q466 0 451 2ZM457 112Q361 119 282.5 155.5Q204 192 145 256Q128 275 112.5 296.5Q97 318 94.5 328Q92 338 98 348.5Q104 359 115.5 362.5Q127 366 136 361Q145 356 155 341Q213 250 315 205Q366 182 436 172Q451 170 498.5 170Q546 170 563 172Q661 185 737 235Q767 255 792 279Q817 303 842 337Q853 352 858.5 357Q864 362 871 363Q886 366 897.5 354Q909 342 905 328Q903 318 882.5 292Q862 266 840 244Q724 128 550 112Q537 111 503.5 111Q470 111 457 112ZM466 221Q334 233 240 322Q195 365 167 417.5Q139 470 131 528Q128 546 127.5 585Q127 624 130 646Q134 686 142 728.5Q150 771 156 780Q162 791 174.5 793.5Q187 796 197.5 789Q208 782 210 769Q210 761 205 738Q191 675 188 616.5Q185 558 193.5 517.5Q202 477 226 435Q250 393 283 362Q345 303 431.5 284.5Q518 266 601 294Q662 314 713.5 360Q765 406 796 467Q809 493 814 516Q819 539 818 567Q817 584 816 591.5Q815 599 813 608Q803 640 784.5 658.5Q766 677 742 678Q726 680 707 674.5Q688 669 677 660Q666 651 658.5 633Q651 615 641 579Q633 552 629 540Q614 496 585 474Q556 452 510 450Q447 446 405 478Q380 497 366.5 531Q353 565 353 608Q353 638 359 668.5Q365 699 373 719Q402 783 450 834.5Q498 886 554 913Q572 922 595 929.5Q618 937 626 937Q639 937 647.5 928.5Q656 920 655 907Q654 886 630 880Q541 855 478 776Q459 753 442 722.5Q425 692 421 675Q415 652 413.5 621.5Q412 591 416 573Q423 536 447 521Q458 513 469 510.5Q480 508 500 508Q516 508 521.5 509Q527 510 534 512Q550 519 560.5 534.5Q571 550 579 581Q590 621 597.5 641Q605 661 614 675Q633 704 660.5 719Q688 734 728 737Q778 740 817.5 707.5Q857 675 872 616Q877 597 878 570.5Q879 544 876 523Q868 476 841 426.5Q814 377 773 335Q727 289 671 260.5Q615 232 553 223Q537 221 509.5 220Q482 219 466 221ZM462 333Q450 335 432.5 339Q415 343 404 346Q326 372 282 444.5Q238 517 240 615Q242 674 262.5 735.5Q283 797 318 849Q334 873 354 896Q374 919 381 922Q392 926 402.5 922Q413 918 419 908.5Q425 899 422 888Q420 881 406 866Q368 823 343 774.5Q318 726 306 669Q302 650 301.5 641.5Q301 633 301 605Q301 580 301.5 570Q302 560 305 549Q319 483 357 443Q389 409 436 397Q453 393 468 391.5Q483 390 506 391Q533 392 549.5 395.5Q566 399 586 409Q627 429 656 473Q685 517 697 576Q701 594 704 600.5Q707 607 713 611Q723 618 732.5 617Q742 616 750.5 607.5Q759 599 759 585Q759 571 749 537Q729 464 686.5 414.5Q644 365 584 345Q564 338 549 336Q534 334 504 333Q467 333 462 333ZM487 570Q475 576 471 589.5Q467 603 479 646Q501 726 552 774.5Q603 823 678 837Q701 841 736 840.5Q771 840 780 835Q789 830 793 820.5Q797 811 795 802Q794 797 789.5 791.5Q785 786 781 784Q777 782 738 781Q706 781 692.5 779.5Q679 778 659 772Q581 747 545 657Q541 646 536.5 629Q532 612 530 600Q528 588 524 581.5Q520 575 513 571Q500 565 487 570Z"
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

// My Weapons: 100% Exact Handgun Silhouette pointing right (matching media_1789847762105.jpg)
export const QuickWeaponsIcon = ({ size = 24, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-46 -526 668 668" fill="none" {...props}>
    <Path
      fill={color}
      d="M48 -392Q50 -414 72 -416Q94 -414 96 -392L96 -384L96 -384L544 -384L544 -384Q558 -384 567 -375Q576 -366 576 -352L576 -240L576 -240Q576 -226 567 -217Q558 -208 544 -208L534 -208L534 -208Q518 -207 509 -196Q500 -184 503 -168L543 -8L543 -8Q546 7 537 20Q528 32 512 32L416 32L416 32Q392 31 385 8L359 -96L359 -96L254 -96L254 -96Q236 -96 222 -106Q208 -116 202 -133L175 -208L175 -208L144 -208L144 -208Q131 -208 121 -217L99 -240L99 -240L32 -240L32 -240Q18 -240 9 -249Q0 -258 0 -272L0 -352L0 -352Q0 -366 9 -375Q18 -384 32 -384L48 -384L48 -384L48 -392ZM255 -144L347 -144L255 -144L347 -144L331 -208L331 -208L226 -208L226 -208L247 -149L247 -149Q249 -144 254 -144ZM496 -320L112 -320L496 -320L112 -320Q97 -319 96 -304Q97 -289 112 -288L496 -288L496 -288Q511 -289 512 -304Q511 -319 496 -320Z"
    />
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
