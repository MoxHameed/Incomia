import { BookOpen, Video, FileText, Users, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function Resources() {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Salary Negotiation Guides",
      description: "Step-by-step guides to negotiate your best offer",
      count: "12 guides",
      color: "bg-fresh-green"
    },
    {
      icon: Video,
      title: "Career Development Videos",
      description: "Expert interviews and career advice",
      count: "25 videos",
      color: "bg-gold-accent"
    },
    {
      icon: BookOpen,
      title: "Industry Reports",
      description: "Comprehensive salary and trend analysis",
      count: "8 reports",
      color: "bg-dark-green"
    },
    {
      icon: Users,
      title: "Community Forums",
      description: "Connect with peers and share experiences",
      count: "5K+ members",
      color: "bg-fresh-green"
    }
  ];

  const featuredResources = [
    {
      type: "Guide",
      title: "The Ultimate Salary Negotiation Playbook",
      description: "Everything you need to know about negotiating your salary, from preparation to closing the deal.",
      downloadCount: "15K downloads",
      featured: true
    },
    {
      type: "Report",
      title: "2024 Tech Salary Report",
      description: "Comprehensive analysis of technology sector compensation trends and projections.",
      downloadCount: "8K downloads",
      featured: true
    },
    {
      type: "Video Series",
      title: "Career Transition Masterclass",
      description: "5-part series on successfully changing careers and maximizing your earning potential.",
      downloadCount: "12K views",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-green to-fresh-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Career <span className="text-gold-accent">Resources</span>
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Get actionable advice and tools to negotiate better and advance faster
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="font-roboto-mono font-bold text-2xl text-gold-accent mb-1">100+</div>
              <div className="text-white text-opacity-80 text-sm">Resources</div>
            </div>
            <div className="text-center">
              <div className="font-roboto-mono font-bold text-2xl text-gold-accent mb-1">500K+</div>
              <div className="text-white text-opacity-80 text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="font-roboto-mono font-bold text-2xl text-gold-accent mb-1">4.8★</div>
              <div className="text-white text-opacity-80 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="font-roboto-mono font-bold text-2xl text-gold-accent mb-1">Free</div>
              <div className="text-white text-opacity-80 text-sm">Always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-dark-green mb-4">
              Explore by <span className="text-fresh-green">category</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect resources for your career journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-soft-gray rounded-3xl p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`text-2xl ${category.color === 'bg-gold-accent' ? 'text-dark-green' : 'text-white'}`} size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-dark-green mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="text-fresh-green font-medium text-sm">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-dark-green mb-4">
              Featured <span className="text-fresh-green">resources</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and highly-rated career development materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-fresh-green bg-opacity-10 text-fresh-green px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  {resource.featured && (
                    <span className="bg-gold-accent bg-opacity-10 text-gold-accent px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="font-montserrat font-bold text-xl text-dark-green mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.downloadCount}</span>
                  <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-4 py-2 rounded-xl flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Access
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-dark-green mb-4">
              Complete resource <span className="text-fresh-green">library</span>
            </h2>
            <p className="text-lg text-gray-600">
              Browse our entire collection of career development materials
            </p>
          </div>
          
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-soft-gray rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-fresh-green rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-green mb-1">How to Research Company Salaries</h4>
                    <p className="text-gray-600 text-sm">Learn the best methods to research compensation before interviews</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-gray-500">Guide • 15 min read</span>
                      <span className="text-xs text-fresh-green">2.3K downloads</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost"
                  className="text-fresh-green hover:text-dark-green flex items-center gap-2"
                >
                  View
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4 rounded-2xl font-bold text-lg">
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-fresh-green to-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Get new resources <span className="text-gold-accent">first</span>
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join our newsletter to receive the latest career development resources and insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-gold-accent"
            />
            <Button className="bg-gold-accent hover:bg-yellow-500 text-dark-green px-6 py-3 rounded-xl font-bold">
              Subscribe
            </Button>
          </div>
          
          <p className="text-white text-opacity-70 text-sm mt-4">
            100% free • Unsubscribe anytime • 50K+ subscribers
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
