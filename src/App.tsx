import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { AISystems } from "@/components/sections/AISystems";
import { Experience } from "@/components/sections/Experience";
import { Labs } from "@/components/sections/Labs";
import { Writing } from "@/components/sections/Writing";
import { Technology } from "@/components/sections/Technology";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { SectionRail } from "@/components/sections/SectionRail";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <SectionRail />
      <main>
        <Hero />
        <AISystems />
        <Experience />
        <Labs />
        <Writing />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
