import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your <span className="text-gradient">Data Journey</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading organizations who trust Data Katalyst to power their data-driven decisions. 
              Experience the difference that enterprise-grade data infrastructure makes.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Complete data quality assurance",
                "Enterprise-grade security & compliance", 
                "Scalable data management infrastructure",
                "Advanced analytics & ML capabilities",
                "Streamlined DataOps workflows"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Contact Information */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 card-subtle">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                For more information about Data Katalyst and how we can help transform your data infrastructure, 
                please contact us directly.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Contact us at:</p>
                <a 
                  href="mailto:datakatalyst@pratishthanventures.com"
                  className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 break-all"
                >
                  datakatalyst@pratishthanventures.com
                </a>
              </div>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                Our team will get back to you within 24 hours to discuss your data transformation needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
