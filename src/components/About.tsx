import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from "framer-motion";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            animate={inView ? {
              backgroundImage: [
                'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)',
                'linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6)',
                'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)'
              ]
            } : {}}
            style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A dedicated BCA Data Science student with a passion for leveraging technology 
            to solve real-world problems through data-driven insights and innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm group">
                <CardContent className="p-6 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div 
                      className="bg-blue-100 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-xl font-semibold text-gray-900 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Education
                      </motion.h3>
                      <motion.p 
                        className="text-lg font-medium text-gray-800"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        BCA – Data Science
                      </motion.p>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        UPES Dehradun
                      </p>
                      <motion.p 
                        className="text-blue-600 font-medium mt-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        CGPA: 7.45/10
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-l-4 border-l-green-600 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm group">
                <CardContent className="p-6 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div 
                      className="bg-green-100 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="h-6 w-6 text-green-600" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-xl font-semibold text-gray-900 mb-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Certifications
                      </motion.h3>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          'Oracle Cloud Infrastructure DevOps Professional',
                          'Python Programming',
                          'Data Science with R',
                          'Data Visualization'
                        ].map((cert, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full mr-3"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                            />
                            {cert}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200/40 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  My Journey
                </motion.h3>
                <motion.p 
                  className="text-gray-700 leading-relaxed mb-4"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  As a BCA Data Science student at UPES Dehradun, I'm passionate about the intersection 
                  of technology and data. My journey has been driven by curiosity and a desire to 
                  create meaningful impact through innovative solutions.
                </motion.p>
                <motion.p 
                  className="text-gray-700 leading-relaxed mb-4"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Through various internships and projects, I've gained hands-on experience in 
                  building data-driven applications, from threat analysis dashboards to recommendation 
                  systems. I believe in continuous learning and staying updated with the latest 
                  technologies in the rapidly evolving field of data science.
                </motion.p>
                <motion.p 
                  className="text-gray-700 leading-relaxed"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  My goal is to leverage my technical skills and analytical mindset to contribute 
                  to projects that make a positive difference in people's lives.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
