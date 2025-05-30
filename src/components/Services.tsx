
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, ArrowRight } from "lucide-react";

export const Services = () => {
  const specialities = [
    {
      icon: Code,
      title: "Front-End Excellence",
      description: "React, Vue, Angular, TypeScript, JavaScript, Next.js, Redux, Micro Frontends, and modern web technologies for scalable user interfaces.",
      highlights: ["React/Vue/Angular", "TypeScript", "Next.js", "Micro Frontends"],
      color: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-500",
      border: "border-blue-100"
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description: "GraphQL, Node.js, Python, RESTful APIs, MongoDB, PostgreSQL, MySQL, and end-to-end application development.",
      highlights: ["Node.js/Python", "GraphQL/REST", "Database Design", "API Development"],
      color: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-500",
      border: "border-emerald-100"
    },
    {
      icon: Cloud,
      title: "DevOps & Architecture",
      description: "AWS, Docker, Kubernetes, Jenkins, CI/CD pipelines, Micro Services architecture, and scalable cloud solutions.",
      highlights: ["AWS/Cloud", "Docker/K8s", "CI/CD", "Microservices"],
      color: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-500",
      border: "border-purple-100"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-gray-200">
            Core Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Specializations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            14+ years of expertise in front-end and full-stack development, delivering scalable 
            web and mobile applications across multiple industries with modern best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br ${specialty.color} group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-10 text-center relative z-10">
                <div className={`w-20 h-20 ${specialty.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-xl`}>
                  <specialty.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {specialty.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {specialty.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {specialty.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="px-3 py-2 bg-white/80 backdrop-blur-sm text-gray-800 text-sm rounded-xl border border-white/50 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-center group-hover:border-white/70"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                "Agile/Scrum Leadership",
                "Team Mentoring",
                "Code Reviews",
                "Performance Optimization",
                "Security Best Practices",
                "Testing Strategies",
                "Technical Documentation",
                "Project Architecture"
              ].map((capability, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
