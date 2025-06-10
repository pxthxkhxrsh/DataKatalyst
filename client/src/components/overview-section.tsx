import { Zap, Lightbulb, Shield } from "lucide-react";

export default function OverviewSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Scale Faster",
      description: "Accelerate your data initiatives with proven frameworks and automated processes that eliminate bottlenecks.",
      gradient: "from-[var(--data-blue)] to-[var(--data-teal)]"
    },
    {
      icon: Lightbulb,
      title: "Innovate Smarter",
      description: "Transform raw data into actionable insights with AI-driven analytics and intelligent automation.",
      gradient: "from-[var(--data-teal)] to-[var(--data-cyan)]"
    },
    {
      icon: Shield,
      title: "Govern Better",
      description: "Ensure compliance, security, and accountability with comprehensive governance frameworks.",
      gradient: "from-[var(--data-cyan)] to-[var(--data-success)]"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Data Katalyst?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're aiming to scale faster, innovate smarter, or govern better—Data Katalyst is your launchpad to becoming truly data-driven.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200 card-hover">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
