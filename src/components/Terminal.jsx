import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../constants';

export const TerminalEasterEgg = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([
        { type: 'output', text: 'CharlyOS v1.0.0 (tty1)' },
        { type: 'output', text: 'Type "help" to see available commands.' }
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const endRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', text: cmd }];
            
            if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            }

            let response = '';
            switch (cmd) {
                case 'help':
                    response = 'Available commands: whoami, projects, contact, clear, exit';
                    break;
                case 'whoami':
                    response = 'Charly Polley - iOS & Web Developer. Age: 15. Status: Ready to code.';
                    break;
                case 'projects':
                    response = 'Navo, SprayHub, HoloNet. Type Cmd+K to explore visually.';
                    break;
                case 'contact':
                    response = `Email: ${personalInfo.email}\nTwitter: ${personalInfo.twitter}\nGitHub: ${personalInfo.github}`;
                    break;
                case 'exit':
                    setIsOpen(false);
                    response = 'Goodbye.';
                    break;
                case '':
                    break;
                default:
                    response = `Command not found: ${cmd}`;
            }

            if (response) {
                response.split('\n').forEach(line => {
                    newHistory.push({ type: 'output', text: line });
                });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    className="fixed top-0 left-0 right-0 h-[50vh] bg-black/90 backdrop-blur-md border-b border-green-500/30 z-[9999] p-4 font-mono text-green-500 overflow-hidden shadow-[0_10px_50px_rgba(34,197,94,0.1)]"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="flex justify-between items-center border-b border-green-500/20 pb-2 mb-4">
                        <span className="text-xs opacity-70">Terminal (Press ` to close)</span>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                    </div>
                    
                    <div className="h-[calc(100%-40px)] overflow-y-auto scrollbar-hide pb-10">
                        {history.map((line, i) => (
                            <div key={i} className="mb-1 leading-relaxed">
                                {line.type === 'input' ? (
                                    <span className="text-white"><span className="text-green-500 mr-2">➜</span>{line.text}</span>
                                ) : (
                                    <span className="opacity-80 whitespace-pre-wrap">{line.text}</span>
                                )}
                            </div>
                        ))}
                        <div className="flex items-center mt-2">
                            <span className="text-green-500 mr-2">➜</span>
                            <input 
                                ref={inputRef}
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none flex-1 text-white placeholder-green-500/20"
                                autoFocus
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                        <div ref={endRef} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
