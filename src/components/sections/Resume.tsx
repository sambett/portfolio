'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="min-h-screen bg-gray-50 flex items-center snap-section">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="heading-lg text-gray-900 mb-8"
        >
          Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Download my resume to learn more about my experience, projects, and technical skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.a
            href="/resume.pdf"
            download="Selma_Bettaieb_Resume.pdf"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-300 transition-colors ml-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
            <span>View Online</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
