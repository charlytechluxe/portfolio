import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CloudOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NotFound = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 overflow-hidden relative transition-colors duration-500">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="z-10 flex flex-col items-center text-center max-w-lg"
            >
                <div className="w-24 h-24 mb-8 rounded-full bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-2xl">
                    <CloudOff className="text-neutral-500 dark:text-neutral-400" size={40} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-400 dark:from-white dark:to-white/50">
                    404
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    {language === 'fr' ? 'Perdu dans le cloud' : 'Lost in the cloud'}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-lg leading-relaxed">
                    {language === 'fr' 
                        ? "La page que vous recherchez n'existe pas ou a été déplacée. Ne vous inquiétez pas, même les meilleures requêtes se perdent parfois."
                        : "The page you are looking for does not exist or has been moved. Don't worry, even the best requests get lost sometimes."}
                </p>

                <button 
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 bg-neutral-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    {language === 'fr' ? "Retour à l'accueil" : 'Back to home'}
                </button>
            </motion.div>
        </div>
    );
};

export default NotFound;
