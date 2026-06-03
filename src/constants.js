export const personalInfo = {
    name: "Charly Polley",
    role: { fr: "Développeur iOS & Web", en: "iOS & Web Developer" },
    bio: { 
        fr: "J'ai 15 ans. Je développe des applications iOS natives ainsi que des sites et applications web performantes.",
        en: "I'm 15 years old. I build native iOS applications as well as high-performance websites and web apps."
    },
    email: "charlypolley28@gmail.com",
    twitter: "https://x.com/charly_polley?s=21",
    github: "https://github.com/charlytechluxe",
    avatar: "/assets/profil.PNG",
    available: true,
    statusText: {
        fr: { available: 'Disponible pour projets', busy: 'Actuellement complet' },
        en: { available: 'Available for projects', busy: 'Currently unavailable' }
    }
};

export const awards = [
    {
        title: { fr: "Swift Student Challenge", en: "Swift Student Challenge" },
        year: "2027",
        status: { fr: "EN PRÉPARATION", en: "PREPARING" },
        description: { 
            fr: "Après une première participation en 2026, je me prépare déjà pour l'édition 2027 du concours mondial d'Apple.",
            en: "After participating in 2026, I am already preparing for the 2027 edition of Apple's global challenge."
        },
        color: "from-amber-400 to-orange-600"
    }
];

