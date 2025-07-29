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
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  return (
    <header className="flex h-fit w-full items-center justify-between border-x-2 border-b-2 rounded-b-2xl px-4 py-2">
      <Link href={Page.HOME} className="flex gap-2 items-center">
        <LogoText />
      </Link>

      <NavigationBar />
    </header>
  );
}

function NavigationBar() {
  const pathname = usePathname();

  return (
    <>
      <DesktopNavigation pathname={pathname} />
      <MobileNavigation pathname={pathname} />
    </>
  );
}

function DesktopNavigation({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu className="hidden md:block mr-4">
      <NavigationMenuList className="gap-4">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                data-active={pathname === link.href}
                className={cn(
                  "font-bold text-sm",
                  "data-[active=true]:border-b-2 data-[active=true]:border-emerald-600"
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
  );
}

function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);

  const closeSheet = React.useCallback(() => setOpen(false), [setOpen]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="items-end pt-20 px-6 bg-background/95 backdrop-blur-sm"
      >
        <SheetTitle className="sr-only">Navigatino Menu</SheetTitle>
        <NavigationMenu className="justify-end">
          <NavigationMenuList className="flex-col items-end gap-4">
            {navLinks.map((link) => (
              <NavigationMenuLink key={link.href} asChild>
                <Link
                  href={link.href}
                  data-active={pathname === link.href}
                  onClick={closeSheet}
                  className={cn(
                    "w-full font-bold text-sm text-end",
                    "data-[active=true]:border-r-2 data-[active=true]:border-emerald-600"
                  )}
                  prefetch={false}
                >
                  {link.text.toUpperCase()}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
