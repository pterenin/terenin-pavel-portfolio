
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Product Designer.",
      description: "324 Projects",
      icon: "📱",
      color: "bg-yellow-400",
      textColor: "text-gray-900"
    },
    {
      title: "Branding Designer.",
      description: "77 Projects",
      icon: "🎨",
      color: "bg-gray-700",
      textColor: "text-white"
    },
    {
      title: "Full Stack Developer.",
      description: "62 Projects",
      icon: "💻",
      color: "bg-gray-700",
      textColor: "text-white"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} border-0 rounded-2xl overflow-hidden h-80 flex flex-col justify-between p-8`}>
              <div className="flex-1 flex flex-col justify-center">
                <div className={`text-6xl mb-6 ${service.textColor}`}>
                  {service.icon}
                </div>
                <CardTitle className={`text-2xl font-bold mb-4 leading-tight ${service.textColor}`}>
                  {service.title}
                </CardTitle>
              </div>
              <div>
                <CardDescription className={`text-lg ${service.textColor} opacity-70`}>
                  {service.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
