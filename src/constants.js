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
        year: "2027",
        status: "EN PRÉPARATION",
        description: "Après une première participation en 2026, je me prépare déjà pour l'édition 2027 du concours mondial d'Apple.",
        color: "from-amber-400 to-orange-600"
    }
];

export const myApps = [
    {
        slug: "lunar-vca",
        name: "Lunar VCA",
        category: "Finance & Crypto",
        description: "Un tracker d'investissement minimaliste et premium inspiré par l'esthétique Apple.",
        fullDescription: "Lunar VCA est un outil d'aide à la décision pour les investisseurs utilisant la stratégie Value Cost Averaging. Avec un Smart Advisor intelligent, des graphiques de trajectoire et un ticker BTC en temps réel, il offre une expérience de suivi de portefeuille fluide et haut de gamme.",
        features: ["Smart Advisor", "Calculateur VCA", "Graphiques de trajectoire", "Ticker BTC live"],
        tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
        screenshots: ["/assets/lunar-vca/home.png", "/assets/lunar-vca/advisor.png"],
        color: "bg-orange-500",
        tag: "Premium Analytics"
    },
    {
        slug: "twingo-control-center",
        name: "Twingo Control Center",
        category: "Automobile & Dashboard",
        description: "L'application de gestion ultime pour ta Twingo (carburant, entretien, stats).",
        fullDescription: "Twingo Control Center est une application iOS native conçue pour centraliser toutes les données de ton véhicule. Suis ta consommation de carburant, planifie tes entretiens et visualise tes dépenses via des graphiques détaillés, le tout dans une interface respectant les codes de design d'Apple.",
        features: ["Suivi carburant", "Planning entretien", "Analytique dépenses", "Interface iOS Native"],
        tech: ["SwiftUI", "SwiftData", "Charts"],
        screenshots: ["/assets/twingo/dashboard.png", "/assets/twingo/fuel.png"],
        color: "bg-blue-500",
        tag: "iOS Native"
    },
    {
        slug: "navo",
        name: "Navo",
        category: "Mobilité",
        description: "Solution de navigation intelligente avec données de stationnement en temps réel.",
        fullDescription: "Navo est une solution innovante permettant d'agréger et de visualiser les données de stationnement et de mobilité en temps réel. L'application offre une vue précise des places disponibles et des services urbains, aidant à fluidifier le trafic et à réduire l'empreinte carbone.",
        features: ["Données temps réel", "Cartographie intelligente", "Filtres éco-mobilité", "Support multi-villes"],
        tech: ["SwiftUI", "Open Data APIs", "Async/Await"],
        color: "bg-emerald-600",
        tag: "Smart Mobility"
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
        description: "L'outil ultime pour la gestion de spraywalls et le suivi de progression en escalade.",
        fullDescription: "SprayHub révolutionne la grimpe sur spraywall. Conçu avec une approche 'mobile-first' et une esthétique sombre ultra-léchée, il permet aux grimpeurs de créer des blocs complexes, de suivre leurs 'croix' et de visualiser leur progression via un dashboard d'entraînement intuitif.",
        features: ["Éditeur de blocs immersif", "Dashboard d'entraînement", "Explorateur communautaire", "Système de gradation Soft/Hard"],
        tech: ["React", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
        screenshots: ["/assets/sprayhub/home.png", "/assets/sprayhub/explorer.png", "/assets/sprayhub/editor.png", "/assets/sprayhub/training.png"],
        color: "bg-[#ff0055]",
        tag: "Climbing Performance"
    }
];
