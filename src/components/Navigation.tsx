
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./styles.css";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Projects",
      href: "#portfolio"
    },
    {
      name: "Journey",
      href: "#about"
    },
    {
      name: "Service",
      href: "#services"
    },
    {
      name: "My Blog",
      href: "https://pavelterenin.com/blog",
      external: true
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.external) {
      window.open(item.href, '_blank');
      setIsMenuOpen(false);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="site-branding">
              <div className="site-brand-inner no-logo-img has-title has-desc">
                <p className="site-title">
                  <a className="site-text-logo hover:text-blue-600 transition-colors" href="https://pavelterenin.com/" rel="home">Pavel Terenin</a>
                </p>
                <p className="site-description">Web Development</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Profile Image */}
          <div className="hidden md:block">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 ring-2 ring-white/50 shadow-lg hover:ring-blue-200 transition-all duration-300 hover:scale-110">
              <img
                src="https://pavelterenin.com/blog/wp-content/uploads/2017/01/portrait.jpeg"
                alt="Pavel Terenin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm border-t border-white/20 rounded-b-2xl shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 block px-4 py-3 font-medium w-full text-left transition-all duration-300 rounded-xl"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
