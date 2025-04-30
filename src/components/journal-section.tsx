"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

interface JournalSectionProps {
  className?: string;
}

const journalEntries = [
  {
    id: "minimalism",
    title: "The Art of Minimalism: Creating Impactful Designs with Less",
    category: "Design",
    image: "https://ext.same-assets.com/1470556363/2181098153.jpeg",
    href: "/blog/the-art-of-minimalism-creating-impactful-designs-with-less",
  },
  {
    id: "art-direction",
    title: "Art Direction from scratch: Creating a unique art direction for a brand",
    category: "Art Direction",
    image: "https://ext.same-assets.com/1470556363/3040044663.jpeg",
    href: "/blog/art-direction-from-scratch-creating-a-unique-art-direction-for-a-brand",
  },
  {
    id: "sustainable",
    title: "We launched a new project redefining sustainable branding",
    category: "Design",
    image: "https://ext.same-assets.com/2822192013/1144844909.jpeg",
    href: "/blog/we-launched-a-new-project-redefining-sustainable-branding",
  },
];

export function JournalSection({ className }: JournalSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-serif">From the Journal</h2>
          <Link
            href="/blog"
            className="text-sm font-medium flex items-center hover:underline"
          >
            <span>Read All Articles</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalEntries.map((entry) => (
            <Link key={entry.id} href={entry.href} className="group">
              <div className="overflow-hidden">
                <AspectRatio ratio={4/3} className="bg-muted">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="mt-4">
                <span className="text-sm text-muted-foreground block mb-2">
                  {entry.category}
                </span>
                <h3 className="text-lg font-medium group-hover:underline">
                  {entry.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
