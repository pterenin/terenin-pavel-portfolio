import { biography } from "@/data/links";
import { Code2, Database, Cloud, Monitor, Workflow, Users } from "lucide-react";
export const About = () => {
  const skillGroups = [{
    category: "Languages & Frameworks",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    icon: Code2,
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-500",
    border: "border-blue-200"
  }, {
    category: "Front-End",
    skills: ["React", "Next.js", "Vue", "Angular", "Microfrontends", "Module Federation", "WebAuthn", "Redux"],
    icon: Monitor,
    color: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-500",
    border: "border-emerald-200"
  }, {
    category: "Back-End & Databases",
    skills: ["Node.js", "Express", "GraphQL", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "OAuth 2.0"],
    icon: Database,
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-500",
    border: "border-purple-200"
  }, {
    category: "DevOps & Cloud",
    skills: ["AWS", "Amazon EKS", "Kubernetes", "Docker", "CI/CD", "GitHub Actions", "Jenkins", "Capacity planning"],
    icon: Cloud,
    color: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-500",
    border: "border-orange-200"
  }, {
    category: "AI Agents & Developer Tools",
    skills: ["Agent harness design", "Tool validation", "OpenAI API", "Zod", "Background workers", "Failure recovery", "Git worktrees", "Automated code review"],
    icon: Workflow,
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-500",
    border: "border-blue-200"
  }, {
    category: "Technical Leadership",
    skills: ["Platform architecture", "Data modeling", "Design reviews", "Release workflows", "Developer mentoring", "Technical documentation"],
    icon: Users,
    color: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-500",
    border: "border-emerald-200"
  }];
  return <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Full-Stack Engineering and Web Platform Architecture</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-left">I’ve worked in web software engineering since 2013, after an earlier career implementing enterprise software. I’ve led front-end work on privacy software at TrustArc, built account features at Juniper Square and worked on retail storefronts. I’m also the co-founder of NeironHub, where I work part-time as CTO. I designed the marketplace’s data model and set up the checks each change goes through on its way from staging to production. I live in Victoria, British Columbia.</p>
          <a href={biography} className="inline-block mt-5 font-medium text-blue-600 hover:underline">Full biography and earlier projects</a>
        </div>

        <div className="grid gap-20">
          {/* Technical Skills */}
          <div id="technical-expertise" className="scroll-mt-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-5 shadow-sm">
                  <Code2 className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
                </div>
                Technical Expertise
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tools and practices I use to build web platforms, run AI agents and lead engineering work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skillGroups.map(group => <div key={group.category} className={`group relative bg-gradient-to-br ${group.color} rounded-3xl p-8 border ${group.border} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}>
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
                      {group.skills.map((skill, skillIndex) => <div key={skillIndex} className="min-w-0 [overflow-wrap:anywhere] px-2 sm:px-4 py-3 bg-white/80 backdrop-blur-sm text-gray-800 text-sm rounded-xl border border-white/50 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-center group-hover:border-white/70">
                          {skill}
                        </div>)}
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Professional Summary */}
            <div id="professional-philosophy" className="mt-16 text-center scroll-mt-20">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                <div className="max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Professional Philosophy</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I try to keep the reason for a decision close to the work it affects.
                    In CodePipeline, the reviewer sees the Jira discussion alongside the patch.
                    At NeironHub, I kept the agreed scope with the project so a client reviewing a delivery can see what they asked for, even months later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
