import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";

// Project data
const projects = [
  {
    id: "golden-hour",
    title: "Golden Hour",
    description: "A timeless toast to refined elegance.",
    image: "https://ext.same-assets.com/4277119163/810614396.jpeg",
    href: "/works/grid-view/golden-hour",
  },
  {
    id: "jeep",
    title: "Jeep",
    description: "Power, precision, and adventure redefined.",
    image: "https://ext.same-assets.com/4277119163/3191789881.jpeg",
    href: "/works/grid-view/jeep",
  },
  {
    id: "vision-one",
    title: "Vision One",
    description: "Shaping visions, defining bold new moments.",
    image: "https://ext.same-assets.com/4277119163/2631289170.jpeg",
    href: "/works/grid-view/vision-one",
  },
  {
    id: "saint-laurent",
    title: "Saint Laurent",
    description: "Capturing movement, light, and raw emotion.",
    image: "https://ext.same-assets.com/4277119163/906680017.jpeg",
    href: "/works/grid-view/saint-laurent",
  },
  {
    id: "sennheiser",
    title: "Sennheiser",
    description: "Immersive sound meets minimalist design.",
    image: "https://ext.same-assets.com/4277119163/2516950274.jpeg",
    href: "/works/grid-view/sennheiser",
  },
  {
    id: "all-natural",
    title: "All Natural",
    description: "The next wave of pure natural skincare",
    image: "https://ext.same-assets.com/4277119163/1538793871.jpeg",
    href: "/works/grid-view/all-natural",
  },
  {
    id: "minimal-brew",
    title: "Minimal Brew",
    description: "Simplicity, craftsmanship, and elevated taste.",
    image: "https://ext.same-assets.com/4277119163/3732023736.jpeg",
    href: "/works/grid-view/minimal-brew",
  },
  {
    id: "perfect-pour",
    title: "The Perfect Pour",
    description: "A toast to great detail, taste and ambiance.",
    image: "https://ext.same-assets.com/4277119163/2767826440.jpeg",
    href: "/works/grid-view/the-perfect-pour",
  },
  {
    id: "polestar",
    title: "Polestar",
    description: "Innovation, precision, and sleek design.",
    image: "https://ext.same-assets.com/4277119163/1538793871.jpeg",
    href: "/works/grid-view/polestar",
  },
  {
    id: "noir-vision",
    title: "Noir Vision",
    description: "Bold contrast, striking details, effortless style.",
    image: "https://ext.same-assets.com/4277119163/1471544039.jpeg",
    href: "/works/grid-view/noir-vision",
  },
  {
    id: "poolside",
    title: "Poolside Serenity",
    description: "Sun-drenched moments, effortless luxury.",
    image: "https://ext.same-assets.com/4277119163/4035773636.jpeg",
    href: "/works/grid-view/poolside-serenity",
  },
  {
    id: "terra-luxe",
    title: "Terra Luxe",
    description: "Where architecture and nature meet elegance.",
    image: "https://ext.same-assets.com/4277119163/1711051928.jpeg",
    href: "/works/grid-view/terra-luxe",
  },
];

export default function WorksGridView() {
  return (
    <div className="container-custom pt-32 pb-16">
      <div className="flex items-center justify-between mb-16">
        <h1 className="text-3xl md:text-4xl font-serif">All Projects ({projects.length})</h1>
        <Link href="/works/list-view" className="text-sm">
          List view
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}
