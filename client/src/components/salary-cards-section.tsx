import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import SalaryCard from "@/components/salary-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Salary } from "@shared/schema";

export default function SalaryCardsSection() {
  const { data: salaries, isLoading } = useQuery<Salary[]>({
    queryKey: ["/api/salaries"],
  });

  return (
    <section className="py-20 bg-gradient-to-br from-soft-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-dark-green mb-4">
            Real salaries from <span className="text-fresh-green">real people</span>
          </h2>
          <p className="text-xl text-gray-600">See what people in your field are actually making</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
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
            salaries?.slice(0, 6).map((salary) => (
              <SalaryCard key={salary.id} salary={salary} />
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
            View All 25,000+ Salaries
          </Button>
        </div>
      </div>
    </section>
  );
}
