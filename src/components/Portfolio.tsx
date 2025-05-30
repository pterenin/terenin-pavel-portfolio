
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Lululemon Login Experience",
      description: "Integrated Okta SSO with passwordless passkeys and biometric authentication.",
      tech: "TypeScript, Next.js, React, OKTA API",
      image: "https://pavelterenin.com/blog/wp-content/uploads/2025/05/Screenshot-2025-05-29-165348-700x492.png",
      category: "Featured",
      link: "https://shop.lululemon.com/en-ca/account/login",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "EA Technical Health Dashboard",
      description: "Built a data-driven dashboard aggregating multiple sources into a user-friendly interface.",
      tech: "React, Next.js, Node.js, Express.js",
      image: "https://pavelterenin.com/blog/wp-content/uploads/2025/05/Screenshot-2025-05-29-170145-700x383.png",
      category: "Dashboard",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Realtor.com Listing Details",
      description: "Developed a new listing details page used by millions, improving load times by 30%.",
      tech: "React, Next.js, TypeScript, GraphQL",
      image: "https://pavelterenin.com/blog/wp-content/uploads/2025/05/Screenshot-2025-05-29-165548-700x602.png",
      category: "Web App",
      link: "https://www.realtor.com/realestateandhomes-detail/508-N-Tremont-St-B_Oceanside_CA_92054_M98642-95351?from=srp-list-card",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-500" />
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group hover:scale-105 bg-white/80 backdrop-blur-sm border border-white/20">
              <div className="aspect-video bg-gray-200 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
              </div>
              <CardContent className="p-8 relative">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full shadow-lg`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {project.description}
                </p>
                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Tech Stack:</span> {project.tech}
                  </p>
                </div>
                {project.link && (
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:bg-blue-50/50 rounded-2xl py-3 h-auto font-medium transition-all duration-300 hover:shadow-lg group/btn"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-10 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://docs.google.com/document/d/1IL9JJWODBToRulJeuLTmFd15fyqAUJbSiakI9l-kiH8/edit?usp=sharing', '_blank')}
          >
            View My Complete CV
          </Button>
        </div>
      </div>
    </section>
  );
};
