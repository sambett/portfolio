'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AboutData {
  bio: string;
  background: string;
  education: string;
  location: string;
  interests: string[];
  personalNote: string;
}

export function About() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    // Load about data
    const loadAboutData = async () => {
      try {
        const data = await import('../../data/about.json');
        setAboutData(data.about);
      } catch (error) {
        console.error('Error loading about data:', error);
      }
    };
    loadAboutData();
  }, []);

  if (!aboutData) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-neutral-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-display-lg mb-6 gradient-text">About</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <motion.p 
                className="text-body-lg leading-relaxed animate-fade-up-once"
                variants={itemVariants}
              >
                {aboutData.bio}
              </motion.p>
              
              <motion.p 
                className="text-body leading-relaxed animate-fade-up-once"
                variants={itemVariants}
              >
                {aboutData.background}
              </motion.p>

              <motion.p 
                className="text-body leading-relaxed italic border-l-4 border-primary-200 pl-6 animate-fade-up-once"
                variants={itemVariants}
              >
                {aboutData.personalNote}
              </motion.p>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              
              {/* Education & Location */}
              <div className="card card-hover p-6">
                <h3 className="text-heading-sm mb-4 text-primary-600">Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-label mb-1">Education</div>
                    <div className="text-body-sm">{aboutData.education}</div>
                  </div>
                  <div>
                    <div className="text-label mb-1">Location</div>
                    <div className="text-body-sm flex items-center gap-2">
                      <span>🇹🇳</span> {aboutData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="card card-hover p-6">
                <h3 className="text-heading-sm mb-4 text-primary-600">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: [0.25, 1, 0.5, 1]
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100 hover:bg-primary-100 transition-colors animate-card-lift"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
