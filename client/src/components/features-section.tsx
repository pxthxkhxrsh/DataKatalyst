import { CheckCircle, Zap, Shield, Lock } from "lucide-react";

export default function FeaturesSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Fewer Errors",
      description: "Eliminate surprises in reports with validated, high-quality data.",
      gradient: "from-[var(--data-blue)] to-[var(--data-teal)]"
    },
    {
      icon: Zap,
      title: "Faster Resolution",
      description: "Quickly identify and fix data issues with automated workflows.",
      gradient: "from-[var(--data-teal)] to-[var(--data-cyan)]"
    },
    {
      icon: Shield,
      title: "Complete Confidence",
      description: "Trust every dashboard and decision with rock-solid data foundations.",
      gradient: "from-[var(--data-cyan)] to-[var(--data-success)]"
    },
    {
      icon: Lock,
      title: "Peace of Mind",
      description: "Know your data is compliant, controlled, and completely secure.",
      gradient: "from-[var(--data-success)] to-[var(--data-blue)]"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">What This Means for You</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the transformation that comes with enterprise-grade data infrastructure built for the modern age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 card-hover">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold gradient-text mb-4">
            Data Katalyst: Accelerate Insight. Empower Action.
          </p>
          <p className="text-lg text-slate-600">
            Data quality is no longer an afterthought—it's the foundation. And with Data Katalyst, that foundation is rock solid.
          </p>
        </div>
      </div>
    </section>
  );
}
