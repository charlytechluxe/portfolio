import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { myApps } from '../constants';
import { ArrowLeft, Smartphone, Code2, CheckCircle2 } from 'lucide-react';

const AppDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const app = myApps.find(a => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!app) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Application non trouvée.</p>
                <button onClick={() => navigate('/')} className="ml-4 text-indigo-500">Retour</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500/30">
            {/* Background decoration */}
            <div className={`fixed inset-0 bg-gradient-to-b opacity-10 pointer-events-none transition-colors duration-1000 ${app.color.replace('bg-', 'from-')}`} />

            <main className="max-w-6xl mx-auto px-4 py-24 relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Retour au portfolio
                </motion.button>

                {/* Hero Section */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-neutral-400">
                            {app.category}
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8"
                    >
                        {app.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed"
                    >
                        {app.fullDescription}
                    </motion.p>
                </header>

                {/* Detail Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Screenshots Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 glass rounded-[3rem] overflow-hidden flex flex-col group relative bg-neutral-900/40"
                    >
                        {app.screenshots ? (
                            <div className="flex gap-4 md:gap-8 p-6 md:p-12 overflow-x-auto scrollbar-hide snap-x">
                                {app.screenshots.map((src, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -10 }}
                                        className="min-w-[280px] md:min-w-[320px] h-[580px] md:h-[680px] rounded-[3rem] border-[10px] border-neutral-900 shadow-2xl overflow-hidden bg-black snap-center flex-shrink-0 flex items-center justify-center"
                                    >
                                        <img 
                                            src={src} 
                                            alt={`${app.name} screenshot ${idx + 1}`} 
                                            className="w-full h-full object-contain" 
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="aspect-video flex items-center justify-center relative">
                                <div className={`absolute inset-0 opacity-20 ${app.color}`} />
                                <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                                    <Smartphone size={80} className="text-white/20" />
                                    <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Section Screenshots / Mockup bientôt disponible</span>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass p-8 rounded-[2.5rem] flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <Code2 className="text-indigo-400" />
                            <h3 className="text-xl font-bold">Stack Technique</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {app.tech.map((t, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-3 glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem]"
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center md:text-left">Fonctionnalités clés</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                            {app.features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col gap-3 md:gap-4 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                    <CheckCircle2 className="text-green-500" size={24} />
                                    <span className="font-semibold text-base md:text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
};

export default AppDetail;
