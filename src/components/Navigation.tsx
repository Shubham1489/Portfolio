import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => scrollToSection('home')}
          >
            SS
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100"
                    layoutId="navbar-hover"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
