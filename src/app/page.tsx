import ContactSection from "./_components/contact";
import HeroSection from "./_components/hero";
import ValuesSection from "./_components/values";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ValuesSection />

      <ContactSection />
    </div>
  );
}