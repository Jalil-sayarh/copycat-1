import { Hero } from "@/components/ui/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { ApproachSection } from "@/components/approach-section";
import { JournalSection } from "@/components/journal-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ApproachSection />
      <JournalSection />
    </>
  );
}
