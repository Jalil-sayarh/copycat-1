"use client";

import Link from "next/link";
import { FeaturedProjectCard } from "./ui/project-card";
import { cn } from "@/lib/utils";

interface FeaturedProjectsProps {
  className?: string;
}

const featuredProjects = [
  {
    id: "jeep",
    title: "Jeep",
    description: "Power, precision, and adventure redefined.",
    image: "https://ext.same-assets.com/2822192013/642971012.jpeg",
    href: "/works/grid-view/jeep",
  },
  {
    id: "all-natural",
    title: "All Natural",
    description: "The next wave of pure natural skincare",
    image: "https://ext.same-assets.com/4277119163/1538793871.jpeg",
    href: "/works/grid-view/all-natural",
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    description: "A timeless toast to refined elegance.",
    image: "https://ext.same-assets.com/2822192013/810614396.jpeg",
    href: "/works/grid-view/golden-hour",
  },
  {
    id: "sennheiser",
    title: "Sennheiser",
    description: "Immersive sound meets minimalist design.",
    image: "https://ext.same-assets.com/2822192013/4224748483.jpeg",
    href: "/works/grid-view/sennheiser",
  },
];

export function FeaturedProjects({ className }: FeaturedProjectsProps) {
  return (
    <section id="projects" className={cn("py-16 md:py-24", className)}>
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-serif">Featured Projects</h2>
          <Link
            href="/works/grid-view"
            className="text-sm font-medium flex items-center hover:underline"
          >
            <span>View All Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeaturedProjectCard
            title={featuredProjects[0].title}
            description={featuredProjects[0].description}
            image={featuredProjects[0].image}
            href={featuredProjects[0].href}
            size="large"
          />
          <div className="grid grid-cols-1 gap-8">
            <FeaturedProjectCard
              title={featuredProjects[1].title}
              description={featuredProjects[1].description}
              image={featuredProjects[1].image}
              href={featuredProjects[1].href}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeaturedProjectCard
                title={featuredProjects[2].title}
                description={featuredProjects[2].description}
                image={featuredProjects[2].image}
                href={featuredProjects[2].href}
              />
              <FeaturedProjectCard
                title={featuredProjects[3].title}
                description={featuredProjects[3].description}
                image={featuredProjects[3].image}
                href={featuredProjects[3].href}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
