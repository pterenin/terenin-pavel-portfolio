
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Globe, FileText, Download } from "lucide-react";

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
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://pavelterenin.com/blog/wp-content/uploads/2025/05/IMG_8108.png"
        >
          <source src="https://pavelterenin.com/blog/wp-content/uploads/2025/05/Video_for_Web_Portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium mb-8 shadow-sm border border-gray-100">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Senior
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Crafting exceptional digital experiences with 
              <span className="font-semibold text-gray-900"> 14+ years</span> of expertise in 
              modern web technologies and scalable architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg h-auto group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToPortfolio} 
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 rounded-xl font-medium text-lg h-auto transition-all duration-300"
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://docs.google.com/document/d/1IL9JJWODBToRulJeuLTmFd15fyqAUJbSiakI9l-kiH8/edit?usp=sharing', '_blank')}
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 rounded-xl font-medium text-lg h-auto flex items-center gap-2 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500 font-medium">Connect with me:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://linkedin.com/in/pavelterenin" 
                  className="w-12 h-12 bg-white hover:bg-blue-50 hover:border-blue-200 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="text-sm font-bold group-hover:text-blue-600">in</span>
                </a>
                <a 
                  href="mailto:pavel.terenin@gmail.com" 
                  className="w-12 h-12 bg-white hover:bg-blue-50 hover:border-blue-200 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <Mail className="w-5 h-5 group-hover:text-blue-600" />
                </a>
                <a 
                  href="https://pavelterenin.com/blog" 
                  className="w-12 h-12 bg-white hover:bg-blue-50 hover:border-blue-200 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 group-hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden portrait-container shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
                <img 
                  src="https://pavelterenin.com/blog/wp-content/uploads/2025/05/IMG_8108.png" 
                  alt="Pavel Terenin" 
                  className="w-full h-full object-cover portrait" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">14+</div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-gray-600 font-medium">Technologies Mastered</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-gray-600 font-medium">Fortune 500 Clients</div>
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">Recent collaborations with top-tier companies</p>
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
            }].map((client, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-16 mx-auto mb-3 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/50 group-hover:shadow-md transition-all duration-300">
                  <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <span className="text-xs text-gray-600 font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
