"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const images = [
  {
    id: "img1",
    src: "https://ext.same-assets.com/2822192013/3732023736.jpeg",
    alt: "Featured project 1"
  },
  {
    id: "img2",
    src: "https://ext.same-assets.com/2822192013/642971012.jpeg",
    alt: "Featured project 2"
  },
  {
    id: "img3",
    src: "https://ext.same-assets.com/2822192013/4224748483.jpeg",
    alt: "Featured project 3"
  },
  {
    id: "img4",
    src: "https://ext.same-assets.com/2822192013/810614396.jpeg",
    alt: "Featured project 4"
  },
];

export function Hero({ className }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Change images every 2 seconds
    if (!animationComplete) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          // When we've gone through all images, stop the sequence
          if (nextIndex === 0) {
            clearInterval(interval);
            // Trigger the expansion animation
            setTimeout(() => {
              setAnimationComplete(true);
              // After expansion, show the content
              setTimeout(() => {
                setShowContent(true);
              }, 500);
            }, 300);
          }
          return nextIndex;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [animationComplete]);

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center", className)}>
      {/* Image sequence in the center */}
      {!animationComplete && (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "absolute inset-0 transition-all duration-700",
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Background image that expands */}
      {animationComplete && (
        <div className="absolute inset-0 z-0">
          <Image
            src={images[images.length - 1].src}
            alt={images[images.length - 1].alt}
            fill
            priority
            className="object-cover animate-zoom-in"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content that fades in after animation */}
      <div
        className={cn(
          "relative z-10 text-center px-4",
          showContent ? "opacity-100 transform translate-y-0 transition-all duration-1000" : "opacity-0 transform translate-y-8"
        )}
      >
        {showContent && (
          <>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white mb-6 max-w-4xl mx-auto">
              Redefining creativity for the future with flawless execution.
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/works/grid-view"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <span className="mr-2">View Projects</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              <Link
                href="#projects"
                className="inline-flex items-center justify-center text-white hover:underline"
              >
                <span>scroll to view more</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
