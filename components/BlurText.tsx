"use client";

import { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: any;
  animationTo?: any;
  easing?: string;
  onAnimationComplete?: () => void;
}

export const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOut',
  onAnimationComplete,
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(() => {
    return direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -50 }
      : { filter: 'blur(10px)', opacity: 0, y: 50 };
  }, [direction]);

  const defaultTo = useMemo(() => {
    return [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ];
  }, [direction]);

  const fromSnapshot = animationFrom || defaultFrom;
  const toSnapshots = animationTo || defaultTo;

  return (
    <p ref={ref} className={`BlurText ${className}`} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={fromSnapshot}
          animate={inView ? toSnapshots : fromSnapshot}
          transition={{
            duration: 0.8,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          onAnimationComplete={() => {
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
          style={{
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
            marginRight: animateBy === 'words' ? '0.3em' : '0',
          }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </p>
  );
};
