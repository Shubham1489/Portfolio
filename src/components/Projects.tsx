import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Restaurant Recommendation System",
      description: "A Flask web application that provides personalized restaurant recommendations using machine learning algorithms. Features interactive visualizations and user preference analysis to deliver tailored dining suggestions.",
      techStack: ["Python", "Flask", "Machine Learning", "Pandas", "Scikit-learn", "HTML/CSS", "JavaScript"],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Shubham1489",
      demoUrl: "#",
      featured: true
    },
    {
      title: "Weather Insight",
      description: "A Python console application that fetches and displays weekly weather forecasts using external APIs. Provides detailed weather analytics with data visualization and historical weather pattern analysis.",
      techStack: ["Python", "APIs", "Data Analysis", "JSON", "Requests", "Matplotlib"],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Shubham1489",
      demoUrl: "#",
      featured: false
    },
    {
      title: "AutoMail Pro",
      description: "An automated email notification system built with Python that handles scheduling, attachments, and bulk email operations. Features template management and delivery tracking capabilities.",
      techStack: ["Python", "SMTP", "Email APIs", "Scheduling", "File Handling", "Automation"],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Shubham1489",
      demoUrl: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

   const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",   // ✅ literal type
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            animate={isInView ? { backgroundImage: [
              'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)',
              'linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6)',
              'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)'
            ] } : {}}
            style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A showcase of my technical projects demonstrating skills in data science, 
            web development, and automation
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card 
                className="group hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-white/90 backdrop-blur-sm border-0"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <Badge className="bg-blue-600 text-white px-3 py-1 shadow-lg absolute -top--1.5 left-0.5 z-10">
                    Featured
                  </Badge>
                )}

                {/* Image */}
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg h-48 group">
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="text-4xl font-bold text-blue-600 opacity-50"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.title.charAt(0)}
                      </motion.div>
                    </motion.div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-6 relative">
                  <div className="relative z-10">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all duration-300" onClick={() => window.open(project.demoUrl, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: 1, duration: 0.8 }}>
          <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500 px-8 py-3 rounded-full shadow-lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
