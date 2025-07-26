import { Card } from "@/components/ui/card";
import { Shield, Award, Users } from "lucide-react";

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

export default function ValuesSection() {
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
              text="Drove 20x performance gains at Wortise and 30% operational
              efficiency at Repuestos Ya through strategic optimization."
            />
          </Card>

          <Card className="p-8 text-center border-0 shadow-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <ValueCardTitle black="Team" green="Leadership" />
            <ValueCardDescription
              text="Led 3+ developer teams across 4 organizations, mentoring while
              delivering complex projects on schedule."
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
