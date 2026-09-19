// 100% Pixel-Perfect Authentic SVG Vector Icons matching Absher App Reference Screenshots
import React from 'react';
import Svg, { Path, Circle, Rect, Line, SvgProps } from 'react-native-svg';

export interface ExtractedIconProps extends SvgProps {
  size?: number;
  color?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. BOTTOM NAVIGATION TABS (100% Authentic APK Vectors matching media_1789848717376.png)
// ─────────────────────────────────────────────────────────────────────────────

// Tab 1: Home (Authentic FontAwesome 6 house-chimney vector with chimney on right and central doorway)
export const TabHomeIcon = ({ size = 24, color = '#23A365', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-32 -512 640 640" fill="none" {...props}>
    <Path
      fill={color}
      d="M544 -160Q557 -161 566 -170Q575 -179 576 -192Q577 -206 565 -216L512 -263L512 -384Q512 -398 503 -407Q494 -416 480 -416L448 -416Q434 -416 425 -407Q416 -398 416 -384L416 -347L310 -441Q300 -448 289 -448Q278 -449 267 -440L10 -216Q0 -206 0 -192Q0 -179 9 -170Q18 -161 32 -160L64 -160L64 -91Q64 -89 64 -88L64 24Q64 41 76 52Q87 64 104 64L120 64Q122 64 124 64Q125 64 126 64Q127 64 128 64L160 64L184 64Q201 64 212 52Q223 41 224 24L224 0L224 -64Q224 -78 233 -87Q242 -96 256 -96L320 -96Q334 -96 343 -87Q352 -78 352 -64L352 0L352 24Q352 41 364 52Q375 64 392 64L416 64L448 64Q451 64 453 64Q454 64 456 64L472 64Q489 64 500 52Q511 41 512 24L512 8Q512 4 512 0L512 -160L544 -160Z"
    />
  </Svg>
);

// Tab 2: Services (Authentic FontAwesome 6 screwdriver-wrench crossed tools vector)
export const TabServicesIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-37 -485 580 580" fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M79 -443Q62 -454 47 -441L7 -401Q-6 -386 5 -369L85 -265Q92 -256 104 -256L158 -256L267 -147Q256 -125 260 -100Q263 -76 281 -57L393 55Q403 64 416 64Q429 64 439 55L503 -9Q512 -19 512 -32Q512 -45 503 -55L391 -167Q372 -185 348 -188Q323 -192 301 -181L192 -290L192 -344Q192 -356 183 -363L79 -443ZM20 -52Q0 -32 0 -4Q1 25 20 44Q39 63 68 64Q96 64 116 44L234 -74Q222 -106 230 -139L168 -201L20 -52ZM512 -304Q512 -320 509 -334Q506 -343 499 -345Q491 -346 485 -340L421 -277Q416 -272 409 -272L352 -272Q337 -273 336 -288L336 -345Q336 -352 341 -357L405 -421Q411 -427 409 -435Q407 -442 399 -445Q384 -448 368 -448Q307 -446 266 -406Q226 -365 224 -304L224 -303L309 -218Q337 -225 364 -218Q392 -210 413 -189L429 -173Q466 -191 489 -226Q511 -260 512 -304ZM56 -16Q58 -38 80 -40Q102 -38 104 -16Q102 6 80 8Q58 6 56 -16Z"
    />
  </Svg>
);

// Tab 3: Family (Authentic FontAwesome 6 user-group vector: smaller behind on left, larger in front on right)
export const TabFamilyIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-30 -542 700 700" fill="none" {...props}>
    <Path
      fill={color}
      d="M544 -320Q544 -355 527 -384Q510 -413 480 -431Q450 -448 416 -448Q382 -448 352 -431Q322 -413 305 -384Q288 -355 288 -320Q288 -285 305 -256Q322 -227 352 -209Q382 -192 416 -192Q450 -192 480 -209Q510 -227 527 -256Q544 -285 544 -320ZM640 34Q638 -41 588 -92Q537 -142 462 -144L370 -144Q295 -142 244 -92Q194 -41 192 34Q192 47 201 55Q209 64 222 64L610 64Q623 64 631 55Q640 47 640 34ZM31 64L168 64Q160 50 160 32L160 24Q160 -22 179 -61Q197 -100 230 -128Q226 -128 223 -128L161 -128Q93 -126 47 -81Q2 -35 0 33Q0 46 9 55Q18 64 31 64ZM208 -192Q256 -193 287 -225Q257 -266 256 -320Q256 -361 274 -394Q246 -415 208 -416Q160 -415 129 -383Q97 -352 96 -304Q97 -256 129 -225Q160 -193 208 -192Z"
    />
  </Svg>
);

// Tab 4: Workers (Authentic FontAwesome 6 briefcase vector with handle, central clasp, and latch opening)
export const TabWorkersIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-34 -498 580 580" fill="none" {...props}>
    <Path
      fill={color}
      d="M184 -400L328 -400Q335 -399 336 -392L336 -352L176 -352L176 -392Q177 -399 184 -400ZM128 -392L128 -352L64 -352Q37 -351 19 -333Q1 -315 0 -288L0 -192L192 -192L512 -192L512 -288Q511 -315 493 -333Q475 -351 448 -352L384 -352L384 -392Q383 -416 368 -432Q352 -447 328 -448L184 -448Q160 -447 144 -432Q129 -416 128 -392ZM512 -160L320 -160L320 -128Q320 -114 311 -105Q302 -96 288 -96L224 -96Q210 -96 201 -105Q192 -114 192 -128L192 -160L0 -160L0 -32Q1 -5 19 13Q37 31 64 32L448 32Q475 31 493 13Q511 -5 512 -32L512 -160Z"
    />
  </Svg>
);

// Tab 5: Other (Authentic 4 Rounded Squares in 2x2 Grid matching media_1789848717376.png)
export const TabOtherIcon = ({ size = 24, color = '#8E9590', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Rect x="3" y="3" width="8" height="8" rx="2" />
    <Rect x="13" y="3" width="8" height="8" rx="2" />
    <Rect x="3" y="13" width="8" height="8" rx="2" />
    <Rect x="13" y="13" width="8" height="8" rx="2" />
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
export const QuickWeaponsIcon = ({ size = 26, color = '#1E6B4E', ...props }: ExtractedIconProps) => (
  <Svg width={size} height={size} viewBox="-46 -526 668 668" fill="none" {...props}>
    <Path
      fill={color}
      d="M528 -392Q526 -414 504 -416Q482 -414 480 -392L480 -384L480 -384L32 -384L32 -384Q18 -384 9 -375Q0 -366 0 -352L0 -240L0 -240Q0 -226 9 -217Q18 -208 32 -208L42 -208L42 -208Q58 -207 67 -196Q76 -184 73 -168L33 -8L33 -8Q30 7 39 20Q48 32 64 32L160 32L160 32Q184 31 191 8L217 -96L217 -96L322 -96L322 -96Q340 -96 354 -106Q368 -116 374 -133L401 -208L401 -208L432 -208L432 -208Q445 -208 455 -217L477 -240L477 -240L544 -240L544 -240Q558 -240 567 -249Q576 -258 576 -272L576 -352L576 -352Q576 -366 567 -375Q558 -384 544 -384L528 -384L528 -384L528 -392ZM321 -144L229 -144L321 -144L229 -144L245 -208L245 -208L350 -208L350 -208L329 -149L329 -149Q327 -144 322 -144ZM80 -320L464 -320L80 -320L464 -320Q479 -319 480 -304Q479 -289 464 -288L80 -288L80 -288Q65 -289 64 -304Q65 -319 80 -320Z"
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

// Solid filled speech bubble for Survey Banner green badge (100% exact vector matching media_1789848342786.png)
export const SurveyChatIcon = ({
  size = 22,
  color = '#FFFFFF',
  dotsColor = '#175438',
  ...props
}: ExtractedIconProps & { dotsColor?: string }) => (
  <Svg width={size} height={size} viewBox="-25 -472 560 560" fill="none" {...props}>
    <Path
      fill={color}
      d="M256 0Q328 -1 385 -28Q443 -56 477 -103Q511 -150 512 -208Q511 -266 477 -313Q443 -360 385 -388Q328 -415 256 -416Q184 -415 127 -388Q69 -360 35 -313Q1 -266 0 -208Q1 -139 48 -87Q43 -50 26 -24Q18 -10 11 -3Q8 1 6 3Q6 4 5 4L5 5Q-2 12 1 22Q6 32 16 32Q60 30 98 13Q133 -3 152 -18Q200 0 256 0Z"
    />
    <Circle cx="128" cy="-208" r="32" fill={dotsColor} />
    <Circle cx="256" cy="-208" r="32" fill={dotsColor} />
    <Circle cx="384" cy="-208" r="32" fill={dotsColor} />
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
