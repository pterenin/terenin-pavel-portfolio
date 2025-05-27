
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites and single-page applications built with modern frameworks and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-Browser Compatible"],
    },
    {
      title: "Software Engineering",
      description: "Full-stack architecture, scalable APIs, and microservices designed for enterprise-level applications.",
      features: ["System Architecture", "API Development", "Database Design", "Code Review & Optimization"],
    },
    {
      title: "Technical Leadership",
      description: "Technical leadership, Agile coaching, and UI/UX audits to help teams deliver exceptional products.",
      features: ["Team Mentoring", "Agile Coaching", "Code Standards", "Technical Strategy"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging 13+ years of experience to help businesses build robust, 
            scalable solutions that drive growth and enhance user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
