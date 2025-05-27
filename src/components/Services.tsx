
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const specialities = [
    {
      icon: "💡",
      title: "Product design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna tellus molestie eleifend porta.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna tellus molestie eleifend porta.",
    },
    {
      icon: "💻",
      title: "Interactive design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna tellus molestie eleifend porta.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna tellus molestie eleifend porta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{specialty.icon}</span>
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
