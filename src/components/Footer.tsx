
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-600 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-purple-600 rounded-lg rotate-45 opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white">Pavel</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Senior/Staff Software Engineer with 13+ years of experience creating 
              exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Portfolio", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-white font-medium">Email:</span><br />
                pavel.terenin@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Phone:</span><br />
                +1 (604) 910-8101
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Pavel Terenin. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/in/pavelterenin" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:pavel.terenin@gmail.com" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
