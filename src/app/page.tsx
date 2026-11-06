import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ContentTypesSection } from "@/components/landing/ContentTypesSection";
import { ApprovalSection } from "@/components/landing/ApprovalSection";
import { EarlyAccessSection } from "@/components/landing/EarlyAccessSection";
import { FaqSection } from "@/components/landing/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ContentTypesSection />
        <ApprovalSection />
        <EarlyAccessSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}