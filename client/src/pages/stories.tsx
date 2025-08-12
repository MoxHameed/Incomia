import { useQuery } from "@tanstack/react-query";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "@/components/footer";
import type { Testimonial } from "@shared/schema";

export default function Stories() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-green to-fresh-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Success <span className="text-gold-accent">Stories</span>
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Real people sharing how transparency changed their careers
          </p>
          
          <Button className="bg-gold-accent hover:bg-yellow-500 text-dark-green px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
            Share Your Story
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-roboto-mono font-bold text-3xl text-fresh-green mb-2">5M+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="font-roboto-mono font-bold text-3xl text-gold-accent mb-2">87%</div>
              <div className="text-gray-600">Salary Increases</div>
            </div>
            <div>
              <div className="font-roboto-mono font-bold text-3xl text-dark-green mb-2">$2.1B</div>
              <div className="text-gray-600">Total Raises</div>
            </div>
            <div>
              <div className="font-roboto-mono font-bold text-3xl text-fresh-green mb-2">4.9★</div>
              <div className="text-gray-600">Community Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-dark-green mb-4">
              Stories from our <span className="text-fresh-green">community</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover how transparency has transformed careers across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <Skeleton className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-5 w-24 mb-2" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                  <Skeleton className="h-24 w-full mb-6" />
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              testimonials?.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    {testimonial.avatarUrl && (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={`Professional headshot of ${testimonial.name}`}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <div className="font-bold text-dark-green text-lg">{testimonial.name}</div>
                      <div className="text-fresh-green font-medium">{testimonial.title}</div>
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold-accent opacity-20" />
                    <blockquote className="text-gray-700 text-lg leading-relaxed pl-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex text-gold-accent">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4 rounded-2xl font-bold text-lg">
              Read More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fresh-green to-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Your story could be <span className="text-gold-accent">next</span>
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join thousands of professionals who've transformed their careers through transparency
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold-accent hover:bg-yellow-500 text-dark-green px-8 py-4 rounded-2xl font-bold text-lg">
              Share Your Success Story
            </Button>
            <Button 
              variant="outline"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-2xl font-medium"
            >
              Join the Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
