import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, myApps } from '../constants';
import { Sun, Moon, Globe, Smartphone, FileText, Mail, Github, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CommandMenu = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/20 dark:bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-2xl px-4"
                    >
                        <Command label="Global Command Menu" className="w-full">
                            <Command.Input placeholder={language === 'fr' ? 'Que cherchez-vous ? (Projets, Contact, Thème...)' : 'What do you need? (Projects, Contact, Theme...)'} />
                            
                            <Command.List>
                                <Command.Empty>{language === 'fr' ? 'Aucun résultat.' : 'No results found.'}</Command.Empty>

                                <Command.Group heading={language === 'fr' ? 'Général' : 'General'}>
                                    <Command.Item onSelect={() => runCommand(toggleTheme)}>
                                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                                        {language === 'fr' ? `Passer en mode ${theme === 'dark' ? 'Clair' : 'Sombre'}` : `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                                    </Command.Item>
                                    <Command.Item onSelect={() => runCommand(toggleLanguage)}>
                                        <Globe size={16} />
                                        {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                                    </Command.Item>
                                    <Command.Item onSelect={() => runCommand(() => window.open('/assets/CV.pdf', '_blank'))}>
                                        <FileText size={16} />
                                        {language === 'fr' ? 'Télécharger mon CV' : 'Download Resume'}
                                    </Command.Item>
                                </Command.Group>

                                <Command.Group heading={language === 'fr' ? 'Mes Projets' : 'My Projects'}>
                                    {myApps.map((app) => (
                                        <Command.Item 
                                            key={app.slug} 
                                            onSelect={() => runCommand(() => navigate(`/app/${app.slug}`))}
                                        >
                                            <Smartphone size={16} className={app?.color?.replace('bg-', 'text-') || 'text-neutral-500'} />
                                            {app.name} - {t(app.category)}
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                <Command.Group heading="Contact">
                                    <Command.Item onSelect={() => runCommand(() => window.open(`mailto:${personalInfo.email}`))}>
                                        <Mail size={16} />
                                        Email
                                    </Command.Item>
                                    <Command.Item onSelect={() => runCommand(() => window.open(personalInfo.github, '_blank'))}>
                                        <Github size={16} />
                                        GitHub
                                    </Command.Item>
                                    <Command.Item onSelect={() => runCommand(() => window.open(personalInfo.twitter, '_blank'))}>
                                        <Twitter size={16} />
                                        Twitter
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
