'use client';

import { motion } from 'framer-motion';

export default function AnimatedPage({ children, transitionType = 'fade' }) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { x: '20%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-20%', opacity: 0 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[transitionType]}
      transition={{ 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] // Material Design's standard easing
      }}
    >
      {children}
    </motion.div>
  );
} 