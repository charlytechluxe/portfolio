import { motion } from 'framer-motion';
import { personalInfo } from '../constants';

const Hero = () => {
    return (
        <header className="mb-16 fade-in-up">
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${personalInfo.available ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500'} animate-pulse`} />
                <span className="text-neutral-400 text-sm font-medium tracking-wide uppercase">
                    {personalInfo.available ? 'Disponible pour projets' : 'Actuellement complet'}
                </span>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
                {personalInfo.role}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
                {personalInfo.bio}
            </motion.p>
        </header>
    );
};

export default Hero;
