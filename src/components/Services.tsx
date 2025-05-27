import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud } from "lucide-react";
export const Services = () => {
  const specialities = [{
    icon: Code,
    title: "Front-End Development",
    description: "React, Vue, Angular, TypeScript, JavaScript, Next.js, Redux, Micro Frontends, and modern web technologies for scalable user interfaces."
  }, {
    icon: Database,
    title: "Full-Stack Development",
    description: "GraphQL, Node.js, Python, RESTful APIs, MongoDB, PostgreSQL, MySQL, and end-to-end application development."
  }, {
    icon: Cloud,
    title: "DevOps & Architecture",
    description: "AWS, Docker, Kubernetes, Jenkins, CI/CD pipelines, Micro Services architecture, and scalable cloud solutions."
  }];
  return <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Specialties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            13+ years of expertise in front-end and full-stack development, 
            delivering scalable web and mobile applications across multiple industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl bg-gray-50 group">
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
            </Card>)}
        </div>
      </div>
    </section>;
};