import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Mail, Smile, Shield, Users, Award, Heart, Sparkles, X, Check, MessageCircle, Send, ChevronDown } from 'lucide-react';

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
    { icon: Smile, title: "General Dentistry", desc: "Comprehensive oral health care for the whole family" },
    { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Enhance your smile with whitening and veneers" },
    { icon: Shield, title: "Preventive Care", desc: "Regular cleanings and exams to maintain oral health" },
    { icon: Heart, title: "Restorative Dentistry", desc: "Crowns, bridges, and fillings to restore your smile" },
    { icon: Users, title: "Family Dentistry", desc: "Caring for patients of all ages with gentle approach" },
    { icon: Award, title: "Emergency Care", desc: "Prompt treatment when you need it most" }
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowAppointmentForm(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', date: '', time: '', reason: '', message: '' });
    }, 2000);
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
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-fadeIn">
            <div className="relative">
              <Smile className="w-9 h-9 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-30"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">Solution Dental</h1>
              <p className="text-xs text-blue-600 font-medium">In Lake Worth</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors hidden sm:block font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors hidden sm:block font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors hidden sm:block font-medium">Contact</a>
            <button 
              onClick={() => setShowAppointmentForm(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 overflow-hidden">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-40 right-[15%] w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-60 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-[20%] w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-300 rounded-full opacity-50 animate-float-slow"></div>
          <div className="absolute top-1/2 right-[25%] w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full opacity-60 animate-float"></div>
          <div className="absolute bottom-32 right-[10%] w-18 h-18 bg-gradient-to-br from-rose-400 to-red-300 rounded-full opacity-50 animate-float-delayed"></div>
          
          {/* Sparkle effects */}
          <Sparkles className="absolute top-24 left-[30%] w-8 h-8 text-yellow-400 opacity-70 animate-pulse" />
          <Sparkles className="absolute top-1/3 right-[20%] w-6 h-6 text-blue-400 opacity-60 animate-pulse animation-delay-2000" />
          <Sparkles className="absolute bottom-40 left-[15%] w-7 h-7 text-purple-400 opacity-70 animate-pulse animation-delay-4000" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            {/* Decorative top element */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border-2 border-blue-200">
              <Smile className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Trusted Family Dentistry</span>
            </div>
            
            <h2 className="text-6xl sm:text-8xl font-black text-gray-900 mb-6 leading-tight">
              Your Family's<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Trusted Dental Care
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 blur-sm"></div>
              </span>
            </h2>
          </div>
          
          {/* Animated stats/features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Years of Experience</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">Family-Focused</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-semibold text-gray-700">Compassionate Care</span>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fadeIn" style={{animationDelay: '0.3s'}}>
            Serving the <span className="text-blue-600 font-bold">Lake Worth</span> community with exceptional dental care and genuine <span className="text-purple-600 font-bold">compassion</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn" style={{animationDelay: '0.5s'}}>
            <button 
              onClick={() => setShowAppointmentForm(true)}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-full hover:shadow-2xl transition-all text-lg font-bold overflow-hidden transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                Schedule Appointment
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <a 
              href="tel:5614321800" 
              className="group bg-white text-gray-900 px-12 py-6 rounded-full hover:bg-gray-50 transition-all text-lg font-bold shadow-2xl border-4 border-blue-600 hover:border-purple-600 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                (561) 432-1800
              </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60 animate-fadeIn" style={{animationDelay: '0.7s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">5★</div>
              <div className="text-sm text-gray-600">Patient Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20" data-animate id="services-title">
            <div className="inline-block mb-4">
              <span className={`px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-bold text-blue-700 ${isVisible['services-title'] ? 'animate-fadeIn' : 'opacity-0'}`}>
                What We Offer
              </span>
            </div>
            <h3 className={`text-5xl sm:text-7xl font-black text-gray-900 mb-6 ${isVisible['services-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Expert Services</span>
            </h3>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isVisible['services-title'] ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              From routine checkups to advanced cosmetic procedures, we offer comprehensive dental care tailored to your family's needs
            </p>
          </div>
          
          {/* Featured Services Grid */}
          <div data-animate id="services-grid">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {services.slice(0, 3).map((service, index) => {
                const colors = [
                  { from: 'from-blue-500', to: 'to-cyan-400', bg: 'bg-gradient-to-br from-blue-500 to-cyan-400', shadow: 'shadow-blue-500/30', hover: 'hover:shadow-blue-500/50' },
                  { from: 'from-purple-500', to: 'to-pink-400', bg: 'bg-gradient-to-br from-purple-500 to-pink-400', shadow: 'shadow-purple-500/30', hover: 'hover:shadow-purple-500/50' },
                  { from: 'from-green-500', to: 'to-emerald-400', bg: 'bg-gradient-to-br from-green-500 to-emerald-400', shadow: 'shadow-green-500/30', hover: 'hover:shadow-green-500/50' }
                ];
                const color = colors[index];
                
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(null)}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:scale-105 ${isVisible['services-grid'] ? 'animate-fadeInUp' : 'opacity-0'} ${color.shadow} ${color.hover} shadow-2xl`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 ${color.bg} transition-all duration-500`}></div>
                    
                    {/* Overlay pattern */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                    
                    {/* Content */}
                    <div className="relative p-10 text-white">
                      <div className="mb-6">
                        <div className="inline-flex p-5 bg-white/20 backdrop-blur-sm rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <service.icon className="w-12 h-12" />
                        </div>
                      </div>
                      
                      <h4 className="text-3xl font-bold mb-4">
                        {service.title}
                      </h4>
                      
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {service.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(3, 6).map((service, index) => {
                const colors = [
                  { from: 'from-orange-500', to: 'to-yellow-400', bg: 'bg-gradient-to-br from-orange-500 to-yellow-400', shadow: 'shadow-orange-500/30', hover: 'hover:shadow-orange-500/50' },
                  { from: 'from-rose-500', to: 'to-pink-400', bg: 'bg-gradient-to-br from-rose-500 to-pink-400', shadow: 'shadow-rose-500/30', hover: 'hover:shadow-rose-500/50' },
                  { from: 'from-indigo-500', to: 'to-blue-400', bg: 'bg-gradient-to-br from-indigo-500 to-blue-400', shadow: 'shadow-indigo-500/30', hover: 'hover:shadow-indigo-500/50' }
                ];
                const color = colors[index];
                
                return (
                  <div
                    key={index + 3}
                    onMouseEnter={() => setActiveService(index + 3)}
                    onMouseLeave={() => setActiveService(null)}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:scale-105 ${isVisible['services-grid'] ? 'animate-fadeInUp' : 'opacity-0'} ${color.shadow} ${color.hover} shadow-2xl`}
                    style={{animationDelay: `${(index + 3) * 0.1}s`}}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 ${color.bg} transition-all duration-500`}></div>
                    
                    {/* Overlay pattern */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                    
                    {/* Content */}
                    <div className="relative p-10 text-white">
                      <div className="mb-6">
                        <div className="inline-flex p-5 bg-white/20 backdrop-blur-sm rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <service.icon className="w-12 h-12" />
                        </div>
                      </div>
                      
                      <h4 className="text-3xl font-bold mb-4">
                        {service.title}
                      </h4>
                      
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {service.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16" data-animate id="services-cta">
            <div className={`inline-block ${isVisible['services-cta'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <p className="text-gray-600 text-lg mb-6">Ready to experience exceptional dental care?</p>
              <button 
                onClick={() => setShowAppointmentForm(true)}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-full hover:shadow-2xl transition-all text-lg font-bold transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  Book Your Appointment Today
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-animate id="about-section">
            <div className={isVisible['about-section'] ? 'animate-fadeInUp' : 'opacity-0'}>
              <h3 className="text-5xl font-bold text-gray-900 mb-6">Meet Dr. & Dra. Serranos</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                For many years, Dr. and Dra. Serranos have been dedicated to providing exceptional dental care to the Lake Worth community. Our practice is built on a foundation of trust, expertise, and genuine care for every patient who walks through our doors.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                As a family dental practice, we understand the unique needs of patients at every stage of life. From children's first dental visits to comprehensive care for seniors, we treat each patient with the compassion and attention they deserve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Located conveniently in Silver Oaks Plaza, we're proud to serve as your neighborhood dental home.
              </p>
            </div>
            <div className={`relative ${isVisible['about-section'] ? 'animate-slideInRight' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <h4 className="text-3xl font-bold mb-8">Why Choose Us?</h4>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <Award className="w-7 h-7 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg">Years of Experience</p>
                      <p className="text-blue-100">Trusted by the community for many years</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <Users className="w-7 h-7 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg">Family-Focused Care</p>
                      <p className="text-blue-100">We treat patients of all ages</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <Heart className="w-7 h-7 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg">Compassionate Approach</p>
                      <p className="text-blue-100">Your comfort is our priority</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <Shield className="w-7 h-7 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg">Comprehensive Services</p>
                      <p className="text-blue-100">All your dental needs under one roof</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate id="contact-title">
            <h3 className={`text-5xl font-bold text-gray-900 mb-4 ${isVisible['contact-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Visit Us Today
            </h3>
            <p className={`text-lg text-gray-600 ${isVisible['contact-title'] ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              We're here to serve you and your family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate id="contact-cards">
            <div className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 ${isVisible['contact-cards'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <MapPin className="w-14 h-14 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Location</h4>
              <p className="text-gray-700 font-semibold mb-1">Silver Oaks Plaza</p>
              <p className="text-gray-600">3095 S Military Trl #22</p>
              <p className="text-gray-600 mb-4">Lake Worth Beach, FL 33463</p>
              <a 
                href="https://maps.google.com/?q=3095+S+Military+Trl+22+Lake+Worth+Beach+FL+33463"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Get Directions →
              </a>
            </div>

            <div className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 ${isVisible['contact-cards'] ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
              <Phone className="w-14 h-14 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Phone</h4>
              <a href="tel:5614321800" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                (561) 432-1800
              </a>
              <p className="text-gray-600 mt-4">Call us to schedule your appointment</p>
            </div>

            <div className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 ${isVisible['contact-cards'] ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <Clock className="w-14 h-14 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h4>
              <div className="space-y-2 text-left max-w-xs mx-auto">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-700 font-semibold">{schedule.day}</span>
                    <span className={schedule.time === "Closed" ? "text-gray-400" : "text-gray-900 font-medium"}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeInUp">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-3xl flex justify-between items-center">
              <h3 className="text-2xl font-bold">Schedule Your Appointment</h3>
              <button onClick={() => setShowAppointmentForm(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Confirm Appointment
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

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm z-40 border-2 border-gray-100 animate-slideInRight">
          <div className="flex gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-2">We use cookies</h4>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies to enhance your browsing experience and analyze our traffic.
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium text-sm"
                >
                  Accept
                </button>
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                >
                  Decline
                </button>
              </div>
            </div>
            <button onClick={() => setShowCookieBanner(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {showChat ? (
          <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 animate-fadeInUp">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Chat with us</span>
              </div>
              <button onClick={() => setShowChat(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.type === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-110 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{height: '100px', marginTop: '-1px'}}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Smile className="w-12 h-12 text-blue-400" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-30"></div>
                </div>
                <div>
                  <h5 className="text-xl font-bold">Solution Dental</h5>
                  <p className="text-sm text-blue-300">In Lake Worth</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Providing exceptional dental care to the Lake Worth community with compassion and expertise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="text-lg font-bold mb-6 text-blue-300">Quick Links</h6>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  Our Services
                </a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  About Us
                </a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  Contact
                </a></li>
                <li><button onClick={() => setShowAppointmentForm(true)} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  Book Appointment
                </button></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  Patient Portal
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  New Patients
                </a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h6 className="text-lg font-bold mb-6 text-blue-300">Our Services</h6>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                      <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h6 className="text-lg font-bold mb-6 text-blue-300">Contact & Hours</h6>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-white">Silver Oaks Plaza</p>
                    <p className="text-sm text-gray-300">3095 S Military Trl #22</p>
                    <p className="text-sm text-gray-300">Lake Worth Beach, FL 33463</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:5614321800" className="text-white font-semibold hover:text-blue-300 transition-colors">
                    (561) 432-1800
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-2">Office Hours:</p>
                    <p className="text-gray-300">Mon-Thu: 9 AM – 5 PM</p>
                    <p className="text-gray-300">Friday: 9 AM – 2 PM</p>
                    <p className="text-gray-300">Sat-Sun: Closed</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setShowAppointmentForm(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Solution Dental In Lake Worth. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}