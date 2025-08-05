import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleCardClick}
      className="project-card bg-gray-900 rounded-xl p-6 cursor-pointer border border-gray-800 hover:border-gray-600 group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <Star className="w-5 h-5 text-yellow-400 fill-current" aria-label="Featured project" />
            )}
          </div>
          <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full font-medium">
            {project.category}
          </span>
        </div>
        
        {/* Action Links */}
        <div className="flex items-center gap-2 ml-4">
          {project.githubUrl && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleLinkClick(e, project.githubUrl!)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus-visible"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </motion.button>
          )}
          {project.demoUrl && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleLinkClick(e, project.demoUrl!)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus-visible"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded font-medium"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 6 && (
          <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded font-medium">
            +{project.techStack.length - 6} more
          </span>
        )}
      </div>

      {/* Impact Preview */}
      {project.impact.length > 0 && (
        <div className="border-t border-gray-800 pt-4">
          <p className="text-sm text-gray-400 line-clamp-2">
            {project.impact[0].replace(/^[🔥📊⚡🎯🏆🌍🔬🇫🇷⚕️🏠🔍🏗️📱🧮📚🧬🤖🎭🔄🌱📈🌏🦺]/g, '').trim()}
          </p>
          {project.impact.length > 1 && (
            <p className="text-xs text-gray-500 mt-1">
              +{project.impact.length - 1} more impact{project.impact.length > 2 ? 's' : ''}
            </p>
          )}
        </div>
      )}

      {/* Click indicator */}
      <div className="mt-4 pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 text-center opacity-70 group-hover:opacity-100 transition-opacity">
          Click to view full details →
        </p>
      </div>
    </motion.div>
  );
}
