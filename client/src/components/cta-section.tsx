import { MessageCircle, ArrowRight, Rocket, Star, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('contact')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100, 
          y: ((e.clientY - rect.top) / rect.height) * 100 
        });
      }
    };

    const section = document.getElementById('contact');
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRequestDemo = () => {
    console.log('Request demo clicked');
  };

  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  const testimonials = [
    { company: "TechCorp", quote: "Transformed our data operations completely", rating: 5 },
    { company: "DataFlow Inc", quote: "Best ROI we've seen in years", rating: 5 },
    { company: "Global Analytics", quote: "Game-changing framework", rating: 5 }
  ];

  return (
    <section id="contact" className="py-20 gradient-mesh relative overflow-hidden">
      {/* Dynamic background that follows mouse */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Testimonials Header */}
        <div className="mb-12">
          <div className="inline-flex items-center glassmorphism rounded-full px-6 py-3 mb-6">
            <Star className="h-4 w-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">Trusted by 1000+ enterprises worldwide</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glassmorphism rounded-2xl p-6 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-2">"{testimonial.quote}"</p>
                <p className="text-cyan-300 font-semibold text-xs">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to <span className="gradient-text">Transform</span> Your Data Journey?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join forward-thinking organizations who are already accelerating their insights and empowering better decisions with Data Katalyst.
          </p>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
          <button 
            onClick={handleRequestDemo}
            className="group relative inline-flex items-center px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transform hover:scale-110 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Rocket className="mr-3 h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-500" />
            <span className="relative z-10 text-lg group-hover:text-white transition-colors duration-500">
              Request Live Demo
            </span>
            <MessageCircle className="ml-3 h-6 w-6 relative z-10 group-hover:text-white group-hover:animate-bounce transition-all duration-500" />
          </button>
          
          <button 
            onClick={handleGetStarted}
            className="group inline-flex items-center px-10 py-5 border-2 border-white/40 text-white font-bold rounded-2xl glassmorphism hover:border-white hover:bg-white/20 transition-all duration-500"
          >
            <Globe className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg">Start Free Trial</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
          {[
            { metric: "99.9%", label: "Uptime SLA" },
            { metric: "24/7", label: "Support" },
            { metric: "SOC 2", label: "Certified" },
            { metric: "GDPR", label: "Compliant" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
              <div className="text-sm text-white/70">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-xl font-semibold gradient-text">
            Data Katalyst: Accelerate Insight. Empower Action.
          </p>
        </div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/25 to-orange-500/25 rounded-full blur-xl animate-bounce-gentle opacity-50" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
}
