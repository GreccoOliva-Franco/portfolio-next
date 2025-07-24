"use client";

import Link from "next/link";
import { LogoText } from "./logo";
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
    href: Page.HOME,
  },
  {
    text: "Me",
    href: Page.ABOUT_ME,
  },
  {
    text: "Technologies",
    href: Page.TECHNOLOGIES,
  },
  {
    text: "Projects",
    href: Page.PROJECTS,
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-fit w-full items-center justify-between  border-x-2 border-b-2 rounded-b-2xl">
      <Link href={Page.HOME} className="p-4 flex gap-2 items-center">
        <LogoText />
      </Link>

      <NavigationMenu className="mr-4">
        <NavigationMenuList className="gap-4">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  data-active={pathname === link.href}
                  className={cn(
                    "font-bold",
                    "data-[active=true]:border-b-3 data-[active=true]:border-green-700"
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
