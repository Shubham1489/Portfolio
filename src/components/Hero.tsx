import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";
import type { Easing } from "framer-motion";


const Hero = () => {
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: ["easeInOut"] as Easing[]
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Profile Photo */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-2xl"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {/* Actual photo */}
            <img 
              src="/20250921_172507_0000.jpg" 
              alt="Shubham Swain" 
              className="w-full h-full rounded-full object-cover" 
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Name and Title */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            Shubham Swain
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 font-medium"
            variants={itemVariants}
          >
            BCA Data Science Student & Aspiring Data Scientist
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Passionate about transforming data into insights and building innovative solutions 
            with machine learning and web technologies.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              onClick={() => window.open('/FAANGPath_Simple_Template.pdf', '_blank')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </span>
            </Button>
          </motion.div>
          
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
                onClick={() => window.open('https://www.linkedin.com/in/shubham-swain-054296318/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-200"
                onClick={() => window.open('https://github.com/Shubham1489', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
