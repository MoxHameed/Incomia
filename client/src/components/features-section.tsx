import { Database, Briefcase, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Salary Database",
      description: "Access thousands of verified salaries across industries and experience levels.",
      action: "Explore Database",
      color: "bg-fresh-green"
    },
    {
      icon: Briefcase,
      title: "Transparent Jobs",
      description: "Find opportunities where salary ranges are always included upfront.",
      action: "Browse Jobs",
      color: "bg-gold-accent"
    },
    {
      icon: TrendingUp,
      title: "Career Insights",
      description: "Get actionable advice and tools to negotiate better and advance faster.",
      action: "Get Insights",
      color: "bg-dark-green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-dark-green mb-4">
            Everything you need to <span className="text-fresh-green">level up</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From salary transparency to career guidance, we've got the tools to help you thrive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-soft-gray rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`text-2xl ${feature.color === 'bg-gold-accent' ? 'text-dark-green' : 'text-white'}`} size={24} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-dark-green mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Button 
                variant="ghost"
                className="text-fresh-green hover:text-dark-green font-medium group"
              >
                {feature.action}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
