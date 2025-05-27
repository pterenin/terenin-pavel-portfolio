
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Lululemon Login Experience",
      description: "Integrated Okta SSO with passwordless passkeys and biometric authentication.",
      tech: ["TypeScript", "Next.js", "React", "OKTA API", "Micro Frontends"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    },
    {
      title: "EA Technical Health Dashboard",
      description: "Built a data-driven dashboard aggregating multiple sources into a user-friendly interface.",
      tech: ["React", "Next.js", "Node.js", "Express.js", "SQLite/MySQL"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    },
    {
      title: "Realtor.com Listing Details Page",
      description: "Developed a new listing details page used by millions, improving load times by 30%.",
      tech: ["React", "Next.js", "TypeScript", "GraphQL"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of recent projects that showcase my expertise in building scalable, 
            user-focused applications for leading companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
