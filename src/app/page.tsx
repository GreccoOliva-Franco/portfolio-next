import HeroSection from "./hero";
import ValuesSection from "./values";
import ContactSection from "./contact";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ValuesSection />

      <ContactSection />
    </div>
  );
}
