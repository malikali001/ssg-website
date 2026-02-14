'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    once?: boolean;
    id?: string;
}

export default function AnimatedSection({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    className = '',
    once = true,
    id
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-100px' });

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
        none: { y: 0, x: 0 }
    };

    return (
        <motion.div
            ref={ref}
            id={id}
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                x: 0
            } : {}}
            transition={{
                duration,
                delay,
                ease: 'easeOut'
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
