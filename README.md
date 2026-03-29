# TourSplit Pro — Android App

A Capacitor-based Android app for group travel expense tracking.



## Files You Downloaded (Project Structure)

```
toursplit-pro/
├── www/                    ← Your app's web files
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── capacitor.js
├── resources/              ← App icon & splash screen
│   ├── icon.png
│   └── splash.png
├── .github/
│   └── workflows/
│       └── build-android.yml   ← GitHub Actions build script
├── capacitor.config.json   ← Capacitor configuration
├── package.json
├── .gitignore
└── README.md
```

---

## PDF Export

On Android, the PDF export button will:
1. Generate the PDF
2. Open Android's **Share sheet** so you can save it to Google Drive, send via WhatsApp, Gmail, etc.
3. Or save it directly to your **Documents** folder

---

## App Details
- **App ID:** `com.toursplit.pro`  
- **Min Android:** 5.0+  
- **Target SDK:** Android 14
