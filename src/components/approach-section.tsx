"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ApproachSectionProps {
  className?: string;
}

const approaches = [
  {
    id: "01",
    title: "Strategy",
    description: "Where insight meets execution. We develop data-driven strategies that align with your vision and drive measurable success. Every decision is guided by research and market intelligence, ensuring sustainable growth. With a holistic approach, we turn challenges from opportunities to results."
  },
  {
    id: "02",
    title: "Design",
    description: "Transforming ideas into visual experiences that captivate and resonate. Our design philosophy balances aesthetics with functionality, creating interfaces that users intuitively understand and enjoy. We craft each element with precision, ensuring your brand's unique voice shines through every pixel."
  },
  {
    id: "03",
    title: "Development",
    description: "Bringing designs to life with clean, efficient code. Our development process emphasizes performance, security, and scalability. We build flexible solutions that adapt to changing needs, employing best practices that ensure your digital products remain cutting-edge and future-proof."
  }
];

export function ApproachSection({ className }: ApproachSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={cn("py-16 md:py-24 bg-muted/50", className)}>
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Approach</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 flex items-center">
            <div className="space-y-2">
              <div className="flex items-baseline space-x-6">
                {approaches.map((approach, index) => (
                  <button
                    key={approach.id}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "text-6xl md:text-8xl font-serif transition-all duration-300 focus:outline-none relative",
                      activeStep === index
                        ? "text-foreground scale-100 opacity-100"
                        : "text-muted-foreground scale-90 opacity-40"
                    )}
                    aria-label={`View ${approach.title} approach`}
                  >
                    {approach.id}
                    {activeStep === index && (
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-foreground" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 lg:p-8 bg-background">
              <h3 className="text-xl md:text-2xl mb-4 font-serif">{approaches[activeStep].title}</h3>
              <p className="text-muted-foreground mb-6">
                {approaches[activeStep].description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-primary/10 p-8 lg:p-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-6 max-w-3xl">
              Where bold concepts meet timeless execution, creating designs that inspire and endure.
            </h3>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-base font-medium hover:underline"
            >
              <span>About us</span>
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
        </div>
      </div>
    </section>
  );
}
