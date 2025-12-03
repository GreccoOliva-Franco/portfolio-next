import { Shield, Code, ScrollText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { date } from "@/lib/date";
import { Page } from "@/lib/navigation";

export default function HeroSection() {
  const START = date("2021/10/27");
  const TODAY = date();

  const yearsOfExperience = TODAY.diff(START, "years");

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
            <span>Over</span>
            {" " + yearsOfExperience + " "}
            <span>
              years delivering revenue and value through ethical code and
              leadership
            </span>
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
                See My Career
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-emerald-600 text-accent hover:bg-emerald-600/90"
              asChild
            >
              <a
                href="mailto:srgrecco93@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
