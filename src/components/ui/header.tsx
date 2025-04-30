"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      // Calculate 30% of hero section (assuming hero is 100vh)
      const scrollThreshold = window.innerHeight * 0.3;

      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the page is loaded scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Default styles - used during SSR and before hydration
  const initialHeaderClass = "fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8 lg:px-12 transition-all duration-300";
  const initialTextClass = "text-foreground"; // Default to dark text

  if (!isMounted) {
    // Return a static version for SSR
    return (
      <header className={initialHeaderClass}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl font-serif tracking-tighter ${initialTextClass}`}
          >
            Luca<sup className="text-xs align-super">®</sup>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <span className={`text-sm font-medium relative group ${initialTextClass}`}>WORK</span>
            <span className={`text-sm font-medium relative group ${initialTextClass}`}>ABOUT</span>
            <span className={`text-sm font-medium relative group ${initialTextClass}`}>NEWS</span>
            <span className={`text-sm font-medium relative group ${initialTextClass}`}>CAREERS</span>
          </nav>
          <span
            className={`flex items-center space-x-1 text-sm font-medium px-2 py-1 rounded-md ${initialTextClass}`}
          >
            <span>GET IN TOUCH</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </header>
    );
  }

  // Client-side rendering after hydration
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8 lg:px-12 transition-all duration-300",
        scrolled && "bg-white shadow-sm py-2",
        (!scrolled && isHomePage) && "text-white"
      )}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-xl font-serif tracking-tighter",
            (scrolled || !isHomePage) ? "text-foreground" : "text-white"
          )}
        >
          Luca<sup className="text-xs align-super">®</sup>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            href="/works/grid-view"
            isActive={pathname.includes('/works')}
            lightMode={scrolled || !isHomePage}
          >
            WORK
          </NavLink>
          <NavLink
            href="/about"
            isActive={pathname === '/about'}
            lightMode={scrolled || !isHomePage}
          >
            ABOUT
          </NavLink>
          <NavLink
            href="/blog"
            isActive={pathname === '/blog'}
            lightMode={scrolled || !isHomePage}
          >
            NEWS
          </NavLink>
          <NavLink
            href="/careers"
            isActive={pathname === '/careers'}
            lightMode={scrolled || !isHomePage}
          >
            CAREERS
          </NavLink>
        </nav>
        <Link
          href="/contact"
          className={cn(
            "flex items-center space-x-1 text-sm font-medium px-2 py-1 rounded-md transition-colors",
            (scrolled || !isHomePage)
              ? "text-foreground hover:bg-accent/10"
              : "text-white hover:bg-white/10"
          )}
        >
          <span>GET IN TOUCH</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  isActive: boolean;
  lightMode: boolean;
  children: React.ReactNode;
}

function NavLink({ href, isActive, lightMode, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium relative group",
        lightMode
          ? isActive ? "text-foreground" : "text-muted-foreground"
          : "text-white"
      )}
    >
      <span className="relative">
        {children}
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
            lightMode
              ? "bg-foreground"
              : "bg-white",
            isActive ? "w-full" : "w-0"
          )}
        />
      </span>
    </Link>
  );
}
