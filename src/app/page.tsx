import { Page } from "@/lib/navigation";
import {
  Shield,
  Code,
  ScrollText,
  Mail,
  Github,
  Linkedin,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ValuesSection />

      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted rounded-b-xl"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1 rounded-full mb-4">
            <Shield className="size-4 text-primary" />
            <span className="text-sm font-medium">Software with Integrity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Honor, Ethics</span>
            <span className="block mt-2">&</span>
            <span className="block mt-2 text-emerald-600">Results</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Over 3 years delivering revenue and value through ethical code and
            leadership
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={Page.PROJECTS}>
                <Code className="mr-2 h-4 w-4" />
                See My Work
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link href={Page.ABOUT_ME}>
                <ScrollText className="mr-2 h-4 w-4" />
                See My Carreer
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-emerald-600 text-accent hover:bg-emerald-600/90"
              asChild
            >
              <Link href="mailto:srgrecco93@gmail.com" target="_blank">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section id="values" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          How I Deliver <span className="text-emerald-600">Value</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center border-0 shadow-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <ValueCardTitle black="Ethical" green="Code" />
            <ValueCardDescription
              text="Transparent, maintainable solutions that stand the test of time.
              Zero compromises on data integrity or user trust."
            />
          </Card>

          <Card className="p-8 text-center border-0 shadow-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <ValueCardTitle black="Proven" green="Results" />
            <ValueCardDescription
              text="Reduce API response duration.
              Increase user retention."
            />
          </Card>

          <Card className="p-8 text-center border-0 shadow-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <ValueCardTitle black="Team" green="Leadership" />
            <ValueCardDescription text="Led and mentored small teams of developers and delivered results on schedule." />
          </Card>
        </div>
      </div>
    </section>
  );
}

function ValueCardTitle({ black, green }: { black: string; green: string }) {
  return (
    <h3 className="text-xl font-semibold mb-3">
      {black} <span className="text-emerald-600">{green}</span>
    </h3>
  );
}

function ValueCardDescription({ text }: { text: string }) {
  return <p className="text-muted-foreground">{text}</p>;
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-muted to-background rounded-t-xl"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Let&apos;s Build With{" "}
            <span className="text-emerald-600">Integrity</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you need technical leadership, technical expertise, or want
            to craft software solutions — I&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" asChild>
              <Link href="https://linkedin.com/in/francogrecco" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="default" asChild>
              <Link
                href="https://github.com/GreccoOliva-Franco"
                target="_blank"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-emerald-600 text-accent hover:bg-emerald-600/90"
            >
              <Link href="mailto:srgrecco93@gmail.com" target="_blank">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
