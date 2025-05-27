
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-lg rotate-45 opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-green-400 rounded-lg rotate-12 opacity-20"></div>
        
        {/* Dotted Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Hello, I'm
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pavel Terenin
              <br />
              <span className="text-yellow-300">Senior/Staff Software Engineer</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Delivering scalable, user-centric web and mobile applications with 13+ years of front-end and full-stack expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold rounded-full">
                Download CV
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-full backdrop-blur-sm"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="https://pavelterenin.com/wp-content/uploads/2017/01/portrait.jpeg" 
                    alt="Pavel Terenin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
