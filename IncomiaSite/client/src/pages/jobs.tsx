import { useQuery } from "@tanstack/react-query";
import { Search, Filter, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import JobListing from "@/components/job-listing";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "@/components/footer";
import type { Job } from "@shared/schema";

export default function Jobs() {
  const { data: jobs, isLoading } = useQuery<Job[]>({
    queryKey: ["/api/jobs"],
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-green to-fresh-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Transparent <span className="text-gold-accent">Jobs</span>
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Find opportunities where salary ranges are always included upfront
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search jobs by title, company, or skills..."
                className="pl-10 h-12 rounded-2xl bg-white"
              />
            </div>
            <Button className="bg-gold-accent hover:bg-yellow-500 text-dark-green px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Job Stats */}
      <section className="py-8 bg-white border-b border-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-2xl">
              <div className="w-12 h-12 bg-fresh-green rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-roboto-mono font-bold text-xl text-dark-green">100%</div>
                <div className="text-sm text-gray-600">Salary Transparent</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-2xl">
              <div className="w-12 h-12 bg-gold-accent rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-dark-green" />
              </div>
              <div>
                <div className="font-roboto-mono font-bold text-xl text-dark-green">{jobs?.length || 0}+</div>
                <div className="text-sm text-gray-600">Open Positions</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-2xl">
              <div className="w-12 h-12 bg-dark-green rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">★</span>
              </div>
              <div>
                <div className="font-roboto-mono font-bold text-xl text-dark-green">Top</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-montserrat font-bold text-2xl text-dark-green">
              {jobs?.length || 0} Open Positions
            </h2>
            <Button variant="outline" className="rounded-2xl">
              Sort by: Most Recent
            </Button>
          </div>
          
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-l-4 border-fresh-green">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Skeleton className="h-6 w-48 mb-2" />
                      <Skeleton className="h-4 w-32 mb-2" />
                      <div className="flex gap-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                    <div className="text-right">
                      <Skeleton className="h-16 w-32 mb-2 rounded-xl" />
                      <Skeleton className="h-10 w-24 rounded-xl" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              jobs?.map((job, index) => (
                <JobListing key={job.id} job={job} colorIndex={index} />
              ))
            )}
          </div>
          
          {jobs && jobs.length > 10 && (
            <div className="text-center mt-12">
              <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4 rounded-2xl font-bold text-lg">
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
