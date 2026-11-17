import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Writing } from "@/components/Writing";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";

const Index = () => {
  useEffect(() => {
    const section = document.getElementById(window.location.hash.slice(1));
    if (section) section.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(120,119,198,0.03)_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(120,119,198,0.03)_0%,_transparent_50%),radial-gradient(circle_at_40%_80%,_rgba(120,119,198,0.03)_0%,_transparent_50%)] pointer-events-none"></div>

      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
