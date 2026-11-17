import { ArrowUpRight } from "lucide-react";
import { assistantArticle, blog, capacityArticle } from "@/data/links";

const articles = [
  { title: "How I built an AI assistant that could book appointments by phone", text: "What should an agent do when a phone provider accepts a call but its response never arrives? I wrote a TypeScript harness and tested that failure with simulated providers.", href: assistantArticle },
  { title: "Planning Kubernetes capacity for a peak retail event", text: "A campaign starts at ten. How many pods should already be serving traffic at 9:59? A worked example of sizing for the opening minutes.", href: capacityArticle },
];

export const Writing = () => (
  <section id="writing" className="py-24 bg-gray-50 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-12">Engineering writing</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map(article => (
          <article key={article.href} className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4"><a href={article.href} className="hover:text-blue-700">{article.title}</a></h3>
            <p className="text-gray-600 leading-relaxed mb-5">{article.text}</p>
            <a href={article.href} className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline" aria-label={'Read article: ' + article.title}>Read article <ArrowUpRight size={16} /></a>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center"><a className="font-medium text-blue-600 hover:underline" href={blog}>All articles</a></div>
    </div>
  </section>
);
