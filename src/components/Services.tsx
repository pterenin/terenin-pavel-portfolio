
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Sparkles } from "lucide-react";

export const Services = () => {
  const specialities = [{
    icon: Code,
    title: "Front-End Development",
    description: "React, Vue, Angular, TypeScript, JavaScript, Next.js, Redux, Micro Frontends, and modern web technologies for scalable user interfaces.",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    icon: Database,
    title: "Full-Stack Development",
    description: "GraphQL, Node.js, Python, RESTful APIs, MongoDB, PostgreSQL, MySQL, and end-to-end application development.",
    gradient: "from-purple-500 to-pink-500"
  }, {
    icon: Cloud,
    title: "DevOps & Architecture",
    description: "AWS, Docker, Kubernetes, Jenkins, CI/CD pipelines, Micro Services architecture, and scalable cloud solutions.",
    gradient: "from-green-500 to-blue-500"
  }];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-400/10 to-cyan-400/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20">
            <Sparkles className="w-4 h-4 text-blue-500" />
            What I Do Best
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Specialties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            14+ years of expertise in front-end and full-stack development, delivering scalable web and mobile applications across multiple industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/70 backdrop-blur-sm group hover:scale-105 border border-white/20">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                     style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${specialty.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <specialty.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {specialty.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
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
