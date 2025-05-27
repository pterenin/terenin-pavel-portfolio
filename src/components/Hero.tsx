
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-xs font-medium">Hey, It's Art! 🎨</div>
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
              An Interactive
              <br />
              <span className="text-gray-700">Designer</span>
            </h1>

            <p className="text-lg text-gray-600 mb-12 max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, 
              non nisl tincidunt ut elementum turpis.
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
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">98+</div>
            <div className="text-gray-600 font-medium">Projects Experience</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">21+</div>
            <div className="text-gray-600 font-medium">Features & Awards</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">97%</div>
            <div className="text-gray-600 font-medium">Client Rating</div>
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-gray-900 mb-8">Meet my recent clients</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {[
              { name: "Google", color: "bg-red-500" },
              { name: "Warner Bros", color: "bg-gray-800" },
              { name: "Mailchimp", color: "bg-yellow-400" },
              { name: "Adobe", color: "bg-red-600" },
              { name: "Upwork", color: "bg-green-500" },
              { name: "Creative Cloud", color: "bg-blue-500" },
              { name: "Woocommerce", color: "bg-purple-600" },
              { name: "Canva", color: "bg-blue-400" }
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${client.color} rounded-xl mx-auto mb-2`}></div>
                <span className="text-xs text-gray-600 font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
