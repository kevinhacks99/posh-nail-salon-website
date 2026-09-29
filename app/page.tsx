import { Locations } from "@/components/Locations";
import { Hero } from "@/components/Hero";
import { Lookbook } from "@/components/Lookbook";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(231, 181, 194, 0.45) 0%, rgba(231, 181, 194, 0.18) 18%, transparent 38%)",
        }}
      />

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