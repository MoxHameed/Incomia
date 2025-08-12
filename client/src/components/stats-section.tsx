export default function StatsSection() {
  const stats = [
    { value: "25,000+", label: "Salaries Shared" },
    { value: "2,500+", label: "Companies" },
    { value: "5M+", label: "Community Members", highlight: true },
    { value: "87%", label: "Salary Increases", accent: true },
  ];

  return (
    <section className="bg-soft-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className={`font-roboto-mono font-bold text-3xl mb-2 ${
                  stat.highlight 
                    ? "text-fresh-green" 
                    : stat.accent 
                    ? "text-gold-accent" 
                    : "text-dark-green"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
