import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function TechnologyCard({
  text,
  icon,
  className = "",
}: {
  text: string;
  icon: string;
  className?: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-center">
          <Image
            src={icon}
            alt={`${text} logo`}
            height={40}
            width={40}
            className={cn("h-10 w-10 object-contain", className)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-center">
        <h3 className="text-md">{text}</h3>
      </CardContent>
    </Card>
  );
}
