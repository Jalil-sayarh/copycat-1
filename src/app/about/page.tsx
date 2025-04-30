import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6 max-w-md">
              A collective of visionaries shaping tomorrow, where creativity and innovation intersect. Our studio is built on the belief that bold ideas and meticulous execution drive meaningful design.
            </h1>
            <p className="text-muted-foreground mb-8">
              We craft innovative design strategies for forward thinking brands, combining aesthetics with purpose to create impactful solutions.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://ext.same-assets.com/1470556363/1575223815.jpeg"
              alt="Our vision"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif mb-4">Brand Strategy</h3>
              <p className="text-muted-foreground">
                We craft strategic foundations that define your brand's identity, positioning, and messaging. Our approach ensures that every element aligns with your vision and resonates with your audience, creating a strong and lasting impact in your industry. Through research and insight-driven strategies, we help brands establish their voice, differentiate themselves from competitors, and create meaningful connections with their customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Visual Design</h3>
              <p className="text-muted-foreground">
                Our design process transforms ideas into striking visuals that capture your brand's essence. From logo creation to comprehensive brand systems, we blend creativity with strategy to deliver a cohesive and visually compelling identity. Every design decision is made with intention, ensuring that your brand not only looks exceptional but also tells a compelling story that engages and inspires.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Launch</h3>
              <p className="text-muted-foreground">
                We guide brands from concept to execution, ensuring a seamless transition from strategy to market. Whether it's a full-scale brand rollout or a product launch, we provide the tools and assets needed to establish a strong presence and drive engagement. Our expertise in digital and physical touchpoints ensures that your brand makes an impactful debut, creating momentum and lasting visibility in your industry.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">Team</h2>
          <p className="text-xl mb-8 max-w-xl">
            A team of creatives driven by curiosity and craftsmanship, we collaborate to push boundaries and shape meaningful design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-1">Elliot Hartman</h3>
              <p className="text-muted-foreground text-sm">Creative Director</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-medium mb-1">Liam Fontaine</h3>
              <p className="text-muted-foreground text-sm">UI/UX Designer</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-medium mb-1">Isla Novak</h3>
              <p className="text-muted-foreground text-sm">Visual Designer</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif">Insights</h2>

            <div className="border p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Related Case study</span>
                  <h3 className="text-lg font-medium">Saint Laurent</h3>
                </div>
                <span className="text-xs text-muted-foreground">Website</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Blending heritage with modernity, we created a digital experience that captures Saint Laurent's timeless elegance. The result is an intuitive and immersive journey that reflects the brand's bold sophistication.
              </p>
              <Link href="/works/grid-view/saint-laurent" className="text-sm font-medium hover:underline">View project</Link>
            </div>

            <div className="border p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Related Case study</span>
                  <h3 className="text-lg font-medium">All Natural</h3>
                </div>
                <span className="text-xs text-muted-foreground">Website</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                We transformed relaxation into a visual and tactile experience, designing a product that embodies luxury, tranquility, and innovation. Every detail enhances the sensory connection between design and function.
              </p>
              <Link href="/works/grid-view/all-natural" className="text-sm font-medium hover:underline">View project</Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-[46px]" /> {/* Spacing to align with the title on the left */}

            <div className="border p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Related Case study</span>
                  <h3 className="text-lg font-medium">Sennheiser</h3>
                </div>
                <span className="text-xs text-muted-foreground">Website</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Rooted in precision audio, our approach to Sennheiser's digital presence bridges technical excellence with emotional resonance. The result is an interactive platform that engages a new generation of listeners.
              </p>
              <Link href="/works/grid-view/sennheiser" className="text-sm font-medium hover:underline">View project</Link>
            </div>

            <div className="border p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Related Case study</span>
                  <h3 className="text-lg font-medium">Terra Luxe</h3>
                </div>
                <span className="text-xs text-muted-foreground">Website</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                A brand that epitomizes refined living deserves a presence that mirrors its sophistication. We designed a website that blends aesthetics with functionality, capturing Terra Luxe's attention to detail and excellence.
              </p>
              <Link href="/works/grid-view/terra-luxe" className="text-sm font-medium hover:underline">View project</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="font-medium mb-4">Clients</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <span>Nike</span>
              <span>Electronic Arts</span>
              <span>Zapier</span>
              <span>Brownkind</span>
              <span>Tonal</span>
              <span>Mountain Hardwear</span>
              <span>Appfire</span>
              <span>TAE</span>
              <span>System22</span>
              <span>Article One</span>
              <span>Better World</span>
              <span>Gucci</span>
              <span>Salt & Stone</span>
              <span>Audi</span>
              <span>Lululemon</span>
              <span>Puma</span>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Industries</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <span>Travel</span>
              <span>Sports & Fitness</span>
              <span>Media & Entertainment</span>
              <span>Beauty</span>
              <span>Gaming</span>
              <span>Food & Beverage</span>
              <span>Cyber</span>
              <span>Energy</span>
              <span>Banking & Finance</span>
              <span>Health & Wellness</span>
              <span>Apparel & Lifestyle</span>
              <span>Home Goods</span>
              <span>Emerging Technology</span>
              <span>Hospitality</span>
              <span>Automotive</span>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Awards</h3>
            <div className="space-y-3 text-sm">
              <div>
                <Link href="https://www.awwwards.com/" className="block hover:underline">SOTD Awwwards</Link>
                <span className="text-muted-foreground">Halo+ Mar 25</span>
              </div>
              <div>
                <Link href="https://www.awwwards.com/" className="block hover:underline">UI CSSDA</Link>
                <span className="text-muted-foreground">Spectrum Feb 25</span>
              </div>
              <div>
                <Link href="https://www.awwwards.com/" className="block hover:underline">SOTD Awwwards</Link>
                <span className="text-muted-foreground">Jeep Jan 25</span>
              </div>
              <div>
                <Link href="https://www.awwwards.com/" className="block hover:underline">DEV FWA</Link>
                <span className="text-muted-foreground">Elevate June 24</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-muted/50 p-8 relative">
            <blockquote className="text-xl font-serif mb-4">
              The team's ability to transform ideas into stunning visuals is unmatched on many levels. Every project feels like a work of art with purpose.
            </blockquote>
            <cite className="text-muted-foreground not-italic">
              Liam Carter, Creative Director
            </cite>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src="https://ext.same-assets.com/1470556363/3399593149.jpeg"
                alt="Team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://ext.same-assets.com/1470556363/3040044663.jpeg"
                alt="Design process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">What we do</h2>
          <p className="text-lg mb-8 max-w-xl">
            We craft experiences and identities that resonate deeply, forging connections between brands and the people who embrace them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Brand Strategy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Brand Audit</li>
                <li>Research</li>
                <li>Audience</li>
                <li>Competitive Analysis</li>
                <li>Positioning</li>
                <li>Tone of Voice</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Brand System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Naming</li>
                <li>Messaging Toolkit</li>
                <li>Logo</li>
                <li>Photography Style</li>
                <li>Icon & Illustration</li>
                <li>Motion</li>
                <li>Brand Standards</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Brand Experience</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Signage / Wayfinding</li>
                <li>Brand Campaign</li>
                <li>Website</li>
                <li>Business Collateral</li>
                <li>Packaging</li>
                <li>Print</li>
                <li>Copywriting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            We're always on the lookout for creatives who are ready to push boundaries.
          </h2>
          <Link
            href="/careers"
            className="inline-flex items-center space-x-2 text-base font-medium hover:underline"
          >
            <span>Careers</span>
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

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">FAQs</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Why is brand important for my business?</h3>
              <p className="text-muted-foreground">
                Branding is essential because it defines your business's identity, builds trust with your audience, and sets you apart from competitors. A strong brand creates emotional connections, increases recognition, and enhances customer loyalty, ultimately driving sales and growth.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">How long does it take to complete a project?</h3>
              <p className="text-muted-foreground">
                The timeline depends on the scope of the project. Typically, branding projects take around four to eight weeks, while website development and design projects can range from six to twelve weeks. We tailor our process to meet your specific needs while ensuring high-quality results.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">What industries do you specialize in?</h3>
              <p className="text-muted-foreground">
                We specialize in working with startups, e-commerce brands, tech companies, lifestyle brands, and creative entrepreneurs. However, our expertise extends to various industries, and we welcome businesses of all types looking to elevate their brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
