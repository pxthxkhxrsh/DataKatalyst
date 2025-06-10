import { CheckCircle, Zap, Shield, Lock } from "lucide-react";

export default function FeaturesSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Fewer Errors",
      description: "Eliminate surprises in reports with validated, high-quality data."
    },
    {
      icon: Zap,
      title: "Faster Resolution",
      description: "Quickly identify and fix data issues with automated workflows."
    },
    {
      icon: Shield,
      title: "Complete Confidence", 
      description: "Trust every dashboard and decision with rock-solid data foundations."
    },
    {
      icon: Lock,
      title: "Peace of Mind",
      description: "Know your data is compliant, controlled, and completely secure."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What This Means for You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformation that comes with enterprise-grade data infrastructure built for the modern age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl card-subtle">
              <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 card-subtle">
          <p className="text-xl font-semibold text-gradient mb-4">
            Data Katalyst: Accelerate Insight. Empower Action.
          </p>
          <p className="text-lg text-gray-600">
            Data quality is no longer an afterthought—it's the foundation. And with Data Katalyst, that foundation is rock solid.
          </p>
        </div>
      </div>
    </section>
  );
}
