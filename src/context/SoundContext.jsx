import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const audioCtxRef = useRef(null);

    const getAudioContext = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    };

    const playTone = useCallback((frequency, type, duration, vol) => {
        if (isMuted) return;
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    }, [isMuted]);

    // UI Sounds
    const playHover = useCallback(() => {
        playTone(600, 'sine', 0.05, 0.05);
    }, [playTone]);

    const playClick = useCallback(() => {
        playTone(900, 'triangle', 0.1, 0.1);
    }, [playTone]);

    const playSwitch = useCallback(() => {
        // Double tone for a switch effect
        playTone(400, 'square', 0.1, 0.05);
        setTimeout(() => playTone(600, 'square', 0.1, 0.05), 50);
    }, [playTone]);

    const toggleMute = () => setIsMuted(prev => !prev);

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playSwitch }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => useContext(SoundContext);
