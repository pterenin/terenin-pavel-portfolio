
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
    },
    {
      category: "Front-End",
      skills: ["React", "Vue", "Angular", "Redux", "Flux", "Backbone", "Micro Frontends"],
    },
    {
      category: "Back-End & Databases",
      skills: ["Node.js", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about leveraging modern web technologies to create exceptional user experiences. 
            With expertise in Agile methodologies and a commitment to mentoring emerging talent, I drive 
            innovation in every project while maintaining the highest standards of code quality and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education & Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-cyan-600 rounded-full"></div>
                  <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gray-200 -z-10"></div>
                  <div className="text-sm font-semibold text-cyan-600 mb-1">{item.year}</div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-gray-600">{item.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skillGroups.map((group, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
