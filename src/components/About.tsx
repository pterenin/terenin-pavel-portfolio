
import { GraduationCap, Code2, Database, Cloud, Monitor, Sparkles } from "lucide-react";

export const About = () => {
  const skillGroups = [
    {
      category: "Languages & Frameworks",
      skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "HTML", "CSS", "XML", "Ajax"],
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Front-End",
      skills: ["React", "Vue", "Angular", "Redux", "Flux", "Backbone", "Micro Frontends"],
      icon: Monitor,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Back-End & Databases",
      skills: ["Node.js", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle"],
      icon: Database,
      gradient: "from-green-500 to-blue-500"
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"],
      icon: Cloud,
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Building Scalable Solutions, Leading Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm passionate about leveraging modern web technologies to create exceptional user experiences. 
            With expertise in Agile methodologies and a commitment to mentoring emerging talent, I drive 
            innovation in every project while maintaining the highest standards of code quality and performance.
          </p>
        </div>

        <div className="grid gap-20">
          {/* Skills Grid */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl text-lg font-semibold mb-6 shadow-xl border border-white/30">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                  <Code2 className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                Technical Expertise
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Comprehensive technical skill set spanning modern web technologies, cloud platforms, and development methodologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {skillGroups.map((group, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${group.gradient} rounded-xl flex items-center justify-center shadow-lg mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <group.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl group-hover:text-gray-800 transition-colors">{group.category}</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent mt-1"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-center px-3 py-2.5 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm text-gray-700 text-sm rounded-xl border border-white/60 hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-300 font-medium group-hover:scale-105"
                      >
                        <span className="text-center">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
