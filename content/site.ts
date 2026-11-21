export const SITE_URL = "https://heymaia.app";

export const PLAY_STORE_URL: string | null = null;

export const links = {
  github: "https://github.com/botmechanic/maia",
  sponsors: "https://github.com/sponsors/botmechanic",
  license: "https://github.com/botmechanic/maia/blob/main/LICENSE",
  readme: "https://github.com/botmechanic/maia/blob/main/README.md",
  releases: "https://github.com/botmechanic/maia/releases",
  manifest:
    "https://github.com/botmechanic/maia/blob/main/app/src/main/AndroidManifest.xml",
  permissionAudit:
    "https://github.com/botmechanic/maia/blob/main/app/src/test/java/com/example/PermissionAuditTest.kt",
  edgeGuide:
    "https://github.com/botmechanic/maia/blob/main/EDGE_AI_ENGINEERING_GUIDE.md",
  prd: "https://github.com/botmechanic/maia/blob/main/PRD.md",
  gemmaModel: "https://huggingface.co/litert-community/Gemma3-1B-IT",
} as const;

export const metadataCopy = {
  title: "Maia: a private AI companion that lives on your phone",
  description:
    "Maia is a warm AI companion that lives entirely on your Android phone. No cloud, no account, no internet permission. Your conversations and memories never leave the device.",
} as const;

export const nav = {
  wordmark: "Maia",
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Privacy", href: "#privacy" },
    { label: "Install", href: "#install" },
    { label: "Support", href: "#support" },
  ],
  githubLabel: "View on GitHub",
} as const;

export const screenshots = {
  talk: {
    src: "/01_talk.png",
    alt: "Maia chat screen showing an on-device conversation with Listen and Report actions.",
    caption: "Talk · on device",
  },
  remembers: {
    src: "/02_remembers.png",
    alt: "Maia memory vault listing profile facts you can keep, edit, or forget.",
    caption: "Remembers · edit or forget",
  },
  mindmap: {
    src: "/03_mindmap.png",
    alt: "Maia Explore view showing a mind map of related memories on the phone.",
    caption: "Remembers · explore",
  },
  privacy: {
    src: "/04_privacy_settings.png",
    alt: "Maia privacy and security settings with biometric vault lock and zero-network status.",
    caption: "Settings · privacy & security",
  },
} as const;

export const hero = {
  overline: "Open source · Android · Runs fully on your phone",
  headline: "She remembers. She protects. She's yours.",
  subline: metadataCopy.description,
  primaryCta: { label: "Get Maia on GitHub", href: links.github },
  secondaryCta: { label: "How it works", href: "#how-it-works" },
  screenshot: screenshots.talk,
} as const;

export const privacy = {
  id: "privacy",
  title: "Private isn't a setting. It's how she's built.",
  screenshot: screenshots.privacy,
  statements: [
    {
      title: "No internet permission",
      body: "Maia has no internet permission. The app can't open a network connection, and a test in the repo checks the build for it.",
    },
    {
      title: "Encrypted on your phone",
      body: "Your memories are encrypted on the phone with SQLCipher. The key is protected by the Android Keystore, hardware-backed on supported devices.",
    },
    {
      title: "No account, no ads, no tracking",
      body: "There is no sign-in, no ad SDK, and no analytics in the app. What you say stays on the device.",
    },
  ],
  proof: {
    title: "Don't trust us, check",
    intro:
      "The app manifest strips network permissions. A unit test fails the build if they reappear in the merged manifest.",
    code: `<uses-permission android:name="android.permission.INTERNET" tools:node="remove" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" tools:node="remove" />
<uses-permission android:name="com.google.android.providers.gsf.permission.READ_GSERVICES" tools:node="remove" />`,
    note: "PermissionAuditTest also allowlists WorkManager and biometric permissions the OS needs for background work and the optional vault lock.",
    manifestLinkLabel: "AndroidManifest.xml",
    testLinkLabel: "PermissionAuditTest.kt",
  },
  voiceNote:
    "Voice input currently uses Android's speech recognizer (with a preference for offline). Replies can use the system text-to-speech engine. If you prefer, type instead. A fully on-device voice is a sponsor milestone.",
} as const;

export const howItWorks = {
  id: "how-it-works",
  title: "A memory you can see, and correct.",
  flow: [
    { label: "You talk" },
    { label: "She keeps a private journal", detail: "episodic memory" },
    { label: "Finds what's related", detail: "on-device embeddings" },
    { label: "Learns facts about you", detail: "profile memory" },
    { label: "Shows you what she remembered" },
  ],
  points: [
    {
      title: "Every memory links back to the moment she learned it",
      body: "Facts she extracts keep pointers to the conversation they came from, so you can see the source. Facts you add yourself may not have a source yet.",
      screenshot: screenshots.mindmap,
    },
    {
      title: "Edit or forget anything, anytime",
      body: "Open the memory vault to edit or remove what she holds. The background distillation job that reviews recent chats runs while the phone is charging. You can also run distillation immediately from Settings or Memory.",
      screenshot: screenshots.remembers,
    },
  ],
} as const;

