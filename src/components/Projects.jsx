import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpRight, Github, Twitter, Mail, Award, Layers,
    Code2, Sparkles, Smartphone, FileText
} from 'lucide-react';
import { awards, myApps, personalInfo } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { SpotlightCard } from './SpotlightCard';
import { ScrollRevealText } from './ScrollRevealText';
import { useSound } from '../context/SoundContext';

const TechBadge = ({ text }) => (
    <span className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-default">
        {text}
    </span>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white text-neutral-900 dark:text-white hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);

const ServiceItem = ({ text }) => (
    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="text-sm font-medium">{text}</span>
    </div>
);

const Projects = () => {
    const [currentAppIndex, setCurrentAppIndex] = useState(0);
    const [isHoveringSlider, setIsHoveringSlider] = useState(false);
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const { playHover } = useSound();

    useEffect(() => {
        if (isHoveringSlider) return;
        const timer = setInterval(() => {
            setCurrentAppIndex((prev) => (prev + 1) % myApps.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isHoveringSlider]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[minmax(180px,auto)]">

            {/* Tech Stack */}
            <SpotlightCard className="md:col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between group h-[380px] md:h-auto">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300 border border-black/5 dark:border-white/5">
                        <Code2 className="text-indigo-600 dark:text-indigo-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Expertise iOS & Web</h3>
                    <ScrollRevealText 
                        text={language === 'fr' 
                            ? "Développement d'applications natives avec SwiftUI et création d'écosystèmes web robustes. Je gère l'intégralité du développement technique, du code au déploiement."
                            : "Native app development with SwiftUI and robust web ecosystem creation. I handle full technical development, from code to deployment."}
                        className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium"
                    />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    <TechBadge text="SwiftUI" />
                    <TechBadge text="React" />
                    <TechBadge text="Tailwind" />
                    <TechBadge text="Node.js" />
                    <TechBadge text="Firebase" />
                </div>
            </SpotlightCard>

            {/* Award Card */}
            <SpotlightCard className="md:col-span-1 md:row-span-2 group h-[380px] md:h-auto overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${awards[0]?.color} opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer z-0 pointer-events-none" />

                <div className="p-6 h-full flex flex-col items-center justify-center text-center space-y-6 relative z-10">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${awards[0]?.color} flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)] dark:shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-500 border-4 border-white/50 dark:border-black/20`}>
                        <Award className="text-white drop-shadow-md" size={48} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">{t(awards[0].title)}</h3>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200 border border-amber-200 dark:border-amber-500/30">
                            {t(awards[0].status)} {awards[0].year}
                        </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {t(awards[0].description)}
                    </p>
                </div>
            </SpotlightCard>

            {/* Socials & CV */}
            <SpotlightCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center gap-4">
                <div className="flex justify-between items-center z-10 relative">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                        {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
                    </h3>
                    <Mail size={16} className="text-indigo-500 dark:text-indigo-400" />
                </div>
                <div className="flex gap-3 z-10 relative">
                    <SocialIcon icon={<Twitter size={18} />} href={personalInfo.twitter} />
                    <SocialIcon icon={<Github size={18} />} href={personalInfo.github} />
                    <SocialIcon icon={<Mail size={18} />} href={`mailto:${personalInfo.email}`} />
                </div>
                <a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-center py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-lg transition-colors border border-black/5 dark:border-white/10 flex items-center justify-center gap-2 text-neutral-800 dark:text-white z-10 relative">
                    <FileText size={16} /> {language === 'fr' ? 'Télécharger mon CV' : 'Download Resume'}
                </a>
            </SpotlightCard>

            {/* About Me */}
            <SpotlightCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 pointer-events-none z-0" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200 mb-2 relative z-10">
                    {language === 'fr' ? 'À propos' : 'About me'}
                </h3>
                <ScrollRevealText 
                    text={language === 'fr' 
                        ? "Passionné par l'écosystème tech depuis mon plus jeune âge, j'allie un design exigeant à un code performant pour créer des produits complets et mémorables, de l'idée au déploiement."
                        : "Passionate about the tech ecosystem from a young age, I combine demanding design with high-performance code to build complete and memorable products, from idea to deployment."}
                    className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed relative z-10"
                />
            </SpotlightCard>

            {/* App Showcase Slider */}
            <SpotlightCard className="md:col-span-2 md:row-span-2 group relative h-[450px] md:h-auto overflow-hidden p-0" onMouseEnter={() => { setIsHoveringSlider(true); playHover(); }} onMouseLeave={() => setIsHoveringSlider(false)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentAppIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 z-10 p-8 h-full flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`w-2 h-2 rounded-full ${myApps[currentAppIndex]?.color}`} />
                                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                                        {t(myApps[currentAppIndex]?.tag) || "Featured App"}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">{myApps[currentAppIndex]?.name}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mt-2 max-w-xs">{t(myApps[currentAppIndex]?.description)}</p>
                            </div>
                            <button
                                onClick={() => navigate(`/app/${myApps[currentAppIndex]?.slug}`)}
                                className="bg-neutral-900 text-white dark:bg-white dark:text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg"
                            >
                                {language === 'fr' ? 'Voir' : 'View'} <ArrowUpRight size={14} />
                            </button>
                        </div>

                        {/* App Icon/Device Context */}
                        <div className="mt-4 md:mt-6 flex justify-center translate-y-16 md:translate-y-12 md:group-hover:translate-y-6 transition-transform duration-500">
                            <div className="w-48 h-64 md:w-56 md:h-72 bg-neutral-100 dark:bg-black rounded-t-[2rem] md:rounded-t-[2.5rem] border-[4px] md:border-[6px] border-white dark:border-neutral-700 shadow-2xl relative overflow-hidden">
                                <div className={`absolute inset-0 opacity-10 dark:opacity-20 ${myApps[currentAppIndex]?.color}`} />
                                
                                {/* Background Image inside device */}
                                <div className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30 mix-blend-overlay">
                                    <img
                                        src={myApps[currentAppIndex]?.images?.[0] || myApps[currentAppIndex]?.screenshots?.[0] || ''}
                                        alt={myApps[currentAppIndex]?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                                    <div className={`w-16 h-16 rounded-2xl ${myApps[currentAppIndex]?.color} mb-4 shadow-2xl flex items-center justify-center`}>
                                        <Smartphone className="text-white" size={32} />
                                    </div>
                                    <span className="text-neutral-600 dark:text-white/80 text-[10px] font-mono tracking-widest uppercase font-bold">
                                        {t(myApps[currentAppIndex]?.category)}
                                    </span>
                                </div>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-300 dark:bg-black rounded-full z-20" />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Background Layer */}
                <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-900 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors duration-500" />

                {/* Slider Controls */}
                <div className="absolute bottom-6 right-8 z-30 flex gap-2">
                    {myApps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentAppIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentAppIndex === idx ? 'w-6 bg-neutral-800 dark:bg-white' : 'w-1.5 bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400 dark:hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </SpotlightCard>

            {/* Services */}
            <SpotlightCard className="md:col-span-2 md:row-span-1 p-6 flex flex-col justify-center min-h-[180px] md:min-h-0">
                <div className="flex items-center gap-2 mb-4">
                    <Layers size={18} className="text-neutral-500 dark:text-neutral-400" />
                    <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-300 uppercase tracking-wide">
                        {language === 'fr' ? 'Ce que je fais' : 'What I do'}
                    </h3>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <ServiceItem text={language === 'fr' ? "Développement iOS Natif" : "Native iOS Development"} />
                    <ServiceItem text={language === 'fr' ? "Applications Web & PWA" : "Web Apps & PWA"} />
                    <ServiceItem text={language === 'fr' ? "Backend & API" : "Backend & API"} />
                    <ServiceItem text={language === 'fr' ? "Déploiement & Cloud" : "Deployment & Cloud"} />
                </div>
            </SpotlightCard>

        </div>
    );
};

export default Projects;
