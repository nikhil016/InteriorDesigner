import React, { useState, useEffect } from 'react';
import { Home, User, Palette, Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './components/Logo';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-charcoal hover:text-gold transition-colors">Home</a>
              <a href="#about" className="text-charcoal hover:text-gold transition-colors">About Us</a>
              <div className="relative group">
                <button 
                  className="text-charcoal hover:text-gold transition-colors flex items-center"
                  onClick={() => toggleDropdown('services')}
                >
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block">
                  <a href="#residential" className="block px-4 py-2 text-charcoal hover:bg-beige">Residential Design</a>
                  <a href="#commercial" className="block px-4 py-2 text-charcoal hover:bg-beige">Commercial Design</a>
                  <a href="#consultation" className="block px-4 py-2 text-charcoal hover:bg-beige">Consultation</a>
                </div>
              </div>
              <a href="#portfolio" className="text-charcoal hover:text-gold transition-colors">Portfolio</a>
              <a href="#contact" className="text-charcoal hover:text-gold transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-charcoal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">Home</a>
              <a href="#about" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">About Us</a>
              <div>
                <button 
                  className="flex items-center w-full px-3 py-2 text-charcoal hover:bg-beige rounded-md"
                  onClick={() => toggleDropdown('mobileServices')}
                >
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === 'mobileServices' && (
                  <div className="pl-6 space-y-1">
                    <a href="#residential" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">Residential Design</a>
                    <a href="#commercial" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">Commercial Design</a>
                    <a href="#consultation" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">Consultation</a>
                  </div>
                )}
              </div>
              <a href="#portfolio" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-charcoal hover:bg-beige rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Luxury Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6">Transforming Visions into Luxury Spaces</h1>
            <p className="text-xl text-white/90 mb-12 font-light">Where sophistication meets functionality in every detail</p>
            <button className="bg-gold text-white px-8 py-4 rounded hover:bg-bronze transition-colors text-lg">
              Transform Your Space Today
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
                alt="Luxury Interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-playfair mb-8 text-charcoal">Crafting Exceptional Spaces</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With an unwavering commitment to excellence, RJ Star Interiors brings over a decade of expertise 
                in creating sophisticated, timeless spaces. Our approach combines innovative design thinking 
                with meticulous attention to detail, ensuring each project reflects the unique personality 
                and lifestyle of our clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in the transformative power of thoughtful design. Our team of expert designers 
                works closely with you to understand your vision, lifestyle, and preferences, creating 
                spaces that are not just beautiful, but perfectly tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair text-center mb-20 text-charcoal">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-xl animate-fade-in">
              <Home className="w-12 h-12 mb-6 text-gold" />
              <h3 className="text-2xl font-playfair mb-4 text-charcoal">Residential Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform your home into a luxurious sanctuary that perfectly balances aesthetics with functionality, 
                creating spaces that inspire and comfort.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl animate-fade-in">
              <Palette className="w-12 h-12 mb-6 text-gold" />
              <h3 className="text-2xl font-playfair mb-4 text-charcoal">Commercial Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Elevate your business space with sophisticated design solutions that enhance productivity 
                and leave a lasting impression on clients.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl animate-fade-in">
              <User className="w-12 h-12 mb-6 text-gold" />
              <h3 className="text-2xl font-playfair mb-4 text-charcoal">Design Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on color schemes, space planning, and material selection to help you 
                make informed decisions for your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair text-center mb-20 text-charcoal">Our Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
                alt="Luxury Living Room"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-charcoal/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-playfair">Modern Living Room</span>
              </div>
            </div>
            <div className="relative group animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
                alt="Elegant Kitchen"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-charcoal/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-playfair">Contemporary Kitchen</span>
              </div>
            </div>
            <div className="relative group animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                alt="Master Bedroom"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-charcoal/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-playfair">Luxury Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair text-center mb-20 text-charcoal">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-playfair mb-8 text-charcoal">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gold mr-4" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-gold mr-4" />
                  <span className="text-gray-700">contact@rjstarinteriors.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gold mr-4" />
                  <span className="text-gray-700">123 Luxury Lane, Beverly Hills, CA 90210</span>
                </div>
              </div>
            </div>
            <form className="space-y-6 animate-fade-in">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                ></textarea>
              </div>
              <button className="bg-gold text-white px-8 py-3 rounded hover:bg-bronze transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Logo className="text-white" />
              <p className="text-gray-400 mt-4">Creating timeless luxury spaces since 2015</p>
            </div>
            <div>
              <h4 className="text-lg font-playfair mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-gold transition-colors">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-gold transition-colors">About Us</a>
                <a href="#services" className="block text-gray-400 hover:text-gold transition-colors">Services</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-gold transition-colors">Portfolio</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-playfair mb-4">Follow Us</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="block text-gray-400 hover:text-gold transition-colors">Pinterest</a>
                <a href="#" className="block text-gray-400 hover:text-gold transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 RJ Star Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;