"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import { Separator } from "./separator";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4">
            Interested in working with us?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-base md:text-lg font-medium hover:underline"
          >
            <span>Get in touch</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5L13 10L7 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider">Sitemap</h4>
            <nav className="space-y-2">
              <FooterLink href="/works/grid-view">Work</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/blog">News</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider">Location</h4>
            <p className="font-medium">London, UK</p>
            <p className="text-sm text-secondary-foreground/70">
              {new Date().toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
              })}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider">Socials</h4>
            <nav className="space-y-2">
              <FooterLink href="https://www.instagram.com/">Instagram</FooterLink>
              <FooterLink href="https://twitter.com/">X.com</FooterLink>
              <FooterLink href="https://www.threads.net/">Threads</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider">Newsletter</h4>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 h-9 bg-transparent border-b border-secondary-foreground/30 focus:border-secondary-foreground outline-none text-sm"
              />
              <Button size="sm" variant="outline" className="h-9 px-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 5L13 10L7 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20 my-8" />

        <div className="flex items-center justify-between text-sm">
          <p>Luca {new Date().getFullYear()}</p>
          <div className="flex items-center space-x-4">
            <Link href="/legal" className="text-secondary-foreground/70 hover:text-secondary-foreground">
              Terms & Conditions
            </Link>
            <Link href="https://ena.supply/" className="text-secondary-foreground/70 hover:text-secondary-foreground">
              Made by ena
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="block text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
    >
      {children}
    </Link>
  );
}
