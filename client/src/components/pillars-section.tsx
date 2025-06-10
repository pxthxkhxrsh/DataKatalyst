import { CheckCircle, Shield, Database, Settings } from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      number: 1,
      title: "Data Quality",
      subtitle: "Trust Your Data. Every Time.",
      description: "In today's data-driven world, decisions are only as good as the data behind them. That's why the first pillar of Data Katalyst is dedicated to ensuring data quality—so you never have to second-guess the accuracy, completeness, or reliability of the insights you rely on.",
      icon: CheckCircle,
      gradient: "from-blue-500 to-blue-600",
      features: [
        {
          title: "DQ Assessment & Incident Management",
          description: "Ongoing assessments with automatic incident creation and failure tracking."
        },
        {
          title: "Resolution & Repair",
          description: "Rule-based cleansing framework with comprehensive audit trails."
        },
        {
          title: "Validation Framework",
          description: "Configurable validation for validity, completeness, consistency, accuracy, timeliness, and uniqueness."
        },
        {
          title: "Data Unification",
          description: "Configuration-based master data merging across multiple sources."
        },
        {
          title: "Smart Missing Data Handling",
          description: "AI-driven imputation using K-NN, Deep Learning, Random Forest, and more."
        },
        {
          title: "Data Profiling & Gap Enrichment",
          description: "Comprehensive profiling dashboards with smart enrichment workflows."
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
      gradient: "from-teal-500 to-teal-600",
      features: [
        {
          title: "Policy Enforcement",
          description: "Configurable governance frameworks for consistent data usage."
        },
        {
          title: "Defined Roles & Responsibilities",
          description: "Clear mapping of Data Stewards, Custodians, and Owners."
        },
        {
          title: "Compliance & Standards",
          description: "GDPR, CCPA compliance with ISO 27001 and PCI-DSS alignment."
        },
        {
          title: "Security & Access Control",
          description: "AES encryption, RBAC, and MFA for comprehensive protection."
        },
        {
          title: "Incident Response",
          description: "Comprehensive breach detection, containment, and recovery planning."
        },
        {
          title: "Audits & Entitlement Review",
          description: "Automated audit tools for access tracking and policy compliance."
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
      gradient: "from-cyan-500 to-cyan-600",
      features: [
        {
          title: "Extraction Framework",
          description: "Connect to any source with batch and streaming capabilities."
        },
        {
          title: "Data Catalog",
          description: "Centralized inventory for easy data discovery and documentation."
        },
        {
          title: "Tiered Storage Architecture",
          description: "Hot, warm, and cold storage optimization with automatic hydration."
        },
        {
          title: "Data Lineage",
          description: "Forward and backward tracking for compliance and debugging."
        },
        {
          title: "Master Data Management",
          description: "Centralized truth for customers, products, vendors, and more."
        },
        {
          title: "Impact Analysis",
          description: "Visualize downstream effects of changes to any field."
        },
        {
          title: "Transformation Framework",
          description: "Configuration-based data logic without manual coding."
        },
        {
          title: "Data Isolation",
          description: "Multi-tenant security with separate configurations."
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
      gradient: "from-emerald-500 to-emerald-600",
      features: [
        {
          title: "Automated Workflows",
          description: "Streamlined data pipelines with intelligent orchestration."
        },
        {
          title: "Performance Monitoring",
          description: "Real-time visibility into data pipeline health and performance."
        },
        {
          title: "Continuous Integration",
          description: "Seamless deployment and testing of data processes."
        },
        {
          title: "Intelligent Optimization",
          description: "AI-driven recommendations for performance improvements."
        }
      ],
      reverse: true
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Four Pillars of Excellence</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built on strong foundations that transform your data landscape into a competitive advantage.
          </p>
        </div>

        {pillars.map((pillar, index) => (
          <div key={index} className="mb-20">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className={`md:flex ${pillar.reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/3 bg-gradient-to-br ${pillar.gradient} p-8 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Pillar {pillar.number}</h3>
                    <h4 className="text-3xl font-bold">{pillar.title}</h4>
                    <p className="text-lg opacity-90 mt-2">{pillar.subtitle}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-lg text-slate-600 mb-6">
                    {pillar.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[var(--data-blue)]/10 rounded-full flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-[var(--data-blue)] rounded-full"></div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900">{feature.title}</h5>
                          <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
