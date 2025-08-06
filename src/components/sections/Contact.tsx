import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Download, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    
    // Download CV with success animation
    try {
      await new Promise(resolve => setTimeout(resolve, 800)); // Brief loading for UX
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Selma_Bettaieb_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('success');
    } catch {
      setDownloadStatus('error');
    } finally {
      setIsDownloading(false);
      setTimeout(() => setDownloadStatus('idle'), 4000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bettaiebselma@fss.u-sfax.tn',
      href: 'mailto:bettaiebselma@fss.u-sfax.tn',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sambett',
      href: 'https://www.linkedin.com/in/sambett/',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/sambett',
      href: 'https://github.com/sambett',
      color: 'text-gray-700 hover:text-gray-900'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Monastir, Tunisia',
      href: null,
      color: 'text-gray-700 hover:text-gray-900'
    }
  ];

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
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-display-lg mb-6 gradient-text">Let&apos;s Work Together</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
            <p className="text-body-lg max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities and collaborations. 
              Whether you have a project idea, job opportunity, or just want to connect, 
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card surface-subtle p-8">
                <h3 className="text-heading-md mb-6 text-gray-900">Get In Touch</h3>
                <p className="text-body leading-relaxed mb-8">
                  I&apos;m currently open to full-time opportunities in AI Engineering, 
                  Full-Stack Development, and DevOps roles. I&apos;m particularly interested 
                  in positions where I can apply machine learning to solve real-world problems.
                </p>

                <div className="space-y-6">
                  {contactLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md border border-gray-100">
                        <link.icon className={`w-6 h-6 ${link.color}`} />
                      </div>
                      <div>
                        <div className="text-label mb-1">{link.label}</div>
                        {link.href ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${link.color} transition-colors font-medium focus-ring`}
                          >
                            {link.value}
                          </a>
                        ) : (
                          <div className="text-gray-900 font-medium">{link.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Availability Status */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-900 font-medium">Currently Available</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Open to new opportunities starting immediately. 
                    Interested in remote, hybrid, or on-site positions.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <FileText className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Download My Resume</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Get my complete background in AI Engineering, Full-Stack Development & DevOps. 
                    Ready for immediate opportunities!
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">AI Engineer</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Full-Stack Dev</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">DevOps</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">Global Experience</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <motion.button
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    whileHover={{ scale: isDownloading ? 1 : 1.02 }}
                    whileTap={{ scale: isDownloading ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all focus-ring shadow-lg hover:shadow-xl ${
                      isDownloading
                        ? 'bg-blue-400 text-white cursor-not-allowed'
                        : downloadStatus === 'success'
                        ? 'bg-green-500 text-white scale-105'
                        : downloadStatus === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105'
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Preparing Download...
                      </>
                    ) : downloadStatus === 'success' ? (
                      <>
                        <motion.div 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-6 h-6 text-white"
                        >
                          ✓
                        </motion.div>
                        Downloaded! 
                      </>
                    ) : downloadStatus === 'error' ? (
                      <>
                        <div className="w-6 h-6 text-white">✗</div>
                        Download Failed
                      </>
                    ) : (
                      <>
                        <Download className="w-6 h-6" />
                        Download Resume (PDF)
                      </>
                    )}
                  </motion.button>

                  {downloadStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    >
                      <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl mb-3"
                      >
                        📄✨
                      </motion.div>
                      <p className="text-green-700 font-bold text-lg mb-2">
                        Resume Downloaded Successfully!
                      </p>
                      <p className="text-green-600">
                        Thanks for your interest! Feel free to reach out via email or LinkedIn.
                      </p>
                    </motion.div>
                  )}

                  {downloadStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-center bg-red-50 border border-red-200 rounded-xl p-4"
                    >
                      <p className="font-medium mb-1">Download failed!</p>
                      <p className="text-sm">Please try again or email me directly for my resume.</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Selma Bettaieb. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
