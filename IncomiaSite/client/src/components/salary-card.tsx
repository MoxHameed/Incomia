import type { Salary } from "@shared/schema";

interface SalaryCardProps {
  salary: Salary;
}

export default function SalaryCard({ salary }: SalaryCardProps) {
  return (
    <div className="salary-card bg-white rounded-3xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-medium text-dark-green text-lg">{salary.position}</div>
          <div className="text-gray-500 text-sm">{salary.company}</div>
        </div>
        {salary.verified && (
          <div className="bg-fresh-green bg-opacity-10 text-fresh-green px-3 py-1 rounded-full text-xs font-medium">
            Verified
          </div>
        )}
      </div>
      
      <div className="mb-4">
        <div className="font-roboto-mono text-3xl font-bold text-dark-green mb-1">
          ${salary.baseSalary.toLocaleString()}
        </div>
        <div className="text-gray-500 text-sm">Base Salary</div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gold-accent bg-opacity-10 rounded-xl p-3">
          <div className="text-xs text-gray-500 mb-1">Bonus</div>
          <div className="font-roboto-mono font-bold text-dark-green">
            ${salary.bonus ? `${Math.round(salary.bonus / 1000)}K` : "0"}
          </div>
        </div>
        <div className="bg-fresh-green bg-opacity-10 rounded-xl p-3">
          <div className="text-xs text-gray-500 mb-1">Stock</div>
          <div className="font-roboto-mono font-bold text-dark-green">
            ${salary.stock ? `${Math.round(salary.stock / 1000)}K` : "0"}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{salary.location}</span>
        <span>{salary.experience}</span>
      </div>
    </div>
  );
}
