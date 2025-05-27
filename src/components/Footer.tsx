
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pavel Terenin</h3>
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
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:pavel.terenin@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
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
