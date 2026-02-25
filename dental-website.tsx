import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Mail, Smile, Shield, Users, Award, Heart, Sparkles, X, Check, MessageCircle, Send, ChevronDown, Star, ArrowRight, Calendar, CheckCircle } from 'lucide-react';

export default function SolutionDentalWebsite() {
  const [activeService, setActiveService] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! How can we help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      icon: Smile, 
      title: "General Dentistry", 
      desc: "Comprehensive oral health care for the whole family",
      features: ["Regular Checkups", "Oral Exams", "Digital X-Rays", "Preventive Care"]
    },
    { 
      icon: Sparkles, 
      title: "Cosmetic Dentistry", 
      desc: "Enhance your smile with whitening and veneers",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding"]
    },
    { 
      icon: Shield, 
      title: "Preventive Care", 
      desc: "Regular cleanings and exams to maintain oral health",
      features: ["Professional Cleaning", "Fluoride Treatment", "Sealants", "Gum Care"]
    },
    { 
      icon: Heart, 
      title: "Restorative Dentistry", 
      desc: "Crowns, bridges, and fillings to restore your smile",
      features: ["Dental Crowns", "Bridges", "Fillings", "Root Canals"]
    },
    { 
      icon: Users, 
      title: "Family Dentistry", 
      desc: "Caring for patients of all ages with gentle approach",
      features: ["Pediatric Care", "Adult Dentistry", "Senior Care", "Family Plans"]
    },
    { 
      icon: Award, 
      title: "Emergency Care", 
      desc: "Prompt treatment when you need it most",
      features: ["Same-Day Appointments", "Pain Relief", "Urgent Care", "24/7 Support"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "Dr. Serranos and the team are amazing! They made my dental anxiety disappear with their gentle care.",
      service: "General Dentistry"
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Best dental experience I've ever had. The office is modern and the staff is incredibly professional.",
      service: "Cosmetic Dentistry"
    },
    {
      name: "Sarah Chen",
      rating: 5,
      text: "They take great care of my whole family. My kids actually look forward to their dental visits!",
      service: "Family Dentistry"
    }
  ];

  const hours = [
    { day: "Monday", time: "9 AM – 5 PM" },
    { day: "Tuesday", time: "9 AM – 5 PM" },
    { day: "Wednesday", time: "9 AM – 5 PM" },
    { day: "Thursday", time: "9 AM – 5 PM" },
    { day: "Friday", time: "9 AM – 2 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" }
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.reason) {
      alert('Please fill in all required fields');
      return;
    }
    
    try {
      const response = await fetch('/api/send-appointment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log('Appointment request successful:', result);
        setFormSubmitted(true);
        setTimeout(() => {
          setShowAppointmentForm(false);
          setFormSubmitted(false);
          setFormData({ name: '', email: '', phone: '', date: '', time: '', reason: '', message: '' });
        }, 3000);
      } else {
        console.error('API Error:', result);
        alert(`Failed to send appointment request: ${result.error || 'Unknown error'}. Please call us at (561) 432-1800`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('Failed to send appointment request. Please call us at (561) 432-1800');
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { type: 'user', text: chatInput }]);
      setChatInput('');
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          type: 'bot', 
          text: 'Thank you for your message! A team member will respond shortly. For immediate assistance, please call us at (561) 432-1800.' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float-slow opacity-80"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-25px) translateX(15px) scale(1.1); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-30px) translateX(-15px) scale(0.9); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-20px) scale(1.2) rotate(180deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          padding: 2px;
          border-radius: 1rem;
        }
        .gradient-border > div {
          background: white;
          border-radius: calc(1rem - 2px);
        }
      `}</style>

      {/* Enhanced Header/Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/80 backdrop-blur-sm shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4 animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse-glow"></div>
              <Smile className="relative w-10 h-10 text-blue-600 animate-bounce-gentle" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-800 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solution Dental
              </h1>
              <p className="text-sm text-blue-600 font-semibold">In Lake Worth</p>
            </div>
          </div>
          
          <div className="flex gap-8 items-center">
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105">Contact</a>
            </nav>
            
            <button 
              onClick={() => setShowAppointmentForm(true)}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-sm overflow-hidden hover-lift animate-shimmer"
            >
              <span className="relative flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Now
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        {/* Enhanced floating shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[8%] w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-70 animate-float blur-sm"></div>
          <div className="absolute top-60 right-[12%] w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-60 animate-float-delayed blur-sm"></div>
          <div className="absolute bottom-40 left-[15%] w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-full opacity-50 animate-float-slow blur-sm"></div>
          <div className="absolute top-1/2 right-[20%] w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full opacity-65 animate-float blur-sm"></div>
          <div className="absolute bottom-20 right-[8%] w-22 h-22 bg-gradient-to-br from-rose-400 to-red-300 rounded-full opacity-55 animate-float-delayed blur-sm"></div>
          
          {/* Enhanced sparkle effects */}
          <Sparkles className="absolute top-32 left-[25%] w-10 h-10 text-yellow-400 opacity-80 animate-pulse" />
          <Sparkles className="absolute top-1/3 right-[18%] w-8 h-8 text-blue-400 opacity-70 animate-pulse animation-delay-2000" />
          <Sparkles className="absolute bottom-60 left-[12%] w-9 h-9 text-purple-400 opacity-75 animate-pulse animation-delay-4000" />
          <Star className="absolute top-1/4 right-[30%] w-6 h-6 text-pink-400 opacity-60 animate-float" />
          <Star className="absolute bottom-1/3 left-[35%] w-7 h-7 text-indigo-400 opacity-65 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            {/* Enhanced decorative top element */}
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full mb-8 border-2 border-blue-200/50 hover-lift">
              <Smile className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">✨ Trusted Family Dentistry Since 2008</span>
            </div>
            
            <h2 className="text-7xl sm:text-9xl font-black text-gray-900 mb-8 leading-tight">
              Your Family's<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient text-shadow-glow">
                  Trusted Dental Care
                </span>
                <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-40 blur-lg rounded-full"></div>
              </span>
            </h2>
          </div>
          
          {/* Enhanced stats/features */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-xl hover-lift">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-bold text-gray-700">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-xl hover-lift">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-bold text-gray-700">500+ Happy Families</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-xl hover-lift">
              <Heart className="w-6 h-6 text-pink-600" />
              <span className="text-sm font-bold text-gray-700">Compassionate Care</span>
            </div>
          </div>

          <p className="text-2xl sm:text-3xl text-gray-700 mb-16 max-w-4xl mx-auto font-medium leading-relaxed animate-fadeIn" style={{animationDelay: '0.3s'}}>
            Serving the <span className="text-blue-600 font-bold">Lake Worth</span> community with exceptional dental care and genuine <span className="text-purple-600 font-bold">compassion</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fadeIn" style={{animationDelay: '0.5s'}}>
            <button 
              onClick={() => setShowAppointmentForm(true)}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full hover:shadow-2xl transition-all text-xl font-bold overflow-hidden hover-lift animate-shimmer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6" />
                Schedule Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <a 
              href="tel:5614321800" 
              className="group glass-effect text-gray-900 px-16 py-6 rounded-full hover:bg-white/20 transition-all text-xl font-bold shadow-2xl border-4 border-blue-600 hover:border-purple-600 hover-lift relative overflow-hidden"
            >
              <span className="relative flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                (561) 432-1800
              </span>
            </a>
          </div>

          {/* Enhanced trust indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 items-center opacity-80 animate-fadeIn" style={{animationDelay: '0.7s'}}>
            <div className="text-center group hover-lift">
              <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-semibold">Happy Families</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="text-4xl font-black text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-semibold">5-Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="relative py-32 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        {/* Enhanced background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full opacity-40 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full opacity-40 blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24" data-animate id="services-title">
            <div className="inline-block mb-6">
              <span className={`px-8 py-3 glass-effect rounded-full text-sm font-bold text-blue-700 border border-blue-200/50 ${isVisible['services-title'] ? 'animate-fadeIn' : 'opacity-0'}`}>
                ✨ What We Offer
              </span>
            </div>
            <h3 className={`text-6xl sm:text-8xl font-black text-gray-900 mb-8 ${isVisible['services-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Expert Services</span>
            </h3>
            <p className={`text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${isVisible['services-title'] ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              From routine checkups to advanced cosmetic procedures, we offer comprehensive dental care tailored to your family's needs
            </p>
          </div>
          
          {/* Enhanced Services Grid */}
          <div data-animate id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = [
                { from: 'from-blue-500', to: 'to-cyan-400', bg: 'bg-gradient-to-br from-blue-500 to-cyan-400', shadow: 'shadow-blue-500/30', hover: 'hover:shadow-blue-500/50' },
                { from: 'from-purple-500', to: 'to-pink-400', bg: 'bg-gradient-to-br from-purple-500 to-pink-400', shadow: 'shadow-purple-500/30', hover: 'hover:shadow-purple-500/50' },
                { from: 'from-emerald-500', to: 'to-teal-400', bg: 'bg-gradient-to-br from-emerald-500 to-teal-400', shadow: 'shadow-emerald-500/30', hover: 'hover:shadow-emerald-500/50' },
                { from: 'from-orange-500', to: 'to-yellow-400', bg: 'bg-gradient-to-br from-orange-500 to-yellow-400', shadow: 'shadow-orange-500/30', hover: 'hover:shadow-orange-500/50' },
                { from: 'from-rose-500', to: 'to-pink-400', bg: 'bg-gradient-to-br from-rose-500 to-pink-400', shadow: 'shadow-rose-500/30', hover: 'hover:shadow-rose-500/50' },
                { from: 'from-indigo-500', to: 'to-blue-400', bg: 'bg-gradient-to-br from-indigo-500 to-blue-400', shadow: 'shadow-indigo-500/30', hover: 'hover:shadow-indigo-500/50' }
              ];
              const color = colors[index % colors.length];
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-700 cursor-pointer hover-lift ${isVisible['services-grid'] ? 'animate-fadeInUp' : 'opacity-0'} ${color.shadow} ${color.hover} shadow-2xl`}
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  {/* Enhanced Gradient Background */}
                  <div className={`absolute inset-0 ${color.bg} transition-all duration-700 group-hover:scale-105`}></div>
                  
                  {/* Enhanced overlay pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                    backgroundSize: '30px 30px'
                  }}></div>
                  
                  {/* Content */}
                  <div className="relative p-8 text-white">
                    <div className="mb-6">
                      <div className="inline-flex p-6 bg-white/20 backdrop-blur-sm rounded-3xl transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                        <service.icon className="w-12 h-12" />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-shadow-glow transition-all duration-300">
                      {service.title}
                    </h4>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    
                    {/* Service features */}
                    <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-white/80" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20" data-animate id="services-cta">
            <div className={`inline-block ${isVisible['services-cta'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <p className="text-xl text-gray-600 mb-8 font-medium">Ready to experience exceptional dental care?</p>
              <button 
                onClick={() => setShowAppointmentForm(true)}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full hover:shadow-2xl transition-all text-xl font-bold hover-lift relative overflow-hidden animate-shimmer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Book Your Appointment Today
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-animate id="testimonials-title">
            <div className="inline-block mb-6">
              <span className={`px-8 py-3 glass-effect rounded-full text-sm font-bold text-purple-700 border border-purple-200/50 ${isVisible['testimonials-title'] ? 'animate-fadeIn' : 'opacity-0'}`}>
                ⭐ What Our Patients Say
              </span>
            </div>
            <h3 className={`text-6xl sm:text-8xl font-black text-gray-900 mb-8 ${isVisible['testimonials-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Real <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate id="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group glass-effect p-8 rounded-3xl shadow-xl hover-lift border border-white/20 ${isVisible['testimonials-grid'] ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative py-32 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center" data-animate id="about-section">
            <div className={isVisible['about-section'] ? 'animate-fadeInUp' : 'opacity-0'}>
              <div className="inline-block mb-6">
                <span className="px-6 py-2 glass-effect rounded-full text-sm font-bold text-blue-700 border border-blue-200/50">
                  👨‍⚕️ Meet Our Team
                </span>
              </div>
              <h3 className="text-5xl sm:text-6xl font-black text-gray-900 mb-8">Meet Dr. & Dra. Serranos</h3>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                For over <span className="font-bold text-blue-600">15 years</span>, Dr. and Dra. Serranos have been dedicated to providing exceptional dental care to the Lake Worth community. Our practice is built on a foundation of trust, expertise, and genuine care for every patient who walks through our doors.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                As a family dental practice, we understand the unique needs of patients at every stage of life. From children's first dental visits to comprehensive care for seniors, we treat each patient with the compassion and attention they deserve.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Located conveniently in <span className="font-bold text-purple-600">Silver Oaks Plaza</span>, we're proud to serve as your neighborhood dental home.
              </p>
            </div>
            
            <div className={`relative ${isVisible['about-section'] ? 'animate-slideInRight' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative glass-effect rounded-3xl p-10 text-gray-800 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/20">
                <h4 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Why Choose Us?</h4>
                <div className="space-y-8">
                  <div className="flex gap-6 group hover-lift">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">15+ Years Experience</p>
                      <p className="text-gray-600">Trusted by the community with proven expertise</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group hover-lift">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">Family-Focused Care</p>
                      <p className="text-gray-600">We treat patients of all ages with gentle care</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group hover-lift">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">Compassionate Approach</p>
                      <p className="text-gray-600">Your comfort and well-being are our top priority</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group hover-lift">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">Comprehensive Services</p>
                      <p className="text-gray-600">All your dental needs under one roof</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-animate id="contact-title">
            <div className="inline-block mb-6">
              <span className={`px-8 py-3 glass-effect rounded-full text-sm font-bold text-green-700 border border-green-200/50 ${isVisible['contact-title'] ? 'animate-fadeIn' : 'opacity-0'}`}>
                📍 Visit Us Today
              </span>
            </div>
            <h3 className={`text-6xl sm:text-8xl font-black text-gray-900 mb-6 ${isVisible['contact-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Get In <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h3>
            <p className={`text-2xl text-gray-600 ${isVisible['contact-title'] ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              We're here to serve you and your family with exceptional care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-animate id="contact-cards">
            <div className={`group text-center p-10 rounded-3xl glass-effect hover:bg-blue-50/50 transition-all duration-500 shadow-xl hover-lift border border-blue-200/30 ${isVisible['contact-cards'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Location</h4>
              <p className="text-gray-700 font-bold mb-2 text-lg">Silver Oaks Plaza</p>
              <p className="text-gray-600 text-lg">3095 S Military Trl #22</p>
              <p className="text-gray-600 mb-6 text-lg">Lake Worth Beach, FL 33463</p>
              <a 
                href="https://maps.google.com/?q=3095+S+Military+Trl+22+Lake+Worth+Beach+FL+33463"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold hover:underline transition-all group-hover:scale-105"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className={`group text-center p-10 rounded-3xl glass-effect hover:bg-purple-50/50 transition-all duration-500 shadow-xl hover-lift border border-purple-200/30 ${isVisible['contact-cards'] ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Phone</h4>
              <a href="tel:5614321800" className="text-4xl font-black text-purple-600 hover:text-purple-700 transition-colors block mb-4 group-hover:scale-105 transition-transform">
                (561) 432-1800
              </a>
              <p className="text-gray-600 text-lg">Call us to schedule your appointment</p>
            </div>

            <div className={`group text-center p-10 rounded-3xl glass-effect hover:bg-emerald-50/50 transition-all duration-500 shadow-xl hover-lift border border-emerald-200/30 ${isVisible['contact-cards'] ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-6">Office Hours</h4>
              <div className="space-y-3 text-left max-w-xs mx-auto">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-lg">
                    <span className="text-gray-700 font-bold">{schedule.day}</span>
                    <span className={schedule.time === "Closed" ? "text-red-400 font-semibold" : "text-gray-900 font-bold"}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Appointment Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeInUp">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h3 className="text-2xl font-bold">Book Appointment</h3>
              <button 
                onClick={() => setShowAppointmentForm(false)} 
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="(561) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                    <select 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Visit *</label>
                  <select 
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select reason</option>
                    <option value="Routine Checkup">Routine Checkup</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Tooth Pain">Tooth Pain</option>
                    <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Appointment
                </button>
              </form>
            ) : (
              <div className="p-12 text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Appointment Requested!</h4>
                <p className="text-gray-600 mb-6">Thank you! We'll contact you shortly to confirm your appointment.</p>
                <p className="text-sm text-gray-500">This window will close automatically...</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enhanced Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 left-6 glass-effect rounded-2xl shadow-2xl p-6 max-w-sm z-40 border border-white/20 animate-slideInLeft">
          <div className="flex gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                🍪 We use cookies
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies to enhance your browsing experience and analyze our traffic.
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl hover:shadow-lg transition-all font-semibold text-sm hover-lift"
                >
                  Accept
                </button>
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="flex-1 glass-effect text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-sm border border-gray-200"
                >
                  Decline
                </button>
              </div>
            </div>
            <button onClick={() => setShowCookieBanner(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {showChat ? (
          <div className="glass-effect rounded-2xl shadow-2xl w-80 sm:w-96 animate-fadeInUp border border-white/20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold">Chat with us</span>
              </div>
              <button onClick={() => setShowChat(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors group">
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl transition-all hover:scale-105 ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none shadow-lg' 
                      : 'glass-effect text-gray-800 rounded-bl-none shadow-lg border border-white/20'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t border-white/20">
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all hover-lift"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover-lift group animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        )}
      </div>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Enhanced decorative wave */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{height: '120px', marginTop: '-1px'}}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-12">
          {/* Enhanced Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Enhanced Company Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse-glow"></div>
                  <Smile className="relative w-14 h-14 text-blue-400" />
                </div>
                <div>
                  <h5 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solution Dental</h5>
                  <p className="text-sm text-blue-300 font-semibold">In Lake Worth</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Providing exceptional dental care to the Lake Worth community with compassion and expertise for over 15 years.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg" aria-label="Facebook">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg" aria-label="Instagram">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg" aria-label="Google">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div>
              <h6 className="text-xl font-bold mb-8 text-blue-300">Quick Links</h6>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-all flex items-center gap-3 group text-lg hover-lift">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Our Services
                </a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-all flex items-center gap-3 group text-lg hover-lift">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  About Us
                </a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-all flex items-center gap-3 group text-lg hover-lift">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Patient Reviews
                </a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-all flex items-center gap-3 group text-lg hover-lift">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Contact
                </a></li>
                <li><button onClick={() => setShowAppointmentForm(true)} className="text-gray-300 hover:text-white transition-all flex items-center gap-3 group text-lg hover-lift">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Book Appointment
                </button></li>
              </ul>
            </div>

            {/* Enhanced Our Services */}
            <div>
              <h6 className="text-xl font-bold mb-8 text-blue-300">Our Services</h6>
              <ul className="space-y-4">
                {services.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-300 hover:text-white transition-all flex items-center gap-3 group hover-lift">
                      <service.icon className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0 text-blue-400" />
                      <span className="truncate">{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact & Hours */}
            <div>
              <h6 className="text-xl font-bold mb-8 text-blue-300">Contact Us</h6>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover-lift">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Silver Oaks Plaza</p>
                    <p className="text-gray-300 text-sm">3095 S Military Trl #22</p>
                    <p className="text-gray-300 text-sm">Lake Worth Beach, FL 33463</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover-lift">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <a href="tel:5614321800" className="text-white font-bold hover:text-blue-300 transition-colors text-lg">
                    (561) 432-1800
                  </a>
                </div>
                
                <div className="flex items-start gap-4 group hover-lift">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-3">Hours:</p>
                    <div className="text-gray-300 space-y-1 text-sm">
                      <p>Mon-Thu: 9 AM – 5 PM</p>
                      <p>Friday: 9 AM – 2 PM</p>
                      <p>Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    onClick={() => setShowAppointmentForm(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-2xl hover:shadow-2xl transition-all font-bold shadow-lg hover-lift animate-shimmer"
                  >
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-center md:text-left text-lg">
                © {new Date().getFullYear()} Solution Dental In Lake Worth. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">Accessibility</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}