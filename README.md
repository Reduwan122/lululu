# Absher Individuals (أفراد) - Expo React Native Project

This is a fully reconstructed, workable **Expo React Native** project for the **Absher** application.

---

## Features

- **Authentication**:
  - Live Supabase Authentication integration.
  - Sign in with National ID / Iqama number + password.
  - Automatic session restore and redirection flow (redirects unauthenticated users to `/welcome`, and logged-in users to `/(tabs)`).
  - Forgot password portal link directly to the official Absher password reset service.
- **Home Dashboard**:
  - Quick digital ID card preview with direct shortcut to high-resolution verification.
  - Profile card with employee photo, full name, and ID number.
  - Quick access cards: Vehicles, Traffic Violations, Passports, Domestic Labor services.
  - Official Saudi Ministry of Interior and Absher logos.
- **My Digital Documents**:
  - Fullscreen landscape security document viewer with live 30-second security countdown refresh.
  - Paging carousel with verified digital ID card and high-resolution QR verification code.
  - Additional gesture-supported ID Card viewer with zoom and swipe inspection.
- **Document Portfolio**:
  - Resident ID / Iqama screen with copyable ID number, version, and validity dates.
  - Saudi Passport screen with passport number, type, issuing city, expiry date, and status.
  - Driving License screen with government service empty state.
  - Visa screen with status tracking.
  - Labor Importations screen.
  - Dynamic Document viewer with add/delete mock catalog.
- **Personal Details**:
  - Smooth animated collapsible sections (easeInEaseOut layout transitions).
  - Personal Information: Full Name, Birth City, Country/Region, Date of Birth, Marital Status, Religion, Work Permit, Biometrics Status, Travel Status.
  - Sponsor Details: Sponsor Name, Sponsor ID Number.
  - Health Insurance: Blood Type, Issuing Date, Expiry Date.
  - Hajj Details: Hajj Eligibility status pill, Last Year Performed.
- **Government Services & Other**:
  - Public & private e-services catalog (Register Newborn, Renew Driving License, Renew Resident ID, Authentication Services, Minor Accident Report, etc.).
  - Interactive service action simulator with realistic loading feedback.
  - Family members and sponsored domestic workers management tabs.
- **Settings & Preferences**:
  - Language toggle (English / Arabic).
  - Calendar system switcher (Gregorian / Hijri).
  - Push notifications toggle.
  - Biometrics / Face ID toggle.
  - One-tap sign out.

---

## Project Structure

```
Absher/
├── app/                        # Expo Router routes
│   ├── (tabs)/
│   │   ├── _layout.tsx         # Bottom tab navigator
│   │   ├── index.tsx           # Home screen
│   │   ├── services.tsx        # Services screen
│   │   ├── family.tsx          # Family members screen
│   │   ├── workers.tsx         # Domestic workers screen
│   │   ├── other.tsx           # Other public services
│   │   └── documents.tsx       # My Documents catalog
│   ├── _layout.tsx             # Root layout with session check & EmployeeProvider
│   ├── welcome.tsx             # Welcome landing page
│   ├── login.tsx               # Login screen
│   ├── profile.tsx             # User profile screen
│   ├── personal-details.tsx    # Accordion personal & sponsor details
│   ├── resident-id.tsx         # Resident ID / Iqama screen
│   ├── passport.tsx            # Passport details screen
│   ├── driving-license.tsx     # Driving license screen
│   ├── visa.tsx                # Visa screen
│   ├── labor-importations.tsx  # Labor importations screen
│   ├── digital-documents.tsx   # Landscape ID & QR viewer with timer
│   ├── document-viewer.tsx     # Landscape document viewer
│   ├── id-card-viewer.tsx      # Fullscreen swipe ID card viewer
│   ├── document/
│   │   └── [id].tsx            # Dynamic document details
│   ├── MyDigitalId.tsx         # Profile photo & ID card inspector
│   ├── settings.tsx            # Settings & preferences
│   └── modal.tsx               # Modal screen
├── assets/
│   ├── icons/                  # Original extracted logos & icons
│   │   ├── logo1.png           # Absher official green logo
│   │   ├── logo2.png           # Saudi Arabia Ministry of Interior emblem
│   │   ├── sponsor-details-icon.png
│   │   ├── health-insurance-icon.png
│   │   └── hajj-details-icon.png
│   └── images/                 # App launcher icons & splash
│       ├── icon.png
│       ├── splash-icon.png
│       ├── android-icon-foreground.png
│       ├── android-icon-background.png
│       ├── android-icon-monochrome.png
│       └── favicon.png
├── components/
│   ├── AppIcon.tsx             # Universal icon component (Custom PNGs + Vector Icons)
│   ├── ThemedText.tsx          # Themed typography
│   └── ThemedView.tsx          # Themed container
├── constants/
│   ├── Colors.ts               # Default palette
│   └── Theme.ts                # AppTheme (Dark & Light color systems)
├── context/
│   └── EmployeeContext.tsx     # Supabase employee data provider & hook
├── hooks/
│   └── useAppColors.ts         # Theme hook supporting light & dark modes
├── lib/
│   └── supabase.ts             # Live Supabase client configuration
├── app.json                    # Expo project configuration
├── package.json                # Dependencies & scripts
└── tsconfig.json               # TypeScript configuration
```

---

## How to Run

### 1. Install Dependencies
Open PowerShell or terminal in the `Absher` directory:
```bash
cd "D:\Redwan\download\New folder (2)\Absher"
npm install
```

### 2. Start the Development Server
```bash
npx expo start
```

- **Run on Web**: Press `w` or run `npm run web`
- **Run on Android**: Scan the QR code using the **Expo Go** app on an Android device or press `a` to launch in an Android Emulator.
- **Run on iOS**: Scan the QR code using the Camera app on an iPhone with **Expo Go** installed or press `i` for iOS Simulator.

---

## Backend & Database Info

- **Supabase Project URL**: `https://iflcprfxckeyjcwafkzl.supabase.co`
- **Database Table**: `employees`
- **Authentication**: Users authenticate using their Saudi National ID / Iqama number + password. The login form automatically handles the backend domain suffix (`@jobaid.app`).
