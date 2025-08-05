import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  technologyFilter: string;
  onTechnologyChange: (technology: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'AI Engineer', label: 'AI Engineer' },
  { id: 'Software Engineer', label: 'Software Engineer' },
  { id: 'DevOps Engineer', label: 'DevOps Engineer' },
  { id: 'Computer Science Engineer', label: 'Computer Science' },
];

export default function ProjectFilters({
  selectedCategory,
  onCategoryChange,
  technologyFilter,
  onTechnologyChange,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-6 mb-12">
      {/* Category Filters */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Filter by Category</h3>
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategoryChange(category.id)}
              className={`filter-button px-4 py-2 rounded-lg font-medium text-sm transition-all focus-visible ${
                selectedCategory === category.id
                  ? 'bg-white text-black border-2 border-white'
                  : 'bg-gray-800 text-white border-2 border-gray-700 hover:border-gray-600'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Filter by Technology</h3>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={technologyFilter}
            onChange={(e) => onTechnologyChange(e.target.value)}
            placeholder="Search by technology (e.g., Python, React, Docker...)"
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
            aria-label="Filter projects by technology"
          />
        </div>
        
        {technologyFilter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-gray-400"
          >
            Filtering by: <span className="text-white font-medium">{technologyFilter}</span>
            <button
              onClick={() => onTechnologyChange('')}
              className="ml-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Clear technology filter"
            >
              ✕
            </button>
          </motion.div>
        )}
      </div>

      {/* Popular Technologies Quick Filters */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-300">Quick Filters</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'Python', 'React', 'TypeScript', 'Docker', 'Kubernetes', 
            'TensorFlow', 'Next.js', 'Java', 'Spring Boot', 'AI'
          ].map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTechnologyChange(tech)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors focus-visible ${
                technologyFilter.toLowerCase() === tech.toLowerCase()
                  ? 'bg-white text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
