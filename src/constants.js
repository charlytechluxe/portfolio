export const personalInfo = {
    name: "Charly Polley",
    role: "Développeur iOS & Web",
    bio: "J'ai 15 ans. Je développe des applications iOS natives ainsi que des sites et applications web performantes.",
    email: "charlypolley28@gmail.com",
    twitter: "https://x.com/charly_polley?s=21",
    github: "https://github.com/charlytechluxe",
    available: true
};

export const awards = [
    {
        title: "Swift Student Challenge",
        year: "2026",
        status: "PARTICIPANT",
        description: "En route pour l'édition 2026 du concours mondial d'Apple.",
        color: "from-amber-400 to-orange-600"
    }
];

export const myApps = [
    {
        slug: "flowpark",
        name: "FlowPark",
        category: "Mobilité",
        description: "Données de stationnement en temps réel pour Rennes et Laval.",
        fullDescription: "FlowPark est une solution innovante permettant d'agréger et de visualiser les données de stationnement en temps réel via les API Open Data. L'application offre une vue précise des places disponibles, aidant à fluidifier le trafic urbain.",
        features: ["Données temps réel", "Cartographie interactive", "Filtres intelligents", "Support multicatégories"],
        tech: ["SwiftUI", "Open Data APIs", "Async/Await"],
        color: "bg-emerald-600",
        tag: "Data & IoT"
    },
    {
        slug: "iverse",
        name: "Iverse",
        category: "Éducation & Écosystème",
        description: "Un musée numérique interactif explorant l'héritage et l'innovation d'Apple.",
        fullDescription: "Iverse est né du constat que l'écosystème Apple est devenu immense et complexe. À l'intersection de la technologie et des arts libéraux, cette application transforme une base de données froide en une expérience vivante. C'est un véritable musée numérique permettant d'explorer l'évolution du design via une Timeline immersive, tout en guidant les utilisateurs grâce à un algorithme de recommandation intelligent.",
        features: ["Timeline 3D (History)", "Smart Recommender", "Magic Scan 3D (RealityKit)", "Système de Badges (Gamification)"],
        tech: ["SwiftUI Canvas", "Object Capture (RealityKit)", "3D Transforms", "GeometryReader"],
        screenshots: ["/assets/iverse/home.png", "/assets/iverse/settings.png"],
        color: "bg-blue-600",
        tag: "Swift Student Challenge"
    },
    {
        slug: "sprayhub",
        name: "SprayHub",
        category: "Sport & Escalade",
        description: "L'outil ultime pour la gestion de spraywalls d'escalade et de voies de bloc.",
        fullDescription: "SprayHub révolutionne la gestion des murs d'escalade de type 'spraywall'. Créez, partagez et modérez des blocs facilement via une interface PWA performante couplée à un backend robuste.",
        features: ["Création de blocs", "Système de modération", "Mode Poster/Impression", "Synchronisation temps réel"],
        tech: ["React", "FastAPI / Node", "PostgreSQL", "Tailwind CSS"],
        color: "bg-orange-600",
        tag: "Climbing Beta"
    }
];
