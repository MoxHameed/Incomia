import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section className="py-20 bg-dark-green relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-fresh-green bg-opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold-accent bg-opacity-5 rounded-full animate-pulse-slow" style={{ animationDelay: "-1.5s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">
            Success stories from our <span className="text-gold-accent">community</span>
          </h2>
          <p className="text-xl text-white text-opacity-80">Real people sharing how transparency changed their careers</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="backdrop-blur-glass border border-white border-opacity-20 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <Skeleton className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <Skeleton className="h-5 w-24 mb-2" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
                <Skeleton className="h-20 w-full mb-4" />
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
            ))
          ) : (
            testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="backdrop-blur-glass border border-white border-opacity-20 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  {testimonial.avatarUrl && (
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={`Professional headshot of ${testimonial.name}`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-fresh-green text-sm">{testimonial.title}</div>
                  </div>
                </div>
                <blockquote className="text-white text-opacity-90 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex text-gold-accent">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
