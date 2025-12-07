import ContactSection from "./contact";
import HeroSection from "./hero";
import ValuesSection from "./values";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ValuesSection />

      <ContactSection />
    </div>
  );
}
