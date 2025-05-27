
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Globe, FileText } from "lucide-react";

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
    <section id="home" className="min-h-screen bg-gray-50 relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-96 rounded-3xl overflow-hidden bg-white shadow-2xl">
                <img 
                  src="https://pavelterenin.com/wp-content/uploads/2017/01/portrait.jpeg" 
                  alt="Pavel Terenin" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left order-1 lg:order-2">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium mb-8 shadow-sm">
                Pavel Terenin
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Senior/Staff
              <br />
              <span className="text-gray-700">Software Engineer</span>
            </h1>

            <p className="text-lg text-gray-600 mb-12 max-w-lg leading-relaxed">
              Delivering scalable user-centric web and mobile applications with 14+ years of front-end and full-stack experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                onClick={scrollToContact} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium text-lg h-auto group"
              >
                Book a Call
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToPortfolio} 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-medium text-lg h-auto"
              >
                My Works
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://docs.google.com/document/d/1IL9JJWODBToRulJeuLTmFd15fyqAUJbSiakI9l-kiH8/edit?usp=sharing', '_blank')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-medium text-lg h-auto flex items-center gap-2"
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
                  className="w-10 h-10 bg-white hover:bg-blue-50 hover:border-blue-200 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
                <a 
                  href="mailto:pavel.terenin@gmail.com" 
                  className="w-10 h-10 bg-white hover:bg-blue-50 hover:border-blue-200 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="https://pavelterenin.com/" 
                  className="w-10 h-10 bg-white hover:bg-blue-50 hover:border-blue-200 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300"
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
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">14+</div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
            <div className="text-gray-600 font-medium">Technologies Mastered</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Fortune 500 Clients</div>
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-gray-900 mb-8">Meet my recent clients</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[{
            name: "Lululemon",
            image: "http://pavelterenin.com/wp-content/uploads/2025/05/Lululemon_Athletica_logo.svg_-300x300.png"
          }, {
            name: "Electronic Arts",
            image: "http://pavelterenin.com/wp-content/uploads/2025/05/Electronic_Arts-Logo.wine_-300x200.png"
          }, {
            name: "Realtor.com",
            image: "http://pavelterenin.com/wp-content/uploads/2025/05/realtor-com-logo-300-150x150.png"
          }, {
            name: "1Password",
            image: "http://pavelterenin.com/wp-content/uploads/2025/05/images-150x150.png"
          }, {
            name: "Juniper Square",
            image: "http://pavelterenin.com/wp-content/uploads/2025/05/1_bEhYs4ufdL56tExesmt-8Q@2x-150x150.png"
          }].map((client, index) => <div key={index} className="text-center">
                {client.image ? <div className="w-20 h-16 mx-auto mb-2 flex items-center justify-center bg-white rounded-xl p-2 shadow-sm">
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
