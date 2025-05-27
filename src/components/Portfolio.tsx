
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Lululemon Login Experience",
      description: "Integrated Okta SSO with passwordless passkeys and biometric authentication.",
      tech: ["TypeScript", "Next.js", "React", "OKTA API", "Micro Frontends"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Web Development"
    },
    {
      title: "EA Technical Health Dashboard",
      description: "Built a data-driven dashboard aggregating multiple sources into a user-friendly interface.",
      tech: ["React", "Next.js", "Node.js", "Express.js", "SQLite/MySQL"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      category: "Dashboard"
    },
    {
      title: "Realtor.com Listing Details",
      description: "Developed a new listing details page used by millions, improving load times by 30%.",
      tech: ["React", "Next.js", "TypeScript", "GraphQL"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      category: "E-commerce"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "E-commerce"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Mobile App"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking business metrics and KPIs.",
      tech: ["Angular", "D3.js", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Dashboard"
    },
  ];

  const categories = ["All", "Web Development", "Dashboard", "E-commerce", "Mobile App"];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-lg rotate-12 opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Digital Product Showcases
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of recent projects that showcase my expertise in building scalable, 
            user-focused applications for leading companies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden bg-white">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full text-indigo-600 hover:bg-indigo-50 rounded-xl">
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
