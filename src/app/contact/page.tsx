import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-12">
            Let's connect and bring your ideas to life
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm uppercase tracking-wider mb-4">CONTACT</h2>
              <Link href="tel:+4523456789" className="block hover:underline mb-1">
                +45 123 456 789
              </Link>
              <Link href="mailto:hello@lucastudio.com" className="block hover:underline">
                hello@lucastudio.com
              </Link>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wider mb-4">SOCIALS</h2>
              <Link href="https://www.instagram.com/" className="block hover:underline mb-1">
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/" className="block hover:underline">
                LinkedIn
              </Link>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wider mb-4">ADDRESS</h2>
              <Link href="https://www.google.com/maps" className="block hover:underline">
                12 Nyhavn Street<br />
                Copenhagen, Denmark, 1051
              </Link>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wider mb-4">STUDIO HOURS</h2>
              <p className="mb-1">
                Monday to Friday: 9:00 AM - 6:00 PM
              </p>
              <p>
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video">
          <Image
            src="https://ext.same-assets.com/1988575860/1599770891.jpeg"
            alt="Contact us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
