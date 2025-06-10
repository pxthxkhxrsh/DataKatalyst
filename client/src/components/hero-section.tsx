import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToOverview = () => {
    const element = document.getElementById('overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 pb-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--data-blue)]/20 to-[var(--data-teal)]/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Data <span className="text-cyan-300">Katalyst</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ignite Intelligence. Empower Decisions. Transform Possibilities.
            </p>
            <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto">
              Data Katalyst is not just a framework—it's the powerhouse that accelerates your data journey. Built on the strong pillars of Data Quality, Data Governance, Data Management, and DataOps, it brings clarity to chaos, turns raw data into reliable insights, and ensures your business decisions are backed by precision and trust.
            </p>
          </div>
          <div className="animate-slide-up">
            <button 
              onClick={scrollToOverview}
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--data-blue)] font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Accelerate Your Data Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-300/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
