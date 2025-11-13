import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black overflow-x-hidden max-w-[1390px] mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Footer />
    </main>
  );
}
