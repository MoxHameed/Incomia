import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-dark-green to-fresh-green min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-5 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fresh-green bg-opacity-10 rounded-full animate-float" style={{ animationDelay: "-3s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block bg-gold-accent bg-opacity-20 text-gold-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                Where Work Meets Worth
              </span>
            </div>
            
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Join <span className="text-gold-accent">5M+</span> people discovering their earning potential
            </h1>
            
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-lg leading-relaxed">
              Real stories, transparent salaries, and actionable career insights. Build wealth through better work decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gold-accent hover:bg-yellow-500 text-dark-green px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Share Your Story
              </Button>
              <Button 
                variant="outline"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-2xl font-medium transition-all"
              >
                Explore Database
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-white text-opacity-80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-accent fill-current" />
                <span className="font-roboto-mono font-semibold">4.9/5</span>
                <span className="text-sm">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-accent" />
                <span className="font-roboto-mono font-semibold">5M+</span>
                <span className="text-sm">Members</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Floating salary cards mockup */}
            <div className="relative">
              {/* Main phone mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-soft-gray rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-dark-green">Software Engineer</span>
                    <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse"></div>
                  </div>
                  <div className="font-roboto-mono text-2xl font-bold text-dark-green mb-1">$125,000</div>
                  <div className="text-sm text-gray-600">San Francisco, CA</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-fresh-green bg-opacity-10 rounded-xl p-3">
                    <div className="text-sm font-medium text-dark-green mb-1">Total Comp</div>
                    <div className="font-roboto-mono text-lg font-bold text-dark-green">$165,000</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gold-accent bg-opacity-10 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">Bonus</div>
                      <div className="font-roboto-mono text-sm font-bold text-dark-green">$15,000</div>
                    </div>
                    <div className="bg-gold-accent bg-opacity-10 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">Stock</div>
                      <div className="font-roboto-mono text-sm font-bold text-dark-green">$25,000</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 bg-gold-accent rounded-2xl p-4 shadow-lg animate-float">
                <div className="text-dark-green font-roboto-mono font-bold">$95K</div>
                <div className="text-xs text-dark-green">Designer</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "-2s" }}>
                <div className="text-fresh-green font-roboto-mono font-bold">$180K</div>
                <div className="text-xs text-gray-600">Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
