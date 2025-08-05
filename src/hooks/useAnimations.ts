'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for easy animation management
 * Provides intersection observer for scroll-triggered animations
 */
export function useAnimations<T extends HTMLElement = HTMLDivElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animated, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * Animation class utilities - easily apply micro-interactions
 */
export const animations = {
  // Fade up once - for content that slides up and fades in
  fadeUp: 'animate-fade-up-once',
  
  // Card lift - for interactive cards (2px hover)
  cardLift: 'animate-card-lift card-hover',
  
  // Letter reveal - for text that reveals letter by letter
  letterReveal: 'animate-letter-reveal',
  
  // Staggered children - for lists that animate in sequence
  staggerChildren: 'stagger-children',
  
  // Combined utilities
  fadeUpCard: 'animate-fade-up-once animate-card-lift card-hover',
  interactiveCard: 'card card-interactive animate-card-lift',
} as const;

/**
 * Hook for staggered animations of child elements
 */
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(delay = 100) {
  const [animate, setAnimate] = useState(false);
  const { ref, isVisible } = useAnimations<T>();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return {
    ref,
    className: `stagger-children ${animate ? 'animate' : ''}`,
    isVisible: animate,
  };
}

/**
 * Example usage:
 * 
 * // Basic fade up animation
 * const { ref, isVisible } = useAnimations();
 * <div ref={ref} className={isVisible ? animations.fadeUp : 'opacity-0'}>
 * 
 * // Card with hover effects
 * <div className={animations.interactiveCard}>
 * 
 * // Staggered list animation
 * const stagger = useStaggerAnimation();
 * <ul ref={stagger.ref} className={stagger.className}>
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 * </ul>
 */