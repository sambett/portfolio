import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-white flex items-center relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Hello, I&apos;m{' '}
                <motion.span
                  className="text-blue-600 relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Selma
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-600 max-w-prose leading-relaxed"
                variants={itemVariants}
              >
                AI Engineer & Full-Stack Developer crafting innovative solutions that bridge 
                cutting-edge technology with real-world impact.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {['AI & Machine Learning', 'Full-Stack Development', 'DevOps & Cloud', 'Computer Vision'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="group bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:bettaiebselma@fss.u-sfax.tn"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 pt-8">
              <motion.a
                href="https://github.com/sambett"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sambett/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:bettaiebselma@fss.u-sfax.tn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Selma Bettaieb - AI Engineer & Full-Stack Developer"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-2xl" />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors focus-visible"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
