import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import HeroParallaxSection from "../components/HeroParallaxSection";

export default function Contact() {
  return (
    <main className="bg-white text-[#111418] overflow-x-hidden">
      <Navbar />
      <ContactSection />
      <div className="bg-[#111418]">
            <HeroParallaxSection />
      
            </div>
      <Footer />
    </main>
  );
}