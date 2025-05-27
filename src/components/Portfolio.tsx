
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Lululemon Login Experience",
      description: "Integrated Okta SSO with passwordless passkeys and biometric authentication.",
      tech: "TypeScript, Next.js, React, OKTA API",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Featured",
      link: "https://shop.lululemon.com/en-ca/account/login"
    },
    {
      title: "EA Technical Health Dashboard",
      description: "Built a data-driven dashboard aggregating multiple sources into a user-friendly interface.",
      tech: "React, Next.js, Node.js, Express.js",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      category: "Dashboard"
    },
    {
      title: "Realtor.com Listing Details",
      description: "Developed a new listing details page used by millions, improving load times by 30%.",
      tech: "React, Next.js, TypeScript, GraphQL",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Web App"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Tech Stack:</span> {project.tech}
                  </p>
                </div>
                {project.link ? (
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
