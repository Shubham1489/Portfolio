import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from "framer-motion";

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      company: "IBM",
      role: "Project Intern",
      duration: "2024",
      type: "Technical Internship",
      description: "Built a comprehensive Streamlit dashboard to analyze threat logs and visualize IP geolocations. Implemented data processing pipelines and created interactive visualizations for cybersecurity threat analysis.",
      achievements: [
        "Developed interactive dashboard using Streamlit and Python",
        "Implemented IP geolocation mapping and threat visualization",
        "Processed and analyzed large-scale security log data",
        "Created automated reporting systems for threat intelligence"
      ],
      skills: ["Python", "Streamlit", "Data Analysis", "Cybersecurity", "Visualization"],
      color: "blue"
    },
    {
      company: "Daya Foundation",
      role: "Social Intern",
      duration: "2023",
      type: "Community Service",
      description: "Executed community initiatives and social programs reaching over 200+ participants. Focused on educational outreach, community development, and social impact measurement.",
      achievements: [
        "Organized and executed community initiatives for 200+ participants",
        "Developed educational outreach programs",
        "Coordinated volunteer activities and resource management",
        "Measured and reported social impact metrics"
      ],
      skills: ["Project Management", "Community Outreach", "Leadership", "Communication"],
      color: "green"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.4 }
    }
  };

  const timelineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1.5, ease: "easeOut" } }
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

  const cardVariantsRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-100/30 rounded-full blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 40, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            animate={isInView ? {
              backgroundImage: [
                'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)',
                'linear-gradient(90deg, #3b82f6, #10b981, #3b82f6)',
                'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)'
              ]
            } : {}}
            style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Experience & Internships
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional experiences that have shaped my technical skills and leadership abilities
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full hidden lg:block origin-top"
            style={{ height: '100%' }}
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <motion.div 
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.4 + 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div
                    className={`absolute inset-1 rounded-full ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div className="flex-1 max-w-lg" variants={index % 2 === 0 ? cardVariants : cardVariantsRight}>
                  <Card className={`shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 ${exp.color === 'blue' ? 'border-l-blue-500' : 'border-l-green-500'} bg-white/90 backdrop-blur-sm group relative overflow-hidden`}>
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 ${exp.color === 'blue' ? 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50' : 'bg-gradient-to-br from-green-50/50 to-emerald-50/50'} opacity-0 group-hover:opacity-100`}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 ${exp.color === 'blue' ? 'bg-blue-400/30' : 'bg-green-400/30'} rounded-full opacity-0 group-hover:opacity-100`}
                        style={{ right: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
                        animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      />
                    ))}

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.div className={`p-2 rounded-full ${exp.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'}`} whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Building2 className={`h-5 w-5 ${exp.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} />
                          </motion.div>
                          <div>
                            <motion.h3 className="text-xl font-bold text-gray-900" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>{exp.company}</motion.h3>
                            <motion.p className="text-lg font-medium text-gray-700" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>{exp.role}</motion.p>
                          </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                          <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                        </motion.div>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                          <Calendar className="h-4 w-4 mr-1" /> {exp.duration}
                        </motion.div>
                        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                          <Users className="h-4 w-4 mr-1" /> {exp.company === 'Daya Foundation' ? '200+ participants' : 'Enterprise level'}
                        </motion.div>
                      </div>

                      <motion.p className="text-gray-700 mb-4 leading-relaxed" initial={{ opacity: 0.9 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        {exp.description}
                      </motion.p>

                      <div className="mb-4">
                        <motion.h4 className="font-semibold text-gray-900 mb-2" whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>Key Achievements:</motion.h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li key={achIndex} className="flex items-start text-sm text-gray-700" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ delay: index * 0.4 + achIndex * 0.1 + 0.8 }} whileHover={{ x: 5 }}>
                              <motion.div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: achIndex * 0.3 }} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.div key={skillIndex} initial={{ scale: 0, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} transition={{ delay: index * 0.4 + skillIndex * 0.1 + 1.2 }} whileHover={{ scale: 1.1 }}>
                            <Badge variant="secondary" className={`text-xs ${exp.color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-green-50 text-green-700 hover:bg-green-100'} transition-all duration-200 cursor-pointer`}>
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
