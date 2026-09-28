import { Locations } from "@/components/Locations";
import { Hero } from "@/components/Hero";
import { Lookbook } from "@/components/Lookbook";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Lookbook />
      <Locations />
      <About />
      <Footer />
    </main>
  );
}