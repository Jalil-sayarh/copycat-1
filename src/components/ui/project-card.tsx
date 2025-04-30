"use client";

import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function ProjectCard({ title, description, image, href, className }: ProjectCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className="overflow-hidden">
        <AspectRatio ratio={4/3} className="bg-muted relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-muted" />
          )}
        </AspectRatio>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-serif mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function FeaturedProjectCard({
  title,
  description,
  image,
  href,
  className,
}: FeaturedProjectCardProps) {
  return (
    <Link href={href} className={cn("group block w-full h-full", className)}>
      <AspectRatio ratio={4/3} className="relative w-full h-full bg-muted overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-muted" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-2">{title}</h3>
          <p className="text-base text-white/80">{description}</p>
        </div>
      </AspectRatio>
    </Link>
  );
}
