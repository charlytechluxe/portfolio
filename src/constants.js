export const personalInfo = {
    name: "Charly Polley",
    role: "Développeur iOS & Web",
    bio: "J'ai 15 ans. Je développe des applications iOS natives ainsi que des sites et applications web performantes.",
    email: "charlypolley28@gmail.com",
    twitter: "https://x.com/charly_polley?s=21",
    github: "https://github.com/charlytechluxe",
    avatar: "/assets/profil.PNG",
    available: true
};

export const awards = [
    {
        title: "Swift Student Challenge",
        year: "2027",
        status: "EN PRÉPARATION",
        description: "Après une première participation en 2026, je me prépare déjà pour l'édition 2027 du concours mondial d'Apple.",
        color: "from-amber-400 to-orange-600"
    }
];

export const myApps = [
    {
        slug: "navo",
        name: "Navo",
        category: "Mobilité",
        description: "Solution de navigation intelligente. (Partie iOS acquise, Backend en cours de cession).",
        fullDescription: "Navo est une application mobile conçue pour simplifier la recherche de stationnement avec des données temps réel. 🚀 Succès commercial : La propriété intellectuelle du client iOS a été officiellement vendue. L'infrastructure Backend/API est en cours d'exploitation et devrait être cédée d'ici la fin de l'année.",
        features: ["Données temps réel", "Cartographie intelligente", "Filtres éco-mobilité", "Support multi-villes"],
        tech: ["SwiftUI", "Open Data APIs", "Async/Await"],
        screenshots: ["/assets/navo/navo-map.png", "/assets/navo/navo-filters.png", "/assets/navo/navo-impact.png", "/assets/navo/navo-help.png"],
        color: "bg-emerald-600",
        tag: "Acquis (iOS) 🤝",
        appStoreLink: "https://apps.apple.com/app/id1234567890",
        websiteLink: "https://navo-app.com"
    },
    {
        slug: "iverse",
        name: "Iverse",
        category: "Éducation & Écosystème",
        description: "Mon app du Swift Stundent challenge 2026 : Un musée numérique interactif explorant l'héritage et l'innovation d'Apple.",
        fullDescription: "Iverse est né du constat que l'écosystème Apple est devenu immense et complexe. À l'intersection de la technologie et des arts libéraux, cette application transforme une base de données froide en une expérience vivante. C'est un véritable musée numérique permettant d'explorer l'évolution du design via une Timeline immersive, tout en guidant les utilisateurs grâce à un algorithme de recommandation intelligent.",
        features: ["Timeline 3D (History)", "Smart Recommender", "Magic Scan 3D (RealityKit)", "Système de Badges (Gamification)"],
        tech: ["SwiftUI Canvas", "Object Capture (RealityKit)", "3D Transforms", "GeometryReader"],
        screenshots: ["/assets/iverse/home.png", "/assets/iverse/settings.png"],
        color: "bg-blue-600",
        tag: "Swift Student Challenge",
        githubLink: "https://github.com/charlytechluxe/iverse"
    },
    {
        slug: "sprayhub",
        name: "SprayHub",
        category: "Sport & Escalade",
        description: "L'outil ultime pour la gestion de spraywalls et le suivi de progression en escalade.",
        fullDescription: "SprayHub révolutionne la grimpe sur spraywall. Conçu avec une approche 'mobile-first' et une esthétique sombre ultra-léchée, il permet aux grimpeurs de créer des blocs complexes, de suivre leurs 'croix' et de visualiser leur progression via un dashboard d'entraînement intuitif.",
        features: ["Éditeur de blocs immersif", "Dashboard d'entraînement", "Explorateur communautaire", "Système de gradation Soft/Hard"],
        tech: ["React", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
        screenshots: ["/assets/sprayhub/home.png", "/assets/sprayhub/explorer.png", "/assets/sprayhub/editor.png", "/assets/sprayhub/training.png", "/assets/sprayhub/discover.png"],
        color: "bg-[#ff0055]",
        tag: "Climbing Performance",
        websiteLink: "https://sprayhub.app",
        githubLink: "https://github.com/charlytechluxe/sprayhub"
    },
    {
        slug: "twingocontrol",
        name: "TwingoControl",
        category: "Automobile & Audio",
        description: "Simulateur Active Sound Design (ASD) & OBD2 temps réel pour iOS.",
        fullDescription: "Application native Swift qui génère des sons de moteurs virtuels ultra-réalistes synchronisés avec la télémétrie OBD2 Bluetooth du véhicule. Elle intègre un moteur physique reproduisant parfaitement la Renault Twingo III et une synthèse audio dynamique (Alpine A110 S, concept Apple Car EV) via AVFoundation. L'interface offre un design Glassmorphism premium avec Power Meter et haptique.",
        features: ["Télémétrie OBD2 Bluetooth", "Synthèse audio temps réel", "Moteur physique embarqué", "Interface Glassmorphism"],
        tech: ["Swift", "SwiftUI", "AVFoundation"],
        screenshots: null,
        color: "bg-orange-600",
        tag: "Engineering & Sound"
    },
    {
        slug: "vcatracker",
        name: "VCATracker",
        category: "Finance & Tracking",
        description: "Investment tracker avec une esthétique premium Apple Bank style.",
        fullDescription: "Une application web de suivi des investissements conçue avec une interface ultra-premium inspirée de l'écosystème financier d'Apple (comme l'Apple Card). L'accent est mis sur une visualisation claire et élégante des données financières.",
        features: ["Suivi d'investissements", "UI Apple Bank Style", "Visualisation de données", "Dashboard premium"],
        tech: ["React", "Web UI", "Tailwind CSS"],
        screenshots: null,
        color: "bg-slate-800",
        tag: "Fintech"
    },
    {
        slug: "devflowhub",
        name: "DevFlowHub",
        category: "SaaS & Productivité",
        description: "Outil professionnel de gestion de projet (PWA & Desktop).",
        fullDescription: "Une solution SaaS complète et multi-tenant conçue pour la gestion de projets professionnels. Déployable sous forme de Progressive Web App (PWA) et d'application bureau (Electron), DevFlowHub vise à optimiser les flux de travail des équipes.",
        features: ["Architecture PWA", "App Bureau Electron", "Support Multi-tenant", "Gestion de workflows"],
        tech: ["React", "Electron", "PWA"],
        screenshots: null,
        color: "bg-purple-600",
        tag: "SaaS B2B"
    }
];
