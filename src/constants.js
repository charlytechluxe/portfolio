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
        description: "Solution de navigation intelligente avec données de stationnement en temps réel.",
        fullDescription: "Navo est une application mobile conçue pour simplifier la recherche de stationnement. Elle permet de trouver rapidement une place disponible, là où il y a réellement des opportunités. Son objectif est de rendre le stationnement plus efficace, de réduire l’impact environnemental en limitant le temps passé à chercher une place, et de faire gagner du temps aux utilisateurs.",
        features: ["Données temps réel", "Cartographie intelligente", "Filtres éco-mobilité", "Support multi-villes"],
        tech: ["SwiftUI", "Open Data APIs", "Async/Await"],
        screenshots: ["/assets/navo/navo-map.png", "/assets/navo/navo-filters.png", "/assets/navo/navo-impact.png", "/assets/navo/navo-help.png"],
        color: "bg-emerald-600",
        tag: "Smart Mobility"
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
        screenshots: ["/assets/sprayhub/home.png", "/assets/sprayhub/explorer.png", "/assets/sprayhub/editor.png", "/assets/sprayhub/training.png", "/assets/sprayhub/discover.png"],
        color: "bg-[#ff0055]",
        tag: "Climbing Performance"
    }
];
