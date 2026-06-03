import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollRevealText = ({ text, className = "" }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    });

    const words = text.split(" ");

    return (
        <p ref={containerRef} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                
                return (
                    <motion.span key={i} style={{ opacity }} className="mr-1">
                        {word}
                    </motion.span>
                );
            })}
        </p>
    );
};
