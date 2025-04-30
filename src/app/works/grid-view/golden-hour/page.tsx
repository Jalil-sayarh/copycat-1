import Image from "next/image";
import Link from "next/link";

export default function GoldenHour() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="text-sm text-muted-foreground block mb-4">Project</span>
            <h1 className="text-3xl md:text-5xl font-serif mb-6">Golden Hour</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A timeless toast to refined elegance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-sm font-medium mb-2">Services</h2>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Art Direction</li>
                  <li>Photography</li>
                  <li>Brand Strategy</li>
                  <li>Web Design</li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-medium mb-2">Year</h2>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
            </div>

            <Link
              href="https://www.example.com"
              className="inline-flex items-center space-x-2 text-base font-medium px-4 py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <span>Visit Website</span>
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

          <div className="relative aspect-square">
            <Image
              src="https://ext.same-assets.com/4277119163/810614396.jpeg"
              alt="Golden Hour"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-serif mb-6">About the Project</h2>
          <p className="text-lg mb-4">
            Golden Hour embodies the perfect blend of sophistication and craftsmanship. Our team was tasked with creating a brand that captured the essence of premium cocktail culture while maintaining an approachable elegance that resonates with modern connoisseurs.
          </p>
          <p className="text-lg mb-4">
            The photography direction centered around the rich, warm tones of sunset - the "golden hour" - creating a visual language that evokes feelings of refined comfort and indulgence. Every aspect of the brand experience was carefully considered, from the glassware selection to the lighting and composition.
          </p>
          <p className="text-lg">
            The result is a visual identity that stands apart in a crowded market, offering an instantly recognizable aesthetic that communicates quality and attention to detail without saying a word.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-video">
            <Image
              src="https://ext.same-assets.com/4277119163/2767826440.jpeg"
              alt="Golden Hour product showcase"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://ext.same-assets.com/1470556363/732950823.jpeg"
              alt="Golden Hour ambiance"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] mb-16">
          <Image
            src="https://ext.same-assets.com/2822192013/810614396.jpeg"
            alt="Golden Hour full spread"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-serif mb-6">The Challenge</h2>
          <p className="text-lg mb-4">
            The cocktail industry is filled with both traditional classics and trendy newcomers. Our challenge was to create a brand that respected tradition while establishing a distinctive contemporary presence that would appeal to both seasoned enthusiasts and newcomers alike.
          </p>
          <p className="text-lg">
            Additionally, we needed to develop a digital presence that maintained the sophistication of the physical experience, translating the warmth and tactile quality of the brand into an online environment without losing its essence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-serif mb-6">The Solution</h2>
            <p className="text-lg mb-4">
              We developed a comprehensive brand strategy that emphasized craftsmanship, quality ingredients, and timeless moments. The visual language drew inspiration from the rich amber tones of fine spirits, the reflective qualities of premium glassware, and the warm, inviting atmosphere of sunset.
            </p>
            <p className="text-lg">
              The website design utilized subtle animations, careful typography choices, and immersive photography to create an online experience that felt as refined as visiting a high-end cocktail bar. Each interaction was designed to reinforce the brand's commitment to quality and attention to detail.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://ext.same-assets.com/1988575860/1599770891.jpeg"
              alt="Golden Hour brand elements"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/works/grid-view" className="text-sm hover:underline">
            Back to Projects
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/works/grid-view/jeep" className="text-sm hover:underline flex items-center">
              <span>Next Project</span>
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
        </div>
      </div>
    </div>
  );
}
