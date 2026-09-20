# Absher Identity Management - Admin Portal

A standalone web portal for managing Absher digital identity users, extracting details from Saudi Iqama IDs and Passport documents via client-side OCR (Tesseract.js), editing resident records, and syncing directly with Firebase Realtime Database.

---

## 📁 Project Structure

```
absher-admin-portal/
├── index.html              # Main single-page web app
├── vercel.json             # Vercel deployment routing & headers config
├── package.json            # Node scripts & project metadata
├── server.js               # Zero-dependency local Node.js server
├── .gitignore              # Files ignored by git / Vercel
├── README.md               # Deployment and usage instructions
└── assets/
    └── images/
        └── profile_user.png # Default fallback user avatar
```

---

## 🚀 How to Host on Vercel

You can deploy this portal to Vercel in less than 1 minute using any of the following methods:

### Method 1: Deploy via Vercel CLI (Fastest - No Git required)

1. Open PowerShell / Command Prompt inside this folder:
   ```bash
   cd "C:\Users\CRB\Downloads\New folder (2)\New folder (2)\absher-admin-portal"
   ```
2. Run Vercel CLI:
   ```bash
   npx vercel
   ```
3. Follow the prompts:
   - `Set up and deploy?` &rarr; **y**
   - `Which scope?` &rarr; Select your Vercel account
   - `Link to existing project?` &rarr; **n**
   - `What's your project's name?` &rarr; `absher-admin-portal` (or press Enter)
   - `In which directory is your code located?` &rarr; `./` (press Enter)
   - `Want to modify these settings?` &rarr; **n**
4. For production release:
   ```bash
   npx vercel --prod
   ```

---

### Method 2: Deploy via GitHub + Vercel Dashboard

1. Create a new GitHub repository (e.g. `absher-admin-portal`).
2. Initialize git and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Absher Admin Portal"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/absher-admin-portal.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new).
4. Click **Import** next to your `absher-admin-portal` repository.
5. In the configuration:
   - **Framework Preset**: *Other*
   - **Root Directory**: `./`
   - Leave build command and output directory as default (static site).
6. Click **Deploy**!

---

## 💻 Running Locally

You can run this portal locally at any time:

```bash
# Using Node.js directly (zero dependencies needed)
node server.js

# Or using npm
npm start
```

Open your browser at: **`http://localhost:5000`**

---

## 🔐 Firebase Configuration

The portal comes pre-configured with the live Firebase Realtime Database for Absher Identity. 

You can also update or switch database credentials directly from the UI by navigating to the **"Firebase Settings"** tab inside the portal.