export const languages = {
  id: "languages",
  eyebrow: "Languages",
  title: "Speak in your own language. Still 100% offline.",
  subtitle:
    "Maia's interface, voice, crisis safety, and on-device Gemma model work natively across six languages—no cloud translation required.",
  note: "Supports Android 13+ per-app language settings, offline device TTS, and multilingual on-device safety.",
  items: [
    {
      id: "en",
      label: "English",
      lang: "en",
      greeting:
        "Hi, I'm Maia — A companion that lives only on your phone.",
      badge: "ON DEVICE",
    },
    {
      id: "fr",
      label: "Français",
      lang: "fr",
      greeting:
        "Bonjour, je suis Maia — Une compagne qui vit uniquement sur votre téléphone.",
      badge: "SUR L'APPAREIL",
    },
    {
      id: "es",
      label: "Español",
      lang: "es",
      greeting:
        "Hola, soy Maia — Una compañera que vive solo en tu teléfono.",
      badge: "EN EL DISPOSITIVO",
    },
    {
      id: "pt",
      label: "Português",
      lang: "pt",
      greeting:
        "Olá, eu sou a Maia — Uma companheira que vive apenas no seu celular.",
      badge: "NO DISPOSITIVO",
    },
    {
      id: "de",
      label: "Deutsch",
      lang: "de",
      greeting:
        "Hallo, ich bin Maia — Eine Begleiterin, die nur auf deinem Smartphone lebt.",
      badge: "AUF DEM GERÄT",
    },
    {
      id: "ja",
      label: "日本語",
      lang: "ja",
      greeting:
        "こんにちは、Maiaです — あなたのスマホの中だけで生きるパートナー。",
      badge: "オンデバイス",
    },
  ],
} as const;

export const features = {
  title: "What she offers",
  items: [
    {
      title: "Warm conversation",
      body: "A calm, on-device chat that stays with you through the day.",
      icon: "chat" as const,
    },
    {
      title: "Visible memory",
      body: "When she draws on something she learned, she shows you the chip so you can open it.",
      icon: "memory" as const,
    },
    {
      title: "Biometric vault lock",
      body: "Optional lock for the memory vault. Uses biometrics or your device screen lock.",
      icon: "lock" as const,
    },
    {
      title: "Encrypted export",
      body: "Export a password-protected AES-256-GCM .maiavault backup from the vault.",
      icon: "export" as const,
    },
    {
      title: "Crisis safety",
      body: "A deterministic layer surfaces fixed support lines (988, Crisis Text, and others) without asking the model. It is not a local lookup and Maia is not a therapist.",
      icon: "safety" as const,
    },
    {
      title: "Battery-aware learning",
      body: "Background distillation waits until the phone is charging. Manual distill actions can run immediately.",
      icon: "battery" as const,
    },
  ],
} as const;

export const underTheHood = {
  title: "Under the hood",
  intro: "For hobbyists who want the stack, not the slogan.",
  specs: [
    {
      label: "Model",
      value:
        "Gemma 3 1B INT4 via MediaPipe / LiteRT (default). Settings also expose a Gemma 4B slot when that .task file is present.",
    },
    {
      label: "Memory",
      value: "SQLite / Room + SQLCipher 4.6.1",
    },
    {
      label: "Embeddings",
      value: "Universal Sentence Encoder Lite (MediaPipe Text Embedder)",
    },
    {
      label: "Keys",
      value:
        "Android Keystore (hardware TEE or StrongBox when the device provides it)",
    },
    {
      label: "Background",
      value: "WorkManager; periodic and post-chat distillation require charging",
    },
    {
      label: "UI",
      value: "Kotlin + Jetpack Compose",
    },
    {
      label: "License",
      value: "Apache 2.0",
    },
  ],
  docsLabel: "Edge AI engineering guide",
  prdLabel: "Product requirements (PRD)",
} as const;

