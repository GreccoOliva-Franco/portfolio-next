"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Technology({
  text,
  icon,
  className = "",
}: {
  text: string;
  icon: string;
  className?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={icon}
          alt={text + "'s logo"}
          height={50}
          width={50}
          className={cn("h-10 w-10 object-fit mx-auto", className)}
        />
      </CardHeader>
      <CardContent>
        <h3>{text}</h3>
      </CardContent>
    </Card>
  );
}
