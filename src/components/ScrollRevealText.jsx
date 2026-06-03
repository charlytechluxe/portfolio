import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ word, i, total, scrollYProgress }) => {
    const start = i / total;
    const end = start + (1 / total);
    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
    
    return (
        <React.Fragment>
            <motion.span style={{ opacity }} className="inline-block">
                {word}
            </motion.span>
            {i < total - 1 && " "}
        </React.Fragment>
    );
};

export const ScrollRevealText = ({ text, className = "" }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    });

    const words = text.split(" ");

    return (
        <p ref={containerRef} className={className}>
            {words.map((word, i) => (
                <Word 
                    key={`${i}-${word}`}
                    word={word}
                    i={i}
                    total={words.length}
                    scrollYProgress={scrollYProgress}
                />
            ))}
        </p>
    );
};
