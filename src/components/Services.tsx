
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "UI UX Design",
      description: "Design that speaks to your users, with modern interfaces that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    },
    {
      title: "Webflow Develop",
      description: "Custom, responsive websites built with modern frameworks and optimized for performance.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-Browser Compatible"],
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Product Design",
      description: "Full-stack architecture and technical leadership to scale your digital products.",
      features: ["System Architecture", "API Development", "Database Design", "Code Review & Optimization"],
      icon: "🚀",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50"
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-lg rotate-45 opacity-30"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-200 rounded-full opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Expertise Service! Let's Check It Out
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging 13+ years of experience to help businesses build robust, 
            scalable solutions that drive growth and enhance user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden">
              <div className={`${service.bgColor} p-8 text-center`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
              </div>
              <CardContent className="p-8">
                <CardDescription className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "13+", label: "Years Experience" },
            { number: "50+", label: "Complete Project" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
