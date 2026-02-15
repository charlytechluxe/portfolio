import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpRight, Github, Twitter, Mail, Award, Layers,
    Code2, Sparkles, Smartphone
} from 'lucide-react';
import { awards, myApps, personalInfo } from '../constants';

import { useNavigate } from 'react-router-dom';

const Card = ({ children, className }) => (
    <div className={`bg-neutral-900/60 border border-white/5 rounded-[2rem] backdrop-blur-md hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden ${className}`}>
        {children}
    </div>
);

const TechBadge = ({ text }) => (
    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
        {text}
    </span>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white text-white hover:text-black hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);

const ServiceItem = ({ text }) => (
    <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-default">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
        <span className="text-sm font-medium">{text}</span>
    </div>
);

const Projects = () => {
    const [currentAppIndex, setCurrentAppIndex] = useState(0);
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[180px]">

            {/* Tech Stack */}
            <Card className="md:col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between group h-[380px] md:h-auto">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300 border border-white/5">
                        <Code2 className="text-indigo-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Expertise iOS & Web</h3>
                    <p className="text-neutral-400 leading-relaxed">
                        Développement d'applications natives avec SwiftUI et création d'écosystèmes web robustes. Je gère l'intégralité du développement technique, du code au déploiement.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    <TechBadge text="SwiftUI" />
                    <TechBadge text="React" />
                    <TechBadge text="Tailwind" />
                    <TechBadge text="Node.js" />
                    <TechBadge text="Firebase" />
                </div>
            </Card>

            {/* Award Card */}
            <Card className="md:col-span-1 md:row-span-2 group h-[380px] md:h-auto">
                <div className={`absolute inset-0 bg-gradient-to-br ${awards[0].color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

                <div className="p-6 h-full flex flex-col items-center justify-center text-center space-y-6 relative z-10">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${awards[0].color} flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-500 border-4 border-black/20`}>
                        <Award className="text-white drop-shadow-md" size={48} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">{awards[0].title}</h3>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-200 border border-amber-500/30">
                            {awards[0].status} {awards[0].year}
                        </span>
                    </div>
                    <p className="text-xs text-neutral-400">
                        {awards[0].description}
                    </p>
                </div>
            </Card>

            {/* Socials */}
            <Card className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center gap-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-neutral-200">Me Contacter</h3>
                    <Mail size={16} className="text-indigo-400" />
                </div>
                <div className="flex gap-3">
                    <SocialIcon icon={<Twitter size={18} />} href={personalInfo.twitter} />
                    <SocialIcon icon={<Github size={18} />} href={personalInfo.github} />
                    <SocialIcon icon={<Mail size={18} />} href={`mailto:${personalInfo.email}`} />
                </div>
            </Card>

            {/* Stats */}
            <Card className="md:col-span-1 md:row-span-1 p-6 flex items-center justify-between group">
                <div>
                    <div className="text-4xl font-bold text-white group-hover:text-amber-400 transition-colors">100%</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mt-1">Passion & Mindset</div>
                </div>
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <Sparkles className="text-yellow-200" size={20} />
                </div>
            </Card>

            {/* App Showcase Slider */}
            <Card className="md:col-span-2 md:row-span-2 group relative h-[450px] md:h-auto">
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
                                    <span className={`w-2 h-2 rounded-full ${myApps[currentAppIndex].color}`} />
                                    <span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                                        {myApps[currentAppIndex].tag || "Featured App"}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">{myApps[currentAppIndex].name}</h3>
                                <p className="text-neutral-400 text-xs md:text-sm mt-2 max-w-xs">{myApps[currentAppIndex].description}</p>
                            </div>
                            <button
                                onClick={() => navigate(`/app/${myApps[currentAppIndex].slug}`)}
                                className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap"
                            >
                                Voir <ArrowUpRight size={14} />
                            </button>
                        </div>

                        {/* App Icon/Device Context */}
                        <div className="mt-4 md:mt-6 flex justify-center translate-y-16 md:translate-y-12 md:group-hover:translate-y-6 transition-transform duration-500">
                            <div className="w-48 h-64 md:w-56 md:h-72 bg-black rounded-t-[2rem] md:rounded-t-[2.5rem] border-[4px] md:border-[6px] border-neutral-700 shadow-2xl relative overflow-hidden">
                                <div className={`absolute inset-0 opacity-20 ${myApps[currentAppIndex].color}`} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                    <div className={`w-16 h-16 rounded-2xl ${myApps[currentAppIndex].color} mb-4 shadow-2xl flex items-center justify-center`}>
                                        <Smartphone className="text-white" size={32} />
                                    </div>
                                    <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase">
                                        {myApps[currentAppIndex].category}
                                    </span>
                                </div>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Background Layer */}
                <div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-500" />

                {/* Slider Controls */}
                <div className="absolute bottom-6 right-8 z-30 flex gap-2">
                    {myApps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentAppIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentAppIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </Card>

            {/* Services */}
            <Card className="md:col-span-2 md:row-span-1 p-6 flex flex-col justify-center min-h-[180px] md:min-h-0">
                <div className="flex items-center gap-2 mb-4">
                    <Layers size={18} className="text-neutral-400" />
                    <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wide">Ce que je fais</h3>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <ServiceItem text="Développement iOS Native" />
                    <ServiceItem text="Applications Web & PWA" />
                    <ServiceItem text="Backend & API" />
                    <ServiceItem text="Déploiement & Cloud" />
                </div>
            </Card>

        </div>
    );
};

export default Projects;
