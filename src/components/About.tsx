
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
            <h3 className="text-3xl font-bold text-gray-900 mb-12 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mr-4 shadow-lg">
                <Code2 className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Technical Skills</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillGroups.map((group, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-all duration-500 border border-white/20 shadow-lg hover:shadow-xl group hover:scale-105">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${group.gradient} rounded-2xl flex items-center justify-center shadow-lg mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <group.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl group-hover:text-gray-800 transition-colors">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-white/50 hover:border-gray-300 hover:bg-white transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:scale-105"
                      >
                        {skill}
                      </span>
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
