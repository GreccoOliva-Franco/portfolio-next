"use client";

import Link from "next/link";
import { LogoImage, LogoText } from "./logo";
import { Page } from "@/lib/navigation";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Me",
    href: "/about-me",
  },
  {
    text: "Technologies",
    href: "/technologies",
  },
  {
    text: "Projects",
    href: "/projects",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-fit w-full items-center justify-between  border-x-2 border-b-2 rounded-b-2xl">
      <Link href={Page.HOME} className="p-2 flex gap-2 items-center">
        <LogoImage />
        <LogoText />
      </Link>

      <NavigationMenu className="mr-4">
        <NavigationMenuList className="gap-4">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "font-bold",
                    "hover:bg-green-100",
                    pathname === link.href &&
                      "bg-green-200 text-green-800 border-b-2 border-green-700"
                  )}
                  prefetch={false}
                >
                  {link.text.toUpperCase()}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
