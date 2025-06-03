
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Pavel's AI assistant. I can answer questions about his experience, skills, and background. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const cvContext = `
PAVEL TERENIN  
SENIOR/STAFF SOFTWARE ENGINEER  
pavelterenin.com | pavel.terenin@gmail.com | +1 (604) 910-8101

—— SUMMARY ——  
Software Engineer with 14+ years of experience in front-end and full-stack development across multiple industries. Expert in modern web technologies and Agile methodologies, with deep expertise in TypeScript, JavaScript, Python, and frameworks such as React, Vue, Angular, Next.js, and GraphQL. Proven track record leading UI development and architecture, delivering scalable web and mobile applications that enhance user experiences. Committed to innovation, teamwork, and continuous learning. Excels at driving projects from MVP to production, mentoring teams, and integrating AI/ML to optimize code and workflows.

—— TECHNICAL SKILLS ——  
• Languages & Frameworks: Python, TypeScript, JavaScript (ES6+), PHP, Java, HTML5, CSS3, XML, Ajax  
• Front-End: React, Vue, Angular, Redux, Flux, Backbone, Micro Frontends, Knockout, jQuery, Bootstrap, Tailwind  
• Back-End: Node.js, Express, Next.js, GraphQL, RESTful APIs, Microservices, MongoDB, PostgreSQL, MySQL, Oracle  
• DevOps & Cloud: Jenkins, Kubernetes, Docker, AWS (EC2, S3, Lambda), CI/CD pipelines, Git/GitLab/GitHub

—— WORK EXPERIENCE ——  
**Lululemon (07/2024 – 05/2025)**  
• Role: Software Engineer (contractor/consultant)  
• Achievements:  
  – Implemented OKTA-based passwordless login (passkeys & biometrics) with TypeScript, Next.js, React, GraphQL.  
  – Orchestrated Micro Frontend module federation for secure login flows across multiple consumer apps.  
  – Technologies: React, Next.js, TypeScript, GraphQL, Node.js, Docker, Jenkins, Sentry, DataDog, AWS, SCSS.  

**Electronic Arts (01/2024 – 05/2025)**  
• Role: Software Engineer (contractor/consultant)  
• Achievements:  
  – Designed and built a data-driven Dashboard app (FE & BE) from scratch using TypeScript, Next.js, React, Node.js, Express.js.  
  – Architected database schemas (SQLite, SQL Server, MySQL) and event-tracking for user analytics.  
  – Packaged the web app into an Electron desktop application.  
  – Technologies: React, Next.js, TypeScript, Node.js, Electron, GitLab CI, SQLite, SQL Server, MySQL, Tailwind, AWS.  

**Juniper Square (04/2022 – 10/2023)**  
• Role: Senior Software Engineer  
• Achievements:  
  – Built a new Account Subscription page (React, Python, GraphQL, TypeScript) that improved onboarding flow.  
  – Introduced Micro Frontends via Webpack Module Federation, improving team autonomy and reducing bundle size.  
  – Maintained AWS-based CI/CD pipelines, ensuring 99.9% uptime for core services.  
  – Technologies: React, Python, GraphQL, TypeScript, PostgreSQL, Docker, AWS, CI/CD.  

**Realtor.com (02/2021 – 04/2022)**  
• Role: Senior Software Engineer  
• Achievements:  
  – Developed a brand new Listing Details page (React, Next.js, TypeScript, GraphQL), cutting load time by 30%.  
  – Established a Jenkins CI pipeline, Dockerized microservices, and deployed to AWS, supporting 100M+ MAUs.  
  – Technologies: React, Next.js, Angular, TypeScript, Node.js, GraphQL, Docker, Jenkins, AWS.  

**TrustArc (10/2018 – 02/2021)**  
• Role: Senior Front-End Engineer / UI Tech Lead  
• Achievements:  
  – Led a team of 4 UI developers to build a complex Angular 8+ application from the ground up, delivering on time and under budget.  
  – Mentored junior engineers and collaborated with product managers to refine UX, boosting user satisfaction.  
  – Technologies: Angular, TypeScript, ES6, Node.js, Docker, OpenShift, Webpack, Bootstrap.  

**Intersog (07/2017 – 10/2018)**  
• Role: Senior Software Engineer / Architect  
• Project: Riparian (pharma pricing SaaS)  
• Technologies: Vue.js, React, Node.js, Webpack, Bootstrap, OpenShift.  

**DNN Software Inc. (07/2013 – 07/2017)**  
• Role: JavaScript / Front-End Developer  
• Achievements:  
  – Contributed to the DNN CMS core modules, serving 750K+ sites globally.  
  – Technologies: React, ES6, Flux/Redux, Webpack, Bootstrap, Node.js.  

**Vidigami Media Inc. (06/2014 – 03/2016)**  
• Role: JavaScript / Front-End Developer  
• Technologies: React, React Native, Backbone, Knockout, TypeScript, MongoDB, PostgreSQL, Gulp, Bower, jQuery.  

—— EDUCATION ——  
• Concordia University (2012–2013) – Diploma in Web Programming (Montreal, QC, Canada)  
• University of Information Technologies (2011) – Certificate in Java Programming (Nizhny Novgorod, Russia)  
• Lobachevsky State University (2007–2010) – B.Com. in Finance (Nizhniy Novgorod, Russia)  

—— PERSONAL BIO ——  
Hi, I'm Pavel Terenin, a Senior/Staff Software Engineer based in Victoria, British Columbia. My passion for programming began in middle school, writing simple games in Q-Basic and Pascal. After teaching myself JavaScript, I fell in love with Web development. Today, I focus on crafting fast, reliable web and mobile experiences that scale to millions of users, often integrating AI/ML to optimize code and automate testing/debugging.  

Outside of work, I hike the North Shore, write technical articles, speak at conferences, and mentor hackathon teams. I live in Victoria, BC with my wife and two kids.  

Key Links:  
• HackerNoon Articles:  
  – "Micro-Frontends" – https://hackernoon.com/micro-frontends  
  – "The 7 Most Useful Array Methods in JavaScript" – https://hackernoon.com/the-7-most-useful-array-methods-in-javascript  
  – "Trunk-Based Development, Continuous Deployment, and Why You Should Adopt Them" – https://hackernoon.com/trunk-based-development-continuous-deployment-and-why-you-should-adopt-them
  `;

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('Calling AI chat function...');
      
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          message: inputValue,
          cvContext: cvContext
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to get AI response');
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling AI chat function:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 shadow-lg flex flex-col items-center justify-center text-white"
        >
          <MessageCircle className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Ask AI</span>
        </Button>
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Have Questions? Ask my AI agent
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Pavel's AI Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-blue-700 h-8 w-8 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Pavel's experience..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
            size="sm"
            className="px-3"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
