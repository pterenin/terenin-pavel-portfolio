
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
      icon: "💻",
      color: "from-blue-500 to-purple-600"
    },
    {
      category: "Front-End",
      skills: ["React", "Vue", "Angular", "Redux", "Flux", "Backbone", "Micro Frontends"],
      icon: "🎨",
      color: "from-pink-500 to-rose-600"
    },
    {
      category: "Back-End & Databases",
      skills: ["Node.js", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle"],
      icon: "🔧",
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"],
      icon: "☁️",
      color: "from-orange-500 to-yellow-600"
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-yellow-200 rounded-lg rotate-12 opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Designing Solutions, Not Just Visuals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about leveraging modern web technologies to create exceptional user experiences. 
            With expertise in Agile methodologies and a commitment to mentoring emerging talent, I drive 
            innovation in every project while maintaining the highest standards of code quality and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl mr-3">📚</span>
              Education & Timeline
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                  <div className="absolute left-2 top-5 w-0.5 h-full bg-gradient-to-b from-indigo-200 to-transparent"></div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-indigo-500">
                    <div className="text-sm font-semibold text-indigo-600 mb-1">{item.year}</div>
                    <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-gray-600">{item.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-xl mr-3">⚡</span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillGroups.map((group, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                      {group.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 transition-colors duration-200"
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
