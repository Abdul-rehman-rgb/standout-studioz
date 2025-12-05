"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const element = document.querySelector(targetId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
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
