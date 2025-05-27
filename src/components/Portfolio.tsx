
import { Card, CardContent } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "All Creative Works, Selected projects.",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Featured"
    },
    {
      title: "BeServer.",
      subtitle: "Branding, Product",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      category: "Product"
    },
    {
      title: "Energetic Tumbler.",
      subtitle: "Product, Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Project */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-0 rounded-2xl overflow-hidden h-full">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div className="mb-8">
                  <span className="text-yellow-400 text-sm uppercase tracking-wider mb-4 block">
                    — Portfolio
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {projects[0].title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>
                <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2 group self-start">
                  <span className="border-b border-yellow-400 group-hover:border-yellow-300">View all works</span>
                  <span>→</span>
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Project Grid */}
          <div className="lg:col-span-2 grid gap-8">
            {projects.slice(1).map((project, index) => (
              <Card key={index} className="bg-gray-800 border-0 rounded-2xl overflow-hidden group hover:bg-gray-750 transition-colors duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-square bg-gray-700 rounded-l-2xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.subtitle}
                    </p>
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2 group self-start">
                      <span className="border-b border-yellow-400 group-hover:border-yellow-300">View project</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
