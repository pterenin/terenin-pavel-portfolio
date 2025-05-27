
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Pavel Terenin. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/pavelterenin" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:pavel.terenin@gmail.com" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
