import { Mail, Phone, Linkedin } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Pavel Terenin</h3>
            <p className="text-gray-400 leading-relaxed text-lg">Senior/Staff Software Engineer with 14+ years of experience creating exceptional digital experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Services", "Contact"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                <a href="mailto:pavel.terenin@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  pavel.terenin@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                <a href="tel:+16049108101" className="text-gray-400 hover:text-white transition-colors">
                  +1 (604) 910-8101
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                <a href="https://linkedin.com/in/pavelterenin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-lg">
                © {new Date().getFullYear()} Pavel Terenin. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/pavelterenin" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:pavel.terenin@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};