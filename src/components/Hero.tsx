import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Globe, Download, Pause, Play } from "lucide-react";

const portraitUrl = "/images/pavel-terenin.webp";

const clients = [
  { name: "Lululemon", image: "/images/clients/lululemon.png" },
  { name: "Electronic Arts", image: "/images/clients/ea.png" },
  { name: "Realtor.com", image: "/images/clients/realtor.png" },
  { name: "1Password", image: "/images/clients/1password.png" },
  { name: "Juniper Square", image: "/images/clients/juniper-square.png" },
  { name: "Arc’teryx", image: "/images/clients/arcteryx.png" },
];

export const Hero = () => {
  const [allowMotion, setAllowMotion] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setAllowMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden pt-16"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" aria-hidden="true" style={{ backgroundImage: "url(/images/portfolio-background.webp)" }}>
        {allowMotion && !stopped && (
          <video autoPlay muted loop playsInline poster="/images/portfolio-background.webp"
            src="/media/portfolio-background.mp4" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
      </div>
      {allowMotion && (
        <button type="button" onClick={() => setStopped(!stopped)} aria-label={stopped ? "Play background video" : "Stop background video"}
          className="absolute top-20 right-5 z-20 p-2 rounded-full bg-white/75 text-gray-600 hover:bg-white">
          {stopped ? <Play size={16} /> : <Pause size={16} />}
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:min-h-[80vh]">
          {/* Text Content */}
          <div className="text-left">
            <div className="mb-5 lg:mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium lg:mb-8 shadow-sm border border-gray-100">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 motion-safe:animate-pulse"></span>
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-[clamp(2.15rem,9.5vw,3rem)] md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Senior <span className="whitespace-nowrap">Full-Stack</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              I build retail web platforms, AI agents and developer tools. My work includes passwordless sign-in, Kubernetes capacity planning and code review automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToPortfolio}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg h-auto group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore my work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 text-white" />
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 rounded-xl font-medium text-lg h-auto transition-all duration-300"
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 rounded-xl font-medium text-lg h-auto flex items-center gap-2 transition-all duration-300"
              >
                <a href="/Pavel_CV.pdf"><Download className="w-4 h-4 text-blue-600" /> Resume</a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500 font-medium">
                Connect with me:
              </span>
              <div className="flex space-x-3">
                <a
                  aria-label="LinkedIn"
                  href="https://linkedin.com/in/pavelterenin"
                  className="w-12 h-12 bg-white hover:bg-blue-50 hover:border-blue-200 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm font-bold text-blue-600">in</span>
                </a>
                <a
                  aria-label="Email"
                  href="mailto:pavel.terenin@gmail.com"
                  className="w-12 h-12 bg-white hover:bg-blue-50 hover:border-blue-200 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <Mail className="w-5 h-5 text-red-500" />
                </a>
                <a
                  aria-label="Blog"
                  href="https://pavelterenin.com/blog"
                  className="w-12 h-12 bg-white hover:bg-blue-50 hover:border-blue-200 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 text-green-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative w-80 rounded-full overflow-hidden portrait-container shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
                <img
                  src={portraitUrl}
                  alt="Pavel Terenin"
                  className=" h-full object-cover portrait"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div id="stats" className="scroll-mt-20 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              14+
            </div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-600 font-medium">
              Technologies Mastered
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 font-medium">Fortune 500 Clients</div>
          </div>
        </div>

        {/* Client logos section */}
        <section className="mt-20" id="clients" aria-labelledby="clients-heading">
          <div className="text-center mb-12">
            <h3 id="clients-heading" className="text-xl font-semibold text-gray-900 mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">
              Recent collaborations with top-tier companies
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map(client => (
              <div key={client.name} className="text-center group">
                <div className="w-28 h-20 mx-auto mb-4 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
