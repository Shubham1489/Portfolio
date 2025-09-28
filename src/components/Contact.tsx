import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com';
import type { Variants } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      '',
      '',
      formData,
      ''
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
      console.error('EmailJS Error:', error);
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 100 } }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <motion.div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            animate={isInView ? { backgroundPosition: ['0%', '100%', '0%'] } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Get In Touch
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and data science.
          </motion.p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          <motion.div className="lg:col-span-1 space-y-8" variants={itemVariants}>
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity }} className="mr-3">📧</motion.div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[ 
                  { icon: Mail, color: 'blue', title: 'Email', info: '', href: 'mailto:' },
                  { icon: Phone, color: 'green', title: 'Phone', info: '' },
                  { icon: MapPin, color: 'purple', title: 'Location', info: 'Dehradun, India' }
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-center space-x-4" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <motion.div className={`bg-${item.color}-100 p-3 rounded-full`} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    </motion.div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" onClick={() => window.open('https://www.linkedin.com/in/shubham-swain-054296318/', '_blank')}>
                  <Linkedin className="h-5 w-5 mr-3 text-blue-600" /> LinkedIn Profile
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.open('https://github.com/Shubham1489', '_blank')}>
                  <Github className="h-5 w-5 mr-3 text-gray-700" /> GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">✉️ Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="What's this about?" value={formData.subject} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={6} value={formData.message} onChange={handleInputChange} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                    <Send className="h-5 w-5 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div 
          className="mt-20 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="text-center md:text-left mb-4 md:mb-0"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-600">
                © 2024 Shubham Swain.
              </p>
            </motion.div>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open('https://www.linkedin.com/in/shubham-swain-054296318/', '_blank')}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open('https://github.com/Shubham1489', '_blank')}
                  className="hover:text-gray-700 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
