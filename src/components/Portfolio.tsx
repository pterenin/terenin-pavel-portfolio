
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Zap } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Lululemon Login Experience",
      description: "Integrated Okta SSO with passwordless passkeys and biometric authentication for enhanced security and user experience.",
      tech: "TypeScript, Next.js, React, OKTA API",
      image: "https://pavelterenin.com/blog/wp-content/uploads/2025/05/Screenshot-2025-05-29-165348-700x492.png",
      category: "Authentication",
      link: "https://shop.lululemon.com/en-ca/account/login",
      featured: true,
      metrics: "Improved login conversion by 23%"
    },
    {
      title: "EA Technical Health Dashboard",
      description: "Built a comprehensive data-driven dashboard aggregating multiple sources into an intuitive, real-time monitoring interface.",
      tech: "React, Next.js, Node.js, Express.js",
      image: "https://pavelterenin.com/blog/wp-content/uploads/2025/05/Screenshot-2025-05-29-170145-700x383.png",
      category: "Dashboard",
      metrics: "Reduced system monitoring time by 60%"
    },
    {
      title: "Realtor.com Property Details",
      description: "Developed a high-performance listing details page serving millions of users with optimized loading and enhanced UX.",
      tech: "React, Next.js, TypeScript, GraphQL",
      image: "https://pavelterenin.com/blog/wp-content/uploads/2025/05/Screenshot-2025-05-29-165548-700x602.png",
      category: "Web Application",
      link: "https://www.realtor.com/realestateandhomes-detail/508-N-Tremont-St-B_Oceanside_CA_92054_M98642-95351?from=srp-list-card",
      metrics: "30% improvement in page load times"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated selection of projects demonstrating expertise in modern web technologies, 
            scalable architecture, and user-centered design principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group bg-white ${project.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.link, '_blank')}
                      className="text-gray-400 hover:text-blue-600 p-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {project.metrics && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-100 rounded-xl">
                    <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {project.metrics}
                    </p>
                  </div>
                )}
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Technology Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Live Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://docs.google.com/document/d/1IL9JJWODBToRulJeuLTmFd15fyqAUJbSiakI9l-kiH8/edit?usp=sharing', '_blank')}
          >
            <Code className="mr-2 w-5 h-5" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
