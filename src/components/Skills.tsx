import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import type { Variants } from "framer-motion";


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 88 }
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 88 },
        { name: "Scikit-learn", level: 82 },
        { name: "TensorFlow", level: 75 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "Flask", level: 85 },
        { name: "Angular", level: 78 },
        { name: "Bootstrap", level: 90 },
        { name: "Power BI", level: 80 }
      ]
    },
    {
      title: "DevOps & Database",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 65 },
        { name: "Git", level: 88 },
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 78 }
      ]
    }
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setAnimatedValues(newValues);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
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
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ background: 'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A comprehensive toolkit spanning data science, web development, and cloud technologies
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={cardVariants}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 relative overflow-hidden group">
                <CardHeader className="pb-4 relative z-10">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <motion.div 
                      className="w-3 h-3 bg-blue-600 rounded-full mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <motion.span
                          className="text-sm text-gray-500"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        >
                          {animatedValues[skill.name] || 0}%
                        </motion.span>
                      </div>
                      <div className="relative">
                        <Progress value={animatedValues[skill.name] || 0} className="h-2 bg-gray-200" />
                        <motion.div
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'JSON', 'Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Cloud Computing', 'Version Control', 'Agile Methodology'].map((tech, index) => (
              <motion.span key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, backgroundColor: '#dbeafe', borderColor: '#3b82f6', color: '#1e40af' }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
