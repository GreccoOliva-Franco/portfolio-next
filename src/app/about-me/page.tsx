import {
  Briefcase,
  Code,
  GraduationCap,
  Languages as LanguagesIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Page } from "@/lib/navigation";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-8">
        <WorkExperience />

        <div className="space-y-8">
          <AcademicStudies />
          <TechnologiesAndProjects />
          <Languages />
        </div>
      </div>
    </div>
  );
}

function WorkExperience() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-primary" />
          <CardTitle>Work Experience</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold">Founder</h3>
          <p className="text-sm text-muted-foreground">
            WaitIt • 01/2025 - Present
          </p>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            <li>A notification system for businesses that require their customers to retrieve their order on the counter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Full Stack Engineer</h3>
          <p className="text-sm text-muted-foreground">
            Avature • 06/2024 - 08/2024
          </p>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            <li>
              Updated legacy code in PHP/JavaScript to follow business
              guidelines
            </li>
            <li>
              Improved testing performance with unit and integration tests
            </li>
            <li>
              Fix internal bugs and report external ones to external teams
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Backend Developer</h3>
          <p className="text-sm text-muted-foreground">
            Wortise • 03/2023 - 02/2024
          </p>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            <li>Rebuilt client&apos;s dashboard API from scratch</li>
            <li>
              Achieved over 20x performance improvements in core API features
            </li>
            <li>
              Implemented Payments, Web Crawlers, RBAC, ABAC, Background tasks,
              Child accounts, Referrals (fees), Database notifications, ...
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Backend Developer</h3>
          <p className="text-sm text-muted-foreground">
            Freelance for Gobierno de Entre Ríos • 01/2023 - 02/2024
          </p>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            <li>
              Updated legacy code in PHP/JavaScript to follow the latest
              business guidelines
            </li>
            <li>
              Improved testing performance with unit and integration tests
              reducing end-to-end tests
            </li>
            <li>
              Fix internal bugs and report external ones to external teams
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Backend Developer</h3>
          <p className="text-sm text-muted-foreground">
            Repuestos Ya • 11/2021 - 02/2023
          </p>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            <li>
              Maintained the old backoffice while building the new one due to
              slow performace
            </li>
            <li>Automated price syncronization with providers</li>
            <li>Led a 3-developer team and mentored a trainee developer</li>
            <li>Represented the business in technical meetings</li>
            <li>Communicated progress to owners and stakeholders</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function AcademicStudies() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-primary" />
          <CardTitle>Academic Studies</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="font-semibold">Mechanical Engineer - Mechatronics</h3>
          <p className="text-sm text-muted-foreground">ITBA, Argentina</p>
          <p className="mt-2 text-sm">
            Engineer mindset and systems design applied to software development
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function Languages() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <LanguagesIcon className="w-6 h-6 text-primary" />
          <CardTitle>Languages</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between">
              <span>Spanish</span>
              <Badge variant="secondary">Native</Badge>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>English</span>
              <Badge variant="secondary">Advanced</Badge>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>French</span>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Italian</span>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Catalan</span>
              <Badge variant="secondary">Advanced</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TechnologiesAndProjects() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Code className="w-6 h-6 text-primary" />
          <CardTitle>Technologies & Projects</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>I have prepared detailed sections:</p>
        <div className="flex justify-center gap-3 mt-3">
          <Button asChild>
            <Link href={Page.TECHNOLOGIES}>Technologies</Link>
          </Button>
          <Button asChild>
            <Link href={Page.PROJECTS}>Projects</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
