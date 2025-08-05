'use client';

import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="heading-lg text-gray-900 mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8 items-start"
            >
              <div className="text-sm text-gray-500 space-y-2">
                <div className="text-2xl">{exp.flag}</div>
                <div className="font-medium text-gray-900">{exp.country}</div>
                <div>{exp.year}</div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-medium text-gray-900">{exp.role}</h3>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {exp.stats}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    exp.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {exp.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}