import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Footer } from "@/components/Footer";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
