import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import JobListing from "@/components/job-listing";
import { Skeleton } from "@/components/ui/skeleton";
import type { Job } from "@shared/schema";

export default function JobBoardSection() {
  const { data: jobs, isLoading } = useQuery<Job[]>({
    queryKey: ["/api/jobs"],
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-dark-green mb-4">
            Jobs with <span className="text-fresh-green">no salary surprises</span>
          </h2>
          <p className="text-xl text-gray-600">Every job listing includes transparent compensation information</p>
        </div>
        
        <div className="bg-soft-gray rounded-3xl p-8">
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
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
              jobs?.slice(0, 3).map((job, index) => (
                <JobListing key={job.id} job={job} colorIndex={index} />
              ))
            )}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
              View All Transparent Jobs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
