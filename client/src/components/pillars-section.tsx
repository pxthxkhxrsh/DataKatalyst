import { CheckCircle, Shield, Database, Settings, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PillarsSection() {
  const [visiblePillars, setVisiblePillars] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pillarIndex = parseInt(entry.target.getAttribute('data-pillar') || '0');
            setVisiblePillars(prev => [...new Set([...prev, pillarIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const pillarElements = document.querySelectorAll('[data-pillar]');
    pillarElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      number: 1,
      title: "Data Quality",
      subtitle: "Trust Your Data. Every Time.",
      description: "In today's data-driven world, decisions are only as good as the data behind them. That's why the first pillar of Data Katalyst is dedicated to ensuring data quality—so you never have to second-guess the accuracy, completeness, or reliability of the insights you rely on.",
      icon: CheckCircle,
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      accentColor: "text-blue-500",
      features: [
        {
          title: "DQ Assessment & Incident Management",
          description: "Ongoing assessments with automatic incident creation and failure tracking.",
          icon: "🔍"
        },
        {
          title: "Resolution & Repair",
          description: "Rule-based cleansing framework with comprehensive audit trails.",
          icon: "🔧"
        },
        {
          title: "Validation Framework",
          description: "Configurable validation for validity, completeness, consistency, accuracy, timeliness, and uniqueness.",
          icon: "✅"
        },
        {
          title: "Data Unification",
          description: "Configuration-based master data merging across multiple sources.",
          icon: "🔗"
        },
        {
          title: "Smart Missing Data Handling",
          description: "AI-driven imputation using K-NN, Deep Learning, Random Forest, and more.",
          icon: "🧠"
        },
        {
          title: "Data Profiling & Gap Enrichment",
          description: "Comprehensive profiling dashboards with smart enrichment workflows.",
          icon: "📊"
        }
      ],
      reverse: false
    },
    {
      number: 2,
      title: "Data Governance",
      subtitle: "Secure. Compliant. Accountable. Always.",
      description: "Data without governance is like a city without laws—chaotic and vulnerable. Our governance pillar helps you safeguard, govern, and take full control of your data assets with comprehensive security and compliance frameworks.",
      icon: Shield,
      gradient: "from-teal-500 via-cyan-500 to-blue-600",
      accentColor: "text-teal-500",
      features: [
        {
          title: "Policy Enforcement",
          description: "Configurable governance frameworks for consistent data usage.",
          icon: "📋"
        },
        {
          title: "Defined Roles & Responsibilities",
          description: "Clear mapping of Data Stewards, Custodians, and Owners.",
          icon: "👥"
        },
        {
          title: "Compliance & Standards",
          description: "GDPR, CCPA compliance with ISO 27001 and PCI-DSS alignment.",
          icon: "🛡️"
        },
        {
          title: "Security & Access Control",
          description: "AES encryption, RBAC, and MFA for comprehensive protection.",
          icon: "🔐"
        },
        {
          title: "Incident Response",
          description: "Comprehensive breach detection, containment, and recovery planning.",
          icon: "🚨"
        },
        {
          title: "Audits & Entitlement Review",
          description: "Automated audit tools for access tracking and policy compliance.",
          icon: "📝"
        }
      ],
      reverse: true
    },
    {
      number: 3,
      title: "Data Management",
      subtitle: "Structure, Store, and Scale—Effortlessly",
      description: "In today's complex data ecosystems, the challenge isn't just collecting data—it's managing it well. Our data management pillar gives you total control over how data is extracted, transformed, stored, and used.",
      icon: Database,
      gradient: "from-cyan-500 via-emerald-500 to-teal-600",
      accentColor: "text-cyan-500",
      features: [
        {
          title: "Extraction Framework",
          description: "Connect to any source with batch and streaming capabilities.",
          icon: "🔄"
        },
        {
          title: "Data Catalog",
          description: "Centralized inventory for easy data discovery and documentation.",
          icon: "📚"
        },
        {
          title: "Tiered Storage Architecture",
          description: "Hot, warm, and cold storage optimization with automatic hydration.",
          icon: "🏗️"
        },
        {
          title: "Data Lineage",
          description: "Forward and backward tracking for compliance and debugging.",
          icon: "🔍"
        },
        {
          title: "Master Data Management",
          description: "Centralized truth for customers, products, vendors, and more.",
          icon: "🎯"
        },
        {
          title: "Impact Analysis",
          description: "Visualize downstream effects of changes to any field.",
          icon: "📈"
        },
        {
          title: "Transformation Framework",
          description: "Configuration-based data logic without manual coding.",
          icon: "⚙️"
        },
        {
          title: "Data Isolation",
          description: "Multi-tenant security with separate configurations.",
          icon: "🔒"
        }
      ],
      reverse: false
    },
    {
      number: 4,
      title: "DataOps",
      subtitle: "Automate, Monitor, and Optimize",
      description: "DataOps brings agility and reliability to your data operations through automated workflows, continuous monitoring, and intelligent optimization—ensuring your data processes run smoothly at scale.",
      icon: Settings,
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      accentColor: "text-emerald-500",
      features: [
        {
          title: "Automated Workflows",
          description: "Streamlined data pipelines with intelligent orchestration.",
          icon: "🤖"
        },
        {
          title: "Performance Monitoring",
          description: "Real-time visibility into data pipeline health and performance.",
          icon: "📊"
        },
        {
          title: "Continuous Integration",
          description: "Seamless deployment and testing of data processes.",
          icon: "🔄"
        },
        {
          title: "Intelligent Optimization",
          description: "AI-driven recommendations for performance improvements.",
          icon: "🧠"
        }
      ],
      reverse: true
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center glassmorphism rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-cyan-300 mr-2" />
            <span className="text-sm font-medium text-white">Four Pillars Framework</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            The <span className="gradient-text">Four Pillars</span> of Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Built on strong foundations that transform your data landscape into a competitive advantage.
          </p>
        </div>

        {pillars.map((pillar, index) => (
          <div 
            key={index} 
            className="mb-32 last:mb-0"
            data-pillar={index}
          >
            <div className={`group relative transform transition-all duration-1000 ${
              visiblePillars.includes(index) 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}>
              {/* Pillar Number Badge */}
              <div className={`absolute -top-6 ${pillar.reverse ? 'right-8' : 'left-8'} z-10`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${pillar.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{pillar.number}</span>
                </div>
              </div>

              <div className="glassmorphism rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className={`md:flex ${pillar.reverse ? 'md:flex-row-reverse' : ''}`}>
                  {/* Icon Section */}
                  <div className={`md:w-2/5 bg-gradient-to-br ${pillar.gradient} p-12 relative overflow-hidden`}>
                    {/* Animated background elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-float"></div>
                      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce-gentle"></div>
                    </div>
                    
                    <div className="relative text-center text-white">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <pillar.icon className="h-12 w-12" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Pillar {pillar.number}</h3>
                      <h4 className="text-4xl font-bold mb-4">{pillar.title}</h4>
                      <p className="text-xl opacity-90 leading-relaxed">{pillar.subtitle}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-12 bg-white/5 backdrop-blur-sm">
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {pillar.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="group/feature p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 card-hover"
                          style={{ 
                            transitionDelay: `${featureIndex * 100}ms`,
                            transform: visiblePillars.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                            opacity: visiblePillars.includes(index) ? 1 : 0
                          }}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="text-2xl group-hover/feature:scale-110 transition-transform">
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-white mb-2 group-hover/feature:text-cyan-300 transition-colors">
                                {feature.title}
                              </h5>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${pillar.gradient} text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300`}>
                        Explore {pillar.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Experience All Four Pillars Together
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover how Data Katalyst's integrated approach creates synergy across your entire data ecosystem.
            </p>
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-pulse-glow">
              See the Framework in Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
