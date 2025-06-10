import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('hero')}>
                Data Katalyst
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-slate-600 hover:text-[var(--data-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('pillars')}
                className="text-slate-600 hover:text-[var(--data-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pillars
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-[var(--data-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[var(--data-blue)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-[var(--data-blue)]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-slate-600 hover:text-[var(--data-blue)] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('pillars')}
              className="text-slate-600 hover:text-[var(--data-blue)] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Pillars
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-[var(--data-blue)] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[var(--data-blue)] text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
