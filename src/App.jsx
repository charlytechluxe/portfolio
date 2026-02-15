import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AppDetail from './components/AppDetail';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { personalInfo } from './constants';

const MainLayout = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Custom Cursor / Ambient Light */}
            <div
                className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] transition-transform duration-300 ease-out"
                style={{
                    background: 'radial-gradient(circle, rgba(120,119,198,0.3) 0%, transparent 70%)',
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
            />

            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />

            {/* Scroll indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
                style={{ scaleX }}
            />

            <main className="max-w-6xl mx-auto px-4 py-8 md:py-24 relative z-10">
                <Hero />
                <Projects />

                <footer className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
                    <p>© 2026 {personalInfo.name}. Construit avec passion.</p>
                    <div className="flex gap-6">
                        <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">Contact</a>
                    </div>
                </footer>
            </main>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/app/:slug" element={<AppDetail />} />
            </Routes>
        </Router>
    )
}

export default App;
