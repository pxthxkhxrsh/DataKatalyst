import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToOverview = () => {
    const element = document.getElementById('overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-white relative flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--neutral-300) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="fade-in">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-8">
              <span className="text-sm font-medium text-blue-700">Enterprise Data Framework</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Data <span className="text-gradient">Katalyst</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Ignite Intelligence. Empower Decisions. Transform Possibilities.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl">
              A comprehensive data framework built on four foundational pillars: Data Quality, Data Governance, Data Management, and DataOps. Transform your data landscape into a competitive advantage with enterprise-grade tools and processes.
            </p>
          </div>

          <div className="slide-up flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={scrollToOverview}
              className="inline-flex items-center px-8 py-4 primary-gradient text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
              View Documentation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            {[
              { number: "4", label: "Core Pillars" },
              { number: "100+", label: "Data Sources" },
              { number: "99.9%", label: "Reliability" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
}
