'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Globe, 
  FileText, 
  Zap, 
  Shield,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react';
import { ImpactData } from '../../types';

interface GlobalImpactProps {
  impactData: ImpactData;
}

const iconMap = {
  users: Users,
  target: Target,
  globe: Globe,
  fileText: FileText,
  zap: Zap,
  shield: Shield,
  trendingUp: TrendingUp,
  award: Award,
  heart: Heart,
};

export function GlobalImpact({ impactData }: GlobalImpactProps) {
  return (
    <section id="global-impact" className="min-h-screen bg-white flex items-center snap-section">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            {impactData.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-8">
            {impactData.subtitle}
          </p>
          
          {/* Subtle divider */}
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactData.metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp;
            
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Metric Value */}
                <div className="text-3xl font-light text-gray-900 mb-2 text-center">
                  {metric.value}
                </div>
                
                {/* Metric Label */}
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-3 text-center font-medium">
                  {metric.label}
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Mission Statement */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
              Mission
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              {impactData.mission}
            </p>
          </div>

          {/* Philosophy */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-base leading-relaxed text-gray-600 font-light italic">
              {impactData.philosophy}
            </p>
          </div>

          {/* Call to action or quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
              <div className="w-8 h-px bg-gray-300"></div>
              <span className="italic">&ldquo;Technology in service of humanity&rdquo;</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
