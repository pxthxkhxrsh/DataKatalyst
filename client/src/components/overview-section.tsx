import { Zap, Lightbulb, Shield, TrendingUp, Users, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function OverviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Scale Faster",
      description: "Accelerate your data initiatives with proven frameworks and automated processes that eliminate bottlenecks.",
      gradient: "from-blue-500 to-purple-600",
      stats: "10x faster deployment"
    },
    {
      icon: Lightbulb,
      title: "Innovate Smarter",
      description: "Transform raw data into actionable insights with AI-driven analytics and intelligent automation.",
      gradient: "from-purple-500 to-pink-600",
      stats: "70% better insights"
    },
    {
      icon: Shield,
      title: "Govern Better",
      description: "Ensure compliance, security, and accountability with comprehensive governance frameworks.",
      gradient: "from-cyan-500 to-teal-600",
      stats: "100% compliance ready"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "300%", label: "Performance Boost", color: "text-blue-500" },
    { icon: Users, value: "50K+", label: "Data Professionals", color: "text-purple-500" },
    { icon: Globe, value: "100+", label: "Global Enterprise Clients", color: "text-cyan-500" }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium text-slate-700">Trusted by industry leaders worldwide</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glassmorphism rounded-2xl p-6 card-hover">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold text-slate-900 mb-6 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Why <span className="gradient-text">Data Katalyst</span>?
          </h2>
          <p className={`text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Whether you're aiming to scale faster, innovate smarter, or govern better—Data Katalyst is your launchpad to becoming truly data-driven.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-200 card-hover transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 300}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className={`inline-flex items-center text-sm font-semibold text-transparent bg-gradient-to-r ${benefit.gradient} bg-clip-text`}>
                  {benefit.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="glassmorphism rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Data Landscape?
            </h3>
            <p className="text-slate-600 mb-6">
              Join thousands of data professionals who have accelerated their journey with Data Katalyst.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
