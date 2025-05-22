import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Mail, Phone, MapPin, Github, Linkedin, Code, Database, Globe, Smartphone, Users, Award, ExternalLink, Send } from 'lucide-react';

const BhuwanPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated Counter Hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);
    
    return count;
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks like React, Node.js, and Django."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain Solutions",
      description: "Smart contracts, DeFi applications, and blockchain integration services."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native and Flutter."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "System Architecture",
      description: "Scalable system design and cloud infrastructure solutions."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "Full-stack e-commerce solution with payment integration"
    },
    {
      title: "DeFi Trading Bot",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      description: "Automated trading bot for decentralized exchanges"
    },
    {
      title: "Task Management App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Cross-platform productivity app with real-time sync"
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Scalable microservices architecture on AWS"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Manager",
      comment: "Bhuwan's technical expertise and problem-solving skills are exceptional. He delivered our project ahead of schedule."
    },
    {
      name: "Priya Sharma",
      role: "Startup Founder",
      comment: "Working with Bhuwan was a game-changer for our startup. His blockchain solutions increased our efficiency by 40%."
    },
    {
      name: "David Chen",
      role: "Tech Lead",
      comment: "Bhuwan's attention to detail and innovative approach makes him stand out among developers."
    }
  ];

  const StatCounter = ({ end, label, suffix = "" }) => {
    const count = useCounter(end);
    return (
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-500 mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-400">{label}</div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Bhuwan Shahi
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4 p-4">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-500 transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Bhuwan Shahi
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
            Innovative IT Solutions
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            NIST Balkumari Computer Science Student | Full-Stack Developer | Blockchain Enthusiast
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            Explore My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-blue-500">
                Passionate Computer Science Student
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated Computer Science student at NIST Balkumari, passionate about 
                creating innovative technology solutions. With expertise in full-stack development, 
                blockchain technology, and system architecture, I strive to build applications 
                that make a meaningful impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in technology began with curiosity and has evolved into a commitment 
                to continuous learning and innovation. I believe in the power of technology to 
                solve real-world problems and create positive change.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <StatCounter end={50} label="Projects Completed" suffix="+" />
                <StatCounter end={95} label="Client Satisfaction" suffix="%" />
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Bhuwan Shahi"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my recent projects and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800 hover:transform hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 150}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-blue-500 text-sm font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>
                    <ExternalLink size={20} className="text-white hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-blue-500 text-sm font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="text-5xl text-blue-500 mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">
                  {testimonial.comment}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Let's discuss your next project and bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="flex items-center space-x-4 group hover:text-blue-500 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400 group-hover:text-blue-400">bhuwan.shahi@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:text-blue-500 transition-colors duration-300">
                <Phone className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400 group-hover:text-blue-400">+977 98XXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:text-blue-500 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400 group-hover:text-blue-400">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 group-hover:border-gray-600"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 group-hover:border-gray-600"
                  />
                </div>
              </div>
              <div className="group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 group-hover:border-gray-600"
                />
              </div>
              <div className="group">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 group-hover:border-gray-600 resize-none"
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">
            Bhuwan Shahi
          </div>
          <p className="text-gray-400">
            © 2025 Bhuwan Shahi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BhuwanPortfolio;