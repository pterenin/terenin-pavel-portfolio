
import { Button } from "@/components/ui/button";

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
    <section id="home" className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-left">
            <div className="mb-8">
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-4 block">
                — Introduction
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Pavel
              <br />
              Terenin.
            </h1>

            <div className="w-16 h-1 bg-yellow-400 mb-8"></div>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Senior/Staff Software Engineer and
              <br />
              Developer, based in
              <br />
              Vancouver.
            </h2>

            <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa.
            </p>

            <button 
              onClick={scrollToPortfolio}
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2 group"
            >
              <span className="border-b border-yellow-400 group-hover:border-yellow-300">My story</span>
              <span>→</span>
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://pavelterenin.com/wp-content/uploads/2017/01/portrait.jpeg" 
                  alt="Pavel Terenin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div>
            <span className="text-gray-400 text-sm uppercase tracking-wider mb-4 block">
              — Contact
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              Any Type Of Query
              <br />
              & Discussion.
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium.
            </p>
            <button 
              onClick={scrollToContact}
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2 group"
            >
              <span className="border-b border-yellow-400 group-hover:border-yellow-300">pavel.terenin@gmail.com</span>
              <span>→</span>
            </button>
          </div>

          {/* Quote Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              You can't use up creativity,
              <br />
              the more you use, more you have
              <br />
              in your significant mind.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">13+</div>
            <div className="text-gray-400 text-sm">
              Years of
              <br />
              Experience.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">
              Satisfied
              <br />
              Clients.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
            <div className="text-gray-400 text-sm">
              Projects
              <br />
              Completed.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">
              Support
              <br />
              Available.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
