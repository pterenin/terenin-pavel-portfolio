
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Pen, Monitor } from "lucide-react";

export const Services = () => {
  const specialities = [
    {
      icon: Lightbulb,
      title: "Product design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.",
    },
    {
      icon: Pen,
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.",
    },
    {
      icon: Monitor,
      title: "Interactive design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, 
            non nisl tincidunt ut elementum turpis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl bg-gray-50 group">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-white group-hover:bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors duration-300 shadow-sm">
                  <specialty.icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
