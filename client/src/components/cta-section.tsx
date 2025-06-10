import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTASection() {
  const handleRequestDemo = () => {
    // In a real implementation, this would open a contact form or redirect to a demo page
    console.log('Request demo clicked');
  };

  const handleGetStarted = () => {
    // In a real implementation, this would redirect to a signup or onboarding flow
    console.log('Get started clicked');
  };

  return (
    <section id="contact" className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--data-blue)]/20 to-[var(--data-teal)]/20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Data Journey?
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
          Join forward-thinking organizations who are already accelerating their insights and empowering better decisions with Data Katalyst.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleRequestDemo}
            className="inline-flex items-center px-8 py-4 bg-white text-[var(--data-blue)] font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Request a Demo
            <MessageCircle className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={handleGetStarted}
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[var(--data-blue)] transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-300/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
