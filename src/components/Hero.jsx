import { motion } from 'framer-motion';
import { personalInfo } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { ScrollRevealText } from './ScrollRevealText';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <header className="mb-16 fade-in-up">
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${personalInfo.available ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500'} animate-pulse`} />
                <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium tracking-wide uppercase">
                    {personalInfo.available ? t(personalInfo.statusText).available : t(personalInfo.statusText).busy}
                </span>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60"
            >
                {t(personalInfo.role)}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl"
            >
                <ScrollRevealText 
                    text={t(personalInfo.bio)}
                    className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium"
                />
            </motion.div>
        </header>
    );
};

export default Hero;
