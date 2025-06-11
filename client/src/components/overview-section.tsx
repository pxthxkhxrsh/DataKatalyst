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



  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


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
