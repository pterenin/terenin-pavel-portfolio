
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Palette, Monitor } from "lucide-react";

export const Services = () => {
  const specialities = [
    {
      icon: Lightbulb,
      title: "Product Design",
      description: "Strategic product design solutions that align business goals with user needs, creating intuitive and impactful digital experiences.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design approach that prioritizes usability, accessibility, and aesthetic excellence across all digital touchpoints.",
    },
    {
      icon: Monitor,
      title: "Interactive Development",
      description: "Modern web applications built with cutting-edge technologies, focusing on performance, scalability, and user engagement.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering comprehensive digital solutions with expertise in modern web technologies and user-centered design principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl bg-white group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gray-50 group-hover:bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-colors duration-300">
                  <specialty.icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {specialty.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
