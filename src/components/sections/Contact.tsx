import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with your actual form handler)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
      value: 'Tunis, Tunisia',
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
              <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-label mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-label mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-label mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all focus-ring ${
                      isSubmitting
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 text-white shadow-lg'
                        : submitStatus === 'error'
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <div className="w-5 h-5 text-green-100">✓</div>
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <div className="w-5 h-5 text-red-100">✗</div>
                        Failed to Send
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-sm text-center"
                    >
                      Thanks for your message! I&apos;ll get back to you soon.
                    </motion.p>
                  )}

                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-sm text-center"
                    >
                      There was an error sending your message. Please try emailing me directly.
                    </motion.p>
                  )}
                </form>
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
