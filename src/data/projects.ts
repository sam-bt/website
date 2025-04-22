// src/data/projects.ts

export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    image?: string;
    imageAlt: string;
    githubUrl?: string;
    appStoreUrl?: string;
    seeMoreUrl?: string;
    tags: string[];
    screenshots?: { url: string; alt: string; caption: string }[];
    challenges?: string[];
    learnings?: string[];
  }
  
  export const projects: Record<string, Project> = {
    'global-idv': {
      title: "Global Identity Verification iOS App",
      description: "An iOS companion application that allows users to utilize phone-specific hardware/software to scan or upload data to the Raytio web client. I developed this app from scratch during my summer internship at Raytio and it is now available on the app store for anyone to use.",
      fullDescription: 
      `I worked on a variety of key features for this app, including:

    - QR Code Scanner: Scan QR codes to determine app which data is being requested by the web cleint

    - NFC Passport Reader: Securely read and verify passport data on iPhone.
    Scans the passports MRZ and validates its checksum. Then derives the key to unlock the passport’s NFC chip.
    Reads the chip via Core NFC and parses the personal data. Verifies authenticity by checking the country signing certificate against the ICAO trust list. 
    Uploads the passport data to the Raytio web client for further verification and storage.
    
    - Face Liveness Detection: Confirm that the camera feed is coming from a live person, not a static image or video spoof.
    Integrates with an AWS Amplify–hosted face liveness service.
    Captures a short selfie video or sequence which sends the frames to the service.
    This returns a “liveness confidence” score (0–100) which is used to help determine if the user is a real person.
    Uploads the score to the Raytio web client for further verification and storage.

    - Address Verification: Match a user to a physical address.
    User enters a one‑time code delivered by postal letter.
    App sends the code to the backend for validation.
    Upon success, requests precise GPS permission.
    Uploads the locales to the Raytio web client for verification and storage.

    - Robustness and State Management: Prevent inconsistent or broken UI states.
    The app is aimed to be used by users with limited technical knowledge, so it must be intuitive, easy to use, have clear and informative error messages and should never reach an inconsistent state.
    A lot of time was spent adding fallback and retry logic for transient errors, along with user‑friendly error messages.

    - Internationalization (i18n) - Support multiple languages without manual duplication.
    All visible strings are stored as key/value pairs in locale files.
    A Python script I wrote uses the Google Translate API to generate drafts for additional languages.
    A validation script scans each locale file to ensure every key exists once—no missing entries or duplicates.

    - (In Progress) Autofill Service: Enable Raytio to provide autofill credentials across apps and web browsers.
    Goal: Utilize Raytio's password manager SecretSafe as a credential provider for iOS.
    Researched Apple’s Credential Provider Extension APIs.
    Built initial scaffolding to register as an autofill service.

    - (Research Stage) Fastlane: Automate build, screenshot capture, code signing, and App Store upload.
    Explored Fastlane’s snapshot and deliver actions.
    Wrote proof‑of‑concept scripts to:
    Run UI tests and take localized screenshots required for submitting an app to the store.
    Submit builds to TestFlight or the App Store.
    Evaluating how to integrate these into the CI/CD pipeline.
    `,
      image: "/passport-scan.jpeg",
      imageAlt: "Global idv image",
      appStoreUrl: "https://apps.apple.com/us/app/global-idv/id6738364485",
      tags: ["Swift", "AWS", "Amplify", "SwiftUI", "Fastlane", "Xcode"],
      screenshots: [],
      challenges: [ 
        "Amplify",
        "App flow",
        "Learning Swift",
        "Error handling"
       ],
      learnings: [ /* … */ ],
    },
    'wino': {
        title: "Wine Management App",
        description: "WINO is an intuitive kiosk application designed for wine enthusiasts, casual drinkers, and tourists alike. With a user-friendly interface, WINO provides a comprehensive platform for all things wine, making it easy to explore and engage with the world of viticulture. This Application was produced for the Seng202 Course at the University of Canterbury",
        fullDescription: 
        `View the project ReadME on Github on how to try the app out for yourself!
        
        Features
        - Wine & Vineyard Information: Access detailed information about various wines and vineyards, including tasting notes, production methods, and more.
        - Geographical Mapping: Visualize the locations of wineries and vineyards on an interactive map, making it simple to discover new favorites.
        - Tour Planning: Easily plan your vineyard tours by selecting from a curated list of wineries, ensuring a memorable experience.
        - User Engagement: Share your thoughts by leaving wine reviews and connect with fellow wine lovers through user profiles.`,
        imageAlt: "Wino image",
        githubUrl: "https://github.com/sam-bt/Seng202-Wine-Management-App",
        tags: ["Java", "JavaFX", "OpenStreetMap", "JUnit", "Gradle"],
        screenshots: [ 
            {url: "/wino-wines.png", alt: "Screenshot of the wines page in the app", caption: "Viewing all wines page"},
            {url: "/wino-tour.png", alt: "Screenshot of the tour page in the app", caption: "Viewing a planned wine tour"},
            {url: "/wino-detailed.png", alt: "Screenshot of the detailed wine page in the app", caption: "Viewing a specific wine"}, 
            {url: "/wino-compare.png", alt: "Screenshot of the comparing wines page in the app", caption: "Comparing two wines"}, 
        ],
        challenges: [ 
            "Learning how to actually create a working app",
            "Navigating a 6-person self-managed team",
            "Taking feedback from teaching team and peers",
            "Learning how to use JavaFX",
            "First time working on UI and UX", 
         ],
        learnings: [],
      },
  };
  