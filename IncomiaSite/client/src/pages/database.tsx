import { useQuery } from "@tanstack/react-query";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SalaryCard from "@/components/salary-card";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "@/components/footer";
import type { Salary } from "@shared/schema";

export default function Database() {
  const { data: salaries, isLoading } = useQuery<Salary[]>({
    queryKey: ["/api/salaries"],
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-green to-fresh-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Salary <span className="text-gold-accent">Database</span>
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Explore thousands of verified salaries from real professionals across industries
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search by job title, company, or location..."
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

      {/* Results */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-montserrat font-bold text-2xl text-dark-green">
              {salaries?.length || 0} Salary Reports
            </h2>
            <Button variant="outline" className="rounded-2xl">
              Sort by: Most Recent
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-lg">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24 mb-4" />
                  <Skeleton className="h-8 w-28 mb-4" />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Skeleton className="h-16 w-full rounded-xl" />
                    <Skeleton className="h-16 w-full rounded-xl" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))
            ) : (
              salaries?.map((salary) => (
                <SalaryCard key={salary.id} salary={salary} />
              ))
            )}
          </div>
          
          {salaries && salaries.length > 12 && (
            <div className="text-center mt-12">
              <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4 rounded-2xl font-bold text-lg">
                Load More Results
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
