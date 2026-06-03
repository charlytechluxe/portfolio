import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CloudOff } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 overflow-hidden relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="z-10 flex flex-col items-center text-center max-w-lg"
            >
                <div className="w-24 h-24 mb-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-2xl">
                    <CloudOff className="text-neutral-400" size={40} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    404
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Perdu dans le cloud
                </h2>
                
                <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
                    La page que vous recherchez n'existe pas ou a été déplacée. Ne vous inquiétez pas, même les meilleures requêtes se perdent parfois.
                </p>

                <button 
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </button>
            </motion.div>
        </div>
    );
};

export default NotFound;
