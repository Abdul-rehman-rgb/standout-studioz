import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Team from "./components/Team";
import HeroParallaxSection from "./components/HeroParallaxSection";
import AppleCardsShowcase from "./components/AppleCardsShowcase";

export default function Home() {
  return (
    <main className="bg-white text-[#111418] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <Team />
      <AppleCardsShowcase />

      <div className="bg-[#111418]">
      <HeroParallaxSection />

      </div>
      <Footer />
    </main>
  );
}
