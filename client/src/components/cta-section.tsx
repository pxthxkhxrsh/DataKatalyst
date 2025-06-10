import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const handleRequestDemo = () => {
    console.log('Request demo clicked');
  };

  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Data Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join forward-thinking organizations who are already accelerating their insights and empowering better decisions with Data Katalyst.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={handleRequestDemo}
            className="primary-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Request Demo
          </button>
          
          <button 
            onClick={handleGetStarted}
            className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 pt-12">
          {[
            { metric: "99.9%", label: "Uptime SLA" },
            { metric: "24/7", label: "Support" },
            { metric: "SOC 2", label: "Certified" },
            { metric: "GDPR", label: "Compliant" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12">
          <p className="text-lg font-medium text-gradient">
            Data Katalyst: Accelerate Insight. Empower Action.
          </p>
        </div>
      </div>
    </section>
  );
}
