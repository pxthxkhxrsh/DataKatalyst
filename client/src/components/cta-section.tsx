import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();

  const createDemoRequest = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/demo-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo request submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Demo request error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createDemoRequest.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 card-subtle">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a Demo</h3>
            <p className="text-gray-600 mb-6">
              See Data Katalyst in action. Our experts will show you how to transform your data infrastructure.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work Email *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your data challenges..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={createDemoRequest.isPending}
                className="w-full primary-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {createDemoRequest.isPending ? "Submitting..." : "Schedule Demo"}
                {!createDemoRequest.isPending && (
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to receive communications from Data Katalyst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
