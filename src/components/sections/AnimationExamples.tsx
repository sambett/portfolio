'use client';

import { useAnimations, useStaggerAnimation, animations } from '../../hooks/useAnimations';

/**
 * Example component demonstrating all micro-interactions
 * Use this as a reference for implementing animations in your portfolio sections
 */
export function AnimationExamples() {
  const fadeUpExample = useAnimations();
  const staggerExample = useStaggerAnimation<HTMLUListElement>();

  return (
    <div className="section-padding">
      <div className="container-custom space-y-16">
        
        {/* Fade Up Animation Example */}
        <section>
          <h2 className="text-heading-lg mb-8">Fade Up Animation</h2>
          <div 
            ref={fadeUpExample.ref}
            className={`${fadeUpExample.isVisible ? animations.fadeUp : 'opacity-0'} card p-8`}
          >
            <h3 className="text-heading-sm mb-4">This card fades up when scrolled into view</h3>
            <p className="text-body">Perfect for hero sections, about content, and key information.</p>
          </div>
        </section>

        {/* Card Lift Examples */}
        <section>
          <h2 className="text-heading-lg mb-8">Interactive Cards (2px Lift)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Basic Card Hover */}
            <div className={`${animations.interactiveCard} p-6`}>
              <h3 className="text-heading-sm mb-3">Basic Hover</h3>
              <p className="text-body-sm">Hover me for 2px lift + shadow</p>
            </div>

            {/* Card with Press Effect */}
            <div className={`${animations.interactiveCard} card-press p-6`}>
              <h3 className="text-heading-sm mb-3">With Press Effect</h3>
              <p className="text-body-sm">Click me for press animation</p>
            </div>

            {/* Fade Up + Card Lift Combined */}
            <div className={`${animations.fadeUpCard} p-6`}>
              <h3 className="text-heading-sm mb-3">Fade Up + Hover</h3>
              <p className="text-body-sm">Combined animations</p>
            </div>
          </div>
        </section>

        {/* Letter Reveal Animation */}
        <section>
          <h2 className="text-heading-lg mb-8">Letter Reveal</h2>
          <h1 className={`text-display-xl ${animations.letterReveal}`}>
            Beautiful Typography
          </h1>
          <p className="text-body mt-4">
            Perfect for hero headings and important titles that need dramatic entrance.
          </p>
        </section>

        {/* Staggered Animation Example */}
        <section>
          <h2 className="text-heading-lg mb-8">Staggered List Animation</h2>
          <ul ref={staggerExample.ref} className={`${staggerExample.className} space-y-4`}>
            <li className="card p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-body">First item animates in</span>
              </div>
            </li>
            <li className="card p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-body">Second item follows</span>
              </div>
            </li>
            <li className="card p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-body">Third item completes sequence</span>
              </div>
            </li>
            <li className="card p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-body">Perfect for project lists!</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Additional Animation Examples */}
        <section>
          <h2 className="text-heading-lg mb-8">More Animation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="card p-4 animate-slide-in-left opacity-0" 
                 style={{ animationDelay: '0.1s' }}>
              <h4 className="text-heading-sm mb-2">Slide Left</h4>
              <p className="text-body-sm">Slides in from left</p>
            </div>

            <div className="card p-4 animate-slide-in-right opacity-0"
                 style={{ animationDelay: '0.2s' }}>
              <h4 className="text-heading-sm mb-2">Slide Right</h4>
              <p className="text-body-sm">Slides in from right</p>
            </div>

            <div className="card p-4 animate-scale-in opacity-0"
                 style={{ animationDelay: '0.3s' }}>
              <h4 className="text-heading-sm mb-2">Scale In</h4>
              <p className="text-body-sm">Scales up smoothly</p>
            </div>

            <div className="card p-4 animate-fade-in-once opacity-0"
                 style={{ animationDelay: '0.4s' }}>
              <h4 className="text-heading-sm mb-2">Fade In</h4>
              <p className="text-body-sm">Simple fade effect</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

/**
 * QUICK REFERENCE - Copy these class combinations:
 * 
 * 1. Fade up on scroll:
 *    className={`${animations.fadeUp} opacity-0`}
 * 
 * 2. Interactive card with hover:
 *    className={animations.interactiveCard}
 * 
 * 3. Card with press effect:
 *    className={`${animations.interactiveCard} card-press`}
 * 
 * 4. Letter reveal heading:
 *    className={animations.letterReveal}
 * 
 * 5. Staggered list:
 *    const stagger = useStaggerAnimation();
 *    <ul ref={stagger.ref} className={stagger.className}>
 * 
 * 6. Combined fade + hover:
 *    className={animations.fadeUpCard}
 */