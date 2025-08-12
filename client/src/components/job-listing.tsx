import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Job } from "@shared/schema";

interface JobListingProps {
  job: Job;
  colorIndex: number;
}

export default function JobListing({ job, colorIndex }: JobListingProps) {
  const borderColors = ["border-fresh-green", "border-gold-accent", "border-dark-green"];
  const bgColors = ["bg-fresh-green", "bg-gold-accent", "bg-dark-green"];
  const textColors = ["text-fresh-green", "text-gold-accent", "text-dark-green"];
  
  const borderColor = borderColors[colorIndex % borderColors.length];
  const bgColor = bgColors[colorIndex % bgColors.length];
  const textColor = textColors[colorIndex % textColors.length];

  const formatSalary = (min: number, max: number) => {
    return `$${Math.round(min / 1000)}K - $${Math.round(max / 1000)}K`;
  };

  const getTimeAgo = (date: Date | string) => {
    const now = new Date();
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const diffTime = Math.abs(now.getTime() - dateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    return `${Math.ceil(diffDays / 7)} weeks ago`;
  };

  return (
    <div className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border-l-4 ${borderColor}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl text-dark-green mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-2">{job.company}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{getTimeAgo(job.postedAt)}</span>
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className={`${bgColor} bg-opacity-10 ${textColor} px-4 py-2 rounded-xl mb-2`}>
            <div className="font-roboto-mono font-bold text-lg">
              {formatSalary(job.salaryMin, job.salaryMax)}
            </div>
            <div className="text-xs">
              {job.hasEquity && "+ equity"} {job.hasBenefits && "+ benefits"}
            </div>
          </div>
          <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-6 py-2 rounded-xl font-medium transition-all">
            View Job
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
