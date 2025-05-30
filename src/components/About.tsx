import { GraduationCap, Code2, Database, Cloud, Monitor } from "lucide-react";
export const About = () => {
  const timeline = [{
    year: "2007–2010",
    title: "Bachelor of Commerce (Finance)",
    institution: "Lobachevsky State University"
  }, {
    year: "2011",
    title: "Certificate in Java Programming",
    institution: "University of Information Technologies"
  }, {
    year: "2012–2013",
    title: "Diploma in Web Programming",
    institution: "Concordia University"
  }];
  const skillGroups = [{
    category: "Languages & Frameworks",
    skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "HTML", "CSS", "XML", "Ajax"],
    icon: Code2,
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-500",
    border: "border-blue-200"
  }, {
    category: "Front-End",
    skills: ["React", "Vue", "Angular", "Redux", "Flux", "Backbone", "Micro Frontends"],
    icon: Monitor,
    color: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-500",
    border: "border-emerald-200"
  }, {
    category: "Back-End & Databases",
    skills: ["Node.js", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle"],
    icon: Database,
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-500",
    border: "border-purple-200"
  }, {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"],
    icon: Cloud,
    color: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-500",
    border: "border-orange-200"
  }];
  return <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Building Scalable Solutions, Leading Innovation</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From finance graduate to full-stack architect, I've evolved alongside the web development landscape. 
            Now I'm pioneering the integration of AI into modern development workflows—leveraging machine learning 
            for code optimization, automated testing, and intelligent debugging. My passion lies in creating 
            scalable solutions while mentoring teams and implementing cutting-edge AI tools that enhance 
            productivity and code quality.
          </p>
        </div>

        <div className="grid gap-20">
          {/* Technical Skills */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mr-5 shadow-sm">
                  <Code2 className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                </div>
                Technical Expertise
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology stack with 14+ years of hands-on experience in modern development practices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillGroups.map((group, index) => <div key={index} className={`group relative bg-gradient-to-br ${group.color} rounded-3xl p-8 border ${group.border} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}>
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 ${group.iconBg} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <group.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl mb-1">{group.category}</h4>
                        <div className="w-12 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {group.skills.map((skill, skillIndex) => <div key={skillIndex} className="px-4 py-3 bg-white/80 backdrop-blur-sm text-gray-800 text-sm rounded-xl border border-white/50 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-center group-hover:border-white/70">
                          {skill}
                        </div>)}
                    </div>
                  </div>
                </div>)}
            </div>
            
            {/* Professional Summary */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                <div className="max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Professional Philosophy</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Committed to delivering high-quality, scalable solutions while fostering collaborative environments. 
                    I believe in continuous learning, best practices implementation, and mentoring the next generation of developers 
                    to build sustainable and innovative web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};