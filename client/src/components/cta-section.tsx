import { Button } from "@/components/ui/button";

export default function CTASection() {
  const stats = [
    { value: "100%", label: "Free" },
    { value: "5M+", label: "Members" },
    { value: "4.9★", label: "Rating" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-fresh-green to-dark-green relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-accent bg-opacity-20 rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: "-2s" }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
          Ready to discover your <span className="text-gold-accent">true worth</span>?
        </h2>
        <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
          Join millions of professionals who are taking control of their careers through transparency and community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gold-accent hover:bg-yellow-500 text-dark-green px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            Share Your Story
          </Button>
          <Button 
            variant="outline"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-2xl font-medium transition-all"
          >
            Explore Community
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-roboto-mono text-2xl font-bold text-gold-accent mb-1">
                {stat.value}
              </div>
              <div className="text-white text-opacity-80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
