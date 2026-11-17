import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, GitPullRequest, Layers, Users, Zap } from "lucide-react";
import { capacityArticle, pipeline } from "@/data/links";

const projects = [
  {
    title: "CodePipeline", image: "pipeline", imageAlt: "An isolated worktree goes through code review before a draft pull request is opened.", icon: GitPullRequest, featured: true,
    description: "I built a tool that takes a Jira ticket to a draft pull request. Each ticket gets its own Git worktree. A second Codex session reviews the patch against the ticket before the repository checks run.",
    tech: "TypeScript, Node.js, Codex CLI", link: pipeline, action: "View source on GitHub",
  },
  {
    title: "Preparing a retail catalog for peak traffic", image: "kubernetes", icon: Layers,
    description: "I helped move a retail catalog to Amazon EKS and planned how many pods should be serving requests before a campaign went live. The first few minutes of traffic shaped the plan.",
    tech: "Kubernetes, Amazon EKS", link: capacityArticle, action: "Read the capacity study",
  },
  {
    title: "NeironHub", image: "neironhub", icon: Users,
    description: "I’m the co-founder and fractional CTO of NeironHub, a marketplace for hiring AI experts. I designed the workflow that carries an accepted proposal into the project so both sides can track milestones and review deliverables against the agreed scope.",
    tech: "Next.js, PostgreSQL, GitHub Actions", link: "https://neironhub.ai/", action: "Visit the platform",
  },
  {
    title: "lululemon Login Experience", image: "lululemon", logo: "lululemon",
    description: "I integrated Okta and WebAuthn for passkey sign-in and shared the login flow across independently built storefronts using Module Federation.",
    tech: "TypeScript, Next.js, React, Okta", link: "https://shop.lululemon.com/en-ca/account/login", action: "View the sign-in page",
  },
  {
    title: "EA Technical Health Dashboard", image: "ea", logo: "ea",
    description: "I connected data sources, built backend services and added access controls so technical leads could see project health in one place. I packaged the dashboard for desktop with Electron.",
    tech: "React, Node.js, Express, Electron",
  },
  {
    title: "Realtor.com Listing Details Page", image: "realtor", logo: "realtor",
    description: "I built reusable React components and connected the listing page to backend services in Next.js and Node.js. I also wrote end-to-end tests and worked on the Jenkins build.",
    tech: "React, Next.js, TypeScript, GraphQL", link: "https://www.realtor.com/realestateandhomes-detail/508-N-Tremont-St-B_Oceanside_CA_92054_M98642-95351", action: "View a property listing",
  },
];

export const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">Featured Work</div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio Highlights</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Selected projects in developer tools, platform architecture and the web applications I’ve built for clients.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map(project => (
          <Card key={project.title} className="flex flex-col border-0 shadow-lg hover:shadow-2xl transition-shadow rounded-3xl overflow-hidden group bg-white">
            <div className="aspect-video bg-gray-100 overflow-hidden relative">
              <img loading="lazy" src={'/images/' + project.image + '.webp'} alt={project.imageAlt || ""} className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${project.image === 'ea' ? 'blur-[1px]' : ''}`} />
              {project.featured && <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full flex items-center gap-1"><Zap size={13} className="text-yellow-400" /> Featured</span>}
            </div>
            <CardContent className="p-8 flex flex-1 flex-col">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  {project.icon ? <project.icon aria-hidden="true" className="w-10 h-10 text-blue-600" strokeWidth={1.5} /> : <img src={'/images/clients/' + project.logo + '.png'} alt="" className="w-16 h-16 object-contain" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <p className="text-sm text-gray-600 mb-6"><span className="font-medium">Tech stack:</span> {project.tech}</p>
              {project.link && <Button asChild className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-md">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.action}<ExternalLink size={16} /></a>
              </Button>}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg">
          <a href="/Pavel_CV.pdf" download><Download size={18} /> Download Resume</a>
        </Button>
      </div>
    </div>
  </section>
);