export const install = {
  id: "install",
  title: "Requirements and install",
  earlyNote:
    "Early release: setup takes a few minutes and needs a computer.",
  requirements: [
    {
      label: "Android",
      value:
        "Build floor API 24 (Android 7.0). The project README recommends Android 8.0+ (API 26).",
    },
    {
      label: "RAM",
      value: "6 GB minimum, 8 GB recommended",
    },
    {
      label: "Storage",
      value: "About 2 GB free for models",
    },
    {
      label: "Chip",
      value: "Mid-range or better. Pixel 6a or newer works well.",
    },
  ],
  steps: [
    {
      title: "Get the app",
      body: "Build from source in Android Studio (JDK 17, Gradle task :app:assembleDebug). No release APK is published on GitHub Releases yet.",
      links: [
        { label: "Repository", href: links.github },
        { label: "Releases", href: links.releases },
      ],
    },
    {
      title: "Download the Gemma model",
      body: "Get the official gemma3-1b-it-int4.task from Hugging Face (litert-community/Gemma3-1B-IT). Accept the license if prompted. Do not use raw .bin or .tflite weights.",
      links: [{ label: "Hugging Face model", href: links.gemmaModel }],
    },
    {
      title: "Push the model with adb",
      body: "Transfer the file into the app-specific models directory.",
      code: `adb push gemma3-1b-it-int4.task /sdcard/Android/data/app.heymaia/files/models/`,
    },
    {
      title: "Optional: embedding model",
      body: "For full semantic recall, place universal_sentence_encoder.tflite in the same models folder. The TensorFlow Hub URL currently listed in the app README returns 404; use a known-good USE Lite MediaPipe model file with that exact filename. Without it, chat still works with limited semantic recall.",
      code: `adb push universal_sentence_encoder.tflite /sdcard/Android/data/app.heymaia/files/models/`,
    },
  ],
  readmeCta: {
    label: "Full install details in the README",
    href: links.readme,
  },
} as const;

export const support = {
  id: "support",
  title: "Built in the open. Funded by people who want this to exist.",
  body: "Maia has no ads and no data harvesting. The open-source build is free. Sponsorship funds independent development, test devices, and on-device AI research.",
  milestones: [
    {
      amount: "$500",
      title: "Multi-device testing lab",
      body: "Dedicated 6 GB / 8 GB mid-range Android test hardware and Play Store publishing infrastructure.",
    },
    {
      amount: "$2,000",
      title: "Fully on-device voice",
      body: "Bundled on-device speech recognition and neural TTS so voice mode does not rely on the system speech services.",
    },
    {
      amount: "$5,000",
      title: "Cross-platform",
      body: "iOS companion port and local encrypted .maiavault migration between devices. A milestone, not a ship date.",
    },
  ],
  cta: { label: "Sponsor on GitHub", href: links.sponsors },
} as const;

export const faq = {
  title: "Questions",
  items: [
    {
      question: "Is it really offline?",
      answer:
        "The app declares no INTERNET permission and strips network permissions that dependencies might try to add. A unit test in the repo checks the merged manifest. Chat and memory run on the phone. Voice still uses Android system speech services unless you type instead.",
    },
    {
      question: "What about voice?",
      answer:
        "Voice input uses Android's system speech recognizer (with a preference for offline). Spoken replies use the system text-to-speech engine. Typing always works. A fully self-contained neural voice stack is the $2,000 sponsor milestone.",
    },
    {
      question: "Which phones can run it?",
      answer:
        "The build targets minSdk 24. The README recommends Android 8.0+, 6 GB RAM (8 GB better), about 2 GB free storage, and a mid-range chip. Pixel 6a or newer is a solid baseline.",
    },
    {
      question: "Is Maia a therapist?",
      answer:
        "No. Maia is a companion, not a therapist or medical service. A separate crisis layer can surface fixed support lines such as 988 without asking the model. It does not look up local services by location.",
    },
    {
      question: "Will there be an iPhone version?",
      answer:
        "Cross-platform work is listed as a $5,000 sponsor milestone. It is a funding goal, not a promise or ship date.",
    },
    {
      question: "Does it cost anything?",
      answer:
        "The open-source app is free under Apache 2.0. There are no subscriptions required for that build. Sponsorship is optional.",
    },
    {
      question: "Can I see the code?",
      answer:
        "Yes. The full Android project is on GitHub under Apache 2.0.",
      link: { label: "botmechanic/maia", href: links.github },
    },
  ],
} as const;

export const footer = {
  wordmark: "Maia",
  tagline: "A private AI companion that lives on your phone.",
  links: [
    { label: "GitHub", href: links.github },
    { label: "Sponsor", href: links.sponsors },
    { label: "License", href: links.license },
    { label: "README", href: links.readme },
  ],
  copyright: "© 2026 Maia contributors · Apache 2.0",
  privacyLine: "This site uses no cookies, analytics or trackers.",
} as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Maia",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android",
  url: SITE_URL,
  downloadUrl: links.github,
  license: links.license,
  description: metadataCopy.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
} as const;
