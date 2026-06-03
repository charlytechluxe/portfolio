import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AppDetail from './components/AppDetail';
import NotFound from './components/NotFound';
import { CommandMenu } from './components/CommandMenu';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { personalInfo } from './constants';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Sun, Moon, Globe } from 'lucide-react';

const MainLayout = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-500">
            {/* Top right floating controls */}
            <div className="fixed top-6 right-6 z-50 flex gap-3 items-center">
                <button 
                    onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                    className="hidden md:flex items-center gap-2 px-3 h-10 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md shadow-lg border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 transition-colors text-xs font-medium text-neutral-500 dark:text-neutral-400"
                >
                    <span className="flex items-center gap-1"><kbd className="font-sans">⌘</kbd> K</span>
                </button>
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-900 shadow-lg border border-black/5 dark:border-white/10 hover:scale-110 transition-transform text-xs font-bold"
                >
                    {language === 'fr' ? 'EN' : 'FR'}
                </button>
                <button 
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-900 shadow-lg border border-black/5 dark:border-white/10 hover:scale-110 transition-transform"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>

            {/* Command Menu (Spotlight) */}
            <CommandMenu />

            {/* Custom Cursor / Ambient Light - Hidden on Mobile */}
            <div
                className="hidden md:block fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20 blur-[100px] transition-transform duration-300 ease-out"
                style={{
                    background: theme === 'dark' 
                        ? 'radial-gradient(circle, rgba(120,119,198,0.3) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
            />

            <div className="fixed inset-0 pointer-events-none transition-colors duration-500" 
                 style={{ 
                    background: theme === 'dark' 
                        ? 'radial-gradient(circle at 50% 0%, rgba(120,119,198,0.1), transparent 50%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.05), transparent 50%)'
                 }} 
            />

            {/* Scroll indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                style={{ scaleX }}
            />

            <motion.main 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto px-4 py-24 relative z-10"
            >
                <Hero />
                <Projects />

                <footer className="mt-20 border-t border-black/10 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
                    <p>© 2026 {personalInfo.name}. {language === 'fr' ? 'Construit avec passion.' : 'Built with passion.'}</p>
                    <div className="flex gap-6">
                        <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
                    </div>
                </footer>
            </motion.main>
        </div>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout />} />
                <Route path="/app/:slug" element={<AppDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <AnimatedRoutes />
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default App;
