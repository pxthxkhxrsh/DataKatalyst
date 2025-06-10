import { Zap, Lightbulb, Shield } from "lucide-react";

export default function OverviewSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Scale Faster",
      description: "Accelerate your data initiatives with proven frameworks and automated processes that eliminate bottlenecks."
    },
    {
      icon: Lightbulb,
      title: "Innovate Smarter",
      description: "Transform raw data into actionable insights with AI-driven analytics and intelligent automation."
    },
    {
      icon: Shield,
      title: "Govern Better",
      description: "Ensure compliance, security, and accountability with comprehensive governance frameworks."
    }
  ];

  const stats = [
    { value: "300%", label: "Performance Boost" },
    { value: "50K+", label: "Data Professionals" },
    { value: "100+", label: "Enterprise Clients" }
  ];

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-12">
            <span className="text-sm font-medium text-blue-700">Trusted by industry leaders worldwide</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-gradient">Data Katalyst</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're aiming to scale faster, innovate smarter, or govern better—Data Katalyst is your launchpad to becoming truly data-driven.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-subtle text-center">
              <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
