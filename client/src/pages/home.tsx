import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";
import SalaryCardsSection from "@/components/salary-cards-section";
import TestimonialsSection from "@/components/testimonials-section";
import JobBoardSection from "@/components/job-board-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SalaryCardsSection />
      <TestimonialsSection />
      <JobBoardSection />
      <CTASection />
      <Footer />
    </div>
  );
}
