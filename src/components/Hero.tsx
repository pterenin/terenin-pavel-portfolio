
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Globe, FileText, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="w-80 h-96 rounded-3xl overflow-hidden portrait-container relative bg-white shadow-2xl">
                <img 
                  src="https://pavelterenin.com/blog/wp-content/uploads/2025/05/IMG_8108.png" 
                  alt="Pavel Terenin" 
                  className="w-full h-full object-cover portrait transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left order-1 lg:order-2">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Pavel Terenin
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Senior/Staff
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Software Engineer</span>
            </h1>

            <p className="text-lg text-gray-600 mb-12 max-w-lg leading-relaxed">
              Delivering scalable user-centric web and mobile applications with 
              <span className="font-semibold text-blue-600"> 14+ years</span> of front-end and full-stack experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                onClick={scrollToContact} 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-medium text-lg h-auto group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToPortfolio} 
                className="border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:bg-blue-50/50 px-8 py-4 rounded-2xl font-medium text-lg h-auto backdrop-blur-sm bg-white/50 hover:shadow-lg transition-all duration-300"
              >
                My Works
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://docs.google.com/document/d/1IL9JJWODBToRulJeuLTmFd15fyqAUJbSiakI9l-kiH8/edit?usp=sharing', '_blank')}
                className="border-2 border-gray-300 hover:border-purple-300 text-gray-700 hover:bg-purple-50/50 px-8 py-4 rounded-2xl font-medium text-lg h-auto flex items-center gap-2 backdrop-blur-sm bg-white/50 hover:shadow-lg transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                View CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500 font-medium">Follow me on:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/pavelterenin" 
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-200 border-2 border-white/50 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
                <a 
                  href="mailto:pavel.terenin@gmail.com" 
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-200 border-2 border-white/50 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="https://pavelterenin.com/blog" 
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-200 border-2 border-white/50 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">14+</div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">20+</div>
            <div className="text-gray-600 font-medium">Technologies Mastered</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-gray-600 font-medium">Fortune 500 Clients</div>
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-gray-900 mb-8">Meet my recent clients</h3>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[{
            name: "Lululemon",
            image: "http://pavelterenin.com/blog/wp-content/uploads/2025/05/Lululemon_Athletica_logo.svg_-300x300.png"
          }, {
            name: "Electronic Arts",
            image: "http://pavelterenin.com/blog/wp-content/uploads/2025/05/Electronic_Arts-Logo.wine_-300x200.png"
          }, {
            name: "Realtor.com",
            image: "http://pavelterenin.com/blog/wp-content/uploads/2025/05/realtor-com-logo-300-150x150.png"
          }, {
            name: "1Password",
            image: "http://pavelterenin.com/blog/wp-content/uploads/2025/05/images-150x150.png"
          }, {
            name: "Juniper Square",
            image: "http://pavelterenin.com/blog/wp-content/uploads/2025/05/1_bEhYs4ufdL56tExesmt-8Q@2x-150x150.png"
          }].map((client, index) => <div key={index} className="text-center group">
                {client.image ? <div className="w-20 h-16 mx-auto mb-2 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" />
                  </div> : <div className="w-20 h-16 bg-gray-200 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs text-gray-600 font-medium text-center px-1">
                      {client.name}
                    </span>
                  </div>}
                <span className="text-xs text-gray-600 font-medium">{client.name}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};
