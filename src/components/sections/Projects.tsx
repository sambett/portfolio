import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [technologyFilter, setTechnologyFilter] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const data = await response.json();
        setProjects(data.projects);
        setFilteredProjects(data.projects);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by technology
    if (technologyFilter) {
      const techQuery = technologyFilter.toLowerCase();
      filtered = filtered.filter(project =>
        project.techStack.some(tech => tech.toLowerCase().includes(techQuery))
      );
    }

    setFilteredProjects(filtered);
  }, [projects, selectedCategory, technologyFilter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  if (loading) {
    return (
      <section id="projects" className="scroll-section min-h-screen bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-800 rounded w-96 mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-800 rounded-xl h-64"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="scroll-section min-h-screen bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-red-400 mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="scroll-section min-h-screen bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of innovative solutions spanning AI, full-stack development, 
              and DevOps. Each project tackles real-world problems with cutting-edge technology.
            </p>
          </motion.div>

          {/* Filters */}
          <ProjectFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            technologyFilter={technologyFilter}
            onTechnologyChange={setTechnologyFilter}
          />

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="text-gray-400 text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
              {selectedCategory !== 'all' && (
                <span> in <span className="text-white font-medium">{selectedCategory}</span></span>
              )}
              {technologyFilter && (
                <span> using <span className="text-white font-medium">{technologyFilter}</span></span>
              )}
            </p>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your filters or search for a different technology.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setTechnologyFilter('');
                }}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors focus-visible"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {projects.filter(p => p.category === 'AI Engineer').length}
              </div>
              <div className="text-gray-400">AI Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-400">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {new Set(projects.flatMap(p => p.techStack)).size}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