export const myApps = [
    {
        slug: "navo",
        name: "Navo",
        category: { fr: "Mobilité", en: "Mobility" },
        description: { 
            fr: "Solution de navigation intelligente. (Partie iOS acquise, Backend en cours de cession).",
            en: "Smart navigation solution. (iOS client acquired, Backend acquisition in progress)."
        },
        fullDescription: {
            fr: "Navo est une application mobile conçue pour simplifier la recherche de stationnement avec des données temps réel. 🚀 Succès commercial : La propriété intellectuelle du client iOS a été officiellement vendue. L'infrastructure Backend/API est en cours d'exploitation et devrait être cédée d'ici la fin de l'année.",
            en: "Navo is a mobile application designed to simplify parking search with real-time data. 🚀 Commercial Success: The intellectual property of the iOS client has been officially sold. The Backend/API infrastructure is currently operational and is expected to be acquired by the end of the year."
        },
        features: {
            fr: ["Données temps réel", "Cartographie intelligente", "Filtres éco-mobilité", "Support multi-villes"],
            en: ["Real-time data", "Smart mapping", "Eco-mobility filters", "Multi-city support"]
        },
        tech: ["SwiftUI", "Open Data APIs", "Async/Await"],
        screenshots: ["/assets/navo/navo-map.png", "/assets/navo/navo-filters.png", "/assets/navo/navo-impact.png", "/assets/navo/navo-help.png"],
        color: "bg-emerald-600",
        tag: { fr: "Acquis (iOS) 🤝", en: "Acquired (iOS) 🤝" },
        appStoreLink: "https://apps.apple.com/app/id1234567890",
        websiteLink: "https://navo-app.com",
        video: null
    },
    {
        slug: "iverse",
        name: "Iverse",
        category: { fr: "Éducation & Écosystème", en: "Education & Ecosystem" },
        description: {
            fr: "Mon app du Swift Stundent challenge 2026 : Un musée numérique interactif explorant l'héritage d'Apple.",
            en: "My 2026 Swift Student Challenge app: An interactive digital museum exploring Apple's legacy."
        },
        fullDescription: {
            fr: "Iverse est né du constat que l'écosystème Apple est devenu immense et complexe. À l'intersection de la technologie et des arts libéraux, cette application transforme une base de données froide en une expérience vivante. C'est un véritable musée numérique permettant d'explorer l'évolution du design via une Timeline immersive.",
            en: "Iverse was born from the realization that the Apple ecosystem has become vast and complex. At the intersection of technology and liberal arts, this application transforms a cold database into a living experience. It's a true digital museum allowing you to explore design evolution through an immersive Timeline."
        },
        features: {
            fr: ["Timeline 3D (History)", "Smart Recommender", "Magic Scan 3D (RealityKit)", "Système de Badges"],
            en: ["3D Timeline (History)", "Smart Recommender", "Magic Scan 3D (RealityKit)", "Badge System"]
        },
        tech: ["SwiftUI Canvas", "Object Capture", "3D Transforms", "GeometryReader"],
        screenshots: ["/assets/iverse/home.png", "/assets/iverse/settings.png"],
        color: "bg-blue-600",
        tag: { fr: "Swift Student Challenge", en: "Swift Student Challenge" },
        githubLink: "https://github.com/charlytechluxe/iverse",
        video: null
    },
    {
        slug: "sprayhub",
        name: "SprayHub",
        category: { fr: "Sport & Escalade", en: "Sports & Climbing" },
        description: {
            fr: "L'outil ultime pour la gestion de spraywalls et le suivi de progression en escalade.",
            en: "The ultimate tool for spraywall management and climbing progression tracking."
        },
        fullDescription: {
            fr: "SprayHub révolutionne la grimpe sur spraywall. Conçu avec une approche 'mobile-first' et une esthétique sombre ultra-léchée, il permet aux grimpeurs de créer des blocs complexes, de suivre leurs 'croix' et de visualiser leur progression.",
            en: "SprayHub revolutionizes spraywall climbing. Designed with a 'mobile-first' approach and a sleek dark aesthetic, it allows climbers to create complex boulders, track their sends, and visualize their progression."
        },
        features: {
            fr: ["Éditeur de blocs", "Dashboard d'entraînement", "Explorateur communautaire", "Système de gradation"],
            en: ["Boulder Editor", "Training Dashboard", "Community Explorer", "Grading System"]
        },
        tech: ["React", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
        screenshots: ["/assets/sprayhub/home.png", "/assets/sprayhub/explorer.png", "/assets/sprayhub/editor.png", "/assets/sprayhub/training.png", "/assets/sprayhub/discover.png"],
        color: "bg-[#ff0055]",
        tag: { fr: "Climbing Performance", en: "Climbing Performance" },
        websiteLink: "https://sprayhub.app",
        githubLink: "https://github.com/charlytechluxe/sprayhub"
    },
    {
        slug: "twingocontrol",
        name: "TwingoControl",
        category: { fr: "Automobile & Audio", en: "Automotive & Audio" },
        description: {
            fr: "Simulateur Active Sound Design (ASD) & OBD2 temps réel pour iOS.",
            en: "Real-time Active Sound Design (ASD) & OBD2 Simulator for iOS."
        },
        fullDescription: {
            fr: "Application native Swift qui génère des sons de moteurs virtuels ultra-réalistes synchronisés avec la télémétrie OBD2 Bluetooth du véhicule. Elle intègre un moteur physique reproduisant la Renault Twingo III et une synthèse audio dynamique.",
            en: "Native Swift app generating ultra-realistic virtual engine sounds synchronized with the vehicle's real-time OBD2 Bluetooth telemetry. Includes an embedded physics engine and dynamic audio synthesis."
        },
        features: {
            fr: ["Télémétrie OBD2", "Synthèse audio temps réel", "Moteur physique", "UI Glassmorphism"],
            en: ["OBD2 Telemetry", "Real-time Audio Synthesis", "Physics Engine", "Glassmorphism UI"]
        },
        tech: ["Swift", "SwiftUI", "AVFoundation"],
        screenshots: null,
        color: "bg-orange-600",
        tag: { fr: "Engineering & Sound", en: "Engineering & Sound" }
    },
    {
        slug: "vcatracker",
        name: "VCATracker",
        category: { fr: "Finance & Tracking", en: "Finance & Tracking" },
        description: {
            fr: "Investment tracker avec une esthétique premium Apple Bank style.",
            en: "Investment tracker with a premium Apple Bank-style aesthetic."
        },
        fullDescription: {
            fr: "Une application web de suivi des investissements conçue avec une interface ultra-premium inspirée de l'écosystème financier d'Apple (comme l'Apple Card).",
            en: "A web application for investment tracking designed with an ultra-premium interface inspired by Apple's financial ecosystem (like Apple Card)."
        },
        features: {
            fr: ["Suivi d'investissements", "UI Apple Bank Style", "Visualisation de données", "Dashboard premium"],
            en: ["Investment Tracking", "Apple Bank Style UI", "Data Visualization", "Premium Dashboard"]
        },
        tech: ["React", "Web UI", "Tailwind CSS"],
        screenshots: null,
        color: "bg-slate-800",
        tag: { fr: "Fintech", en: "Fintech" }
    },
    {
        slug: "devflowhub",
        name: "DevFlowHub",
        category: { fr: "SaaS & Productivité", en: "SaaS & Productivity" },
        description: {
            fr: "Outil professionnel de gestion de projet (PWA & Desktop).",
            en: "Professional project management tool (PWA & Desktop)."
        },
        fullDescription: {
            fr: "Une solution SaaS complète et multi-tenant conçue pour la gestion de projets professionnels. Déployable sous forme de Progressive Web App (PWA) et d'application bureau (Electron).",
            en: "A comprehensive, multi-tenant SaaS solution designed for professional project management. Deployable as a Progressive Web App (PWA) and Desktop application (Electron)."
        },
        features: {
            fr: ["Architecture PWA", "App Bureau Electron", "Support Multi-tenant", "Gestion de workflows"],
            en: ["PWA Architecture", "Electron Desktop App", "Multi-tenant Support", "Workflow Management"]
        },
        tech: ["React", "Electron", "PWA"],
        screenshots: null,
        color: "bg-purple-600",
        tag: { fr: "SaaS B2B", en: "SaaS B2B" }
    }
];
