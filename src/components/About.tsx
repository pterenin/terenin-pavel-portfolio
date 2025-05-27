

import { GraduationCap, Code2, Database, Cloud, Monitor } from "lucide-react";

export const About = () => {
  const timeline = [
    {
      year: "2007–2010",
      title: "Bachelor of Commerce (Finance)",
      institution: "Lobachevsky State University",
    },
    {
      year: "2011",
      title: "Certificate in Java Programming",
      institution: "University of Information Technologies",
    },
    {
      year: "2012–2013",
      title: "Diploma in Web Programming",
      institution: "Concordia University",
    },
  ];

  const skillGroups = [
    {
      category: "Languages & Frameworks",
      skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "HTML", "CSS", "XML", "Ajax"],
      icon: Code2,
      color: "from-gray-600 to-gray-800"
    },
    {
      category: "Front-End",
      skills: ["React", "Vue", "Angular", "Redux", "Flux", "Backbone", "Micro Frontends"],
      icon: Monitor,
      color: "from-gray-600 to-gray-800"
    },
    {
      category: "Back-End & Databases",
      skills: ["Node.js", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle"],
      icon: Database,
      color: "from-gray-600 to-gray-800"
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"],
      icon: Cloud,
      color: "from-gray-600 to-gray-800"
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Building Scalable Solutions, Leading Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm passionate about leveraging modern web technologies to create exceptional user experiences. 
            With expertise in Agile methodologies and a commitment to mentoring emerging talent, I drive 
            innovation in every project while maintaining the highest standards of code quality and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Education Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              Education & Timeline
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gray-900 rounded-full"></div>
                  <div className="absolute left-2 top-6 w-0.5 h-full bg-gray-200"></div>
                  <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gray-900">
                    <div className="text-sm font-semibold text-gray-600 mb-2">{item.year}</div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</div>
                    <div className="text-gray-700">{item.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                <Code2 className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillGroups.map((group, index) => (
                <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mr-5">
                      <group.icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-200 font-medium"
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

