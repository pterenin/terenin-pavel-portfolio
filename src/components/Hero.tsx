
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

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
    <section id="home" className="min-h-screen bg-white relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-8">
                Pavel Terenin
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Senior/Staff Software Engineer
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
              Delivering scalable, user-centric web and mobile applications with 13+ years of 
              front-end and full-stack expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                onClick={scrollToContact}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-medium text-lg h-auto group"
              >
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToPortfolio}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-medium text-lg h-auto"
              >
                View Portfolio
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-8">
              <span className="text-sm text-gray-500 font-medium">Connect with me:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/pavelterenin" 
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-2xl flex items-center justify-center text-gray-700 transition-all duration-300 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in
                </a>
                <a 
                  href="mailto:pavel.terenin@gmail.com" 
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-2xl flex items-center justify-center text-gray-700 transition-all duration-300 font-semibold"
                >
                  @
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-3xl overflow-hidden bg-white shadow-xl">
                <img 
                  src="https://pavelterenin.com/wp-content/uploads/2017/01/portrait.jpeg" 
                  alt="Pavel Terenin"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-3xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-gray-900">13+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-3xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600 font-medium">Projects & Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Trusted by leading companies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {["Google", "Warner Bros", "Mailchimp", "Adobe", "Upwork", "Creative Cloud", "Woocommerce", "Canva"].map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-3"></div>
                <span className="text-sm text-gray-600 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
