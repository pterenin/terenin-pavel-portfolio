
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(120,119,198,0.03)_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(120,119,198,0.03)_0%,_transparent_50%),radial-gradient(circle_at_40%_80%,_rgba(120,119,198,0.03)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
