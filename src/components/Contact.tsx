
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      question: "Let this be a lesson to you",
      answer: "FAQ No. Blog →"
    },
    {
      question: "How do you use time tracking for projects?",
      answer: "FAQ No. Blog →"
    },
    {
      question: "Egg and tempura in design",
      answer: "FAQ No. Blog →"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - FAQs and Testimonial */}
          <div className="space-y-12">
            {/* FAQ Section */}
            <div>
              <div className="mb-8">
                <span className="text-yellow-400 text-sm uppercase tracking-wider mb-4 block">
                  — FAQ
                </span>
                <h2 className="text-3xl font-bold text-white mb-6">
                  w?
                  <br />
                  News.
                </h2>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-white mb-2">
                          {faq.question}
                        </h3>
                      </div>
                      <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 ml-4">
                        →
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <Card className="bg-gray-800 border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="https://pavelterenin.com/wp-content/uploads/2017/01/portrait.jpeg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Pavel Terenin</h4>
                    <p className="text-gray-400 text-sm">Software Engineer</p>
                  </div>
                </div>
                <p className="text-white leading-relaxed mb-4">
                  "Amazing! AI vitae eos sit amet oranus ut bibendum ante dignissim blandit. Nulla auctor, 
                  nunc mollis eleifend porta erat lorem ipsum"
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-2 h-1 rounded-full ${i === 0 ? 'bg-yellow-400' : 'bg-gray-600'}`}></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Estimate */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Estimate your project?
                <br />
                Let me know here.
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">What's your name?</span>
                  <span className="text-gray-500">→</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">Your fancy email</span>
                  <span className="text-gray-500">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="mb-8">
              <span className="text-yellow-400 text-sm uppercase tracking-wider mb-4 block">
                — Let's Talk
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Got A Project? Let's Talk
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Ready to discuss your next project? I'd love to hear from you. 
                Let's create something amazing together.
              </p>
            </div>

            <Card className="bg-gray-800 border-0 rounded-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 rounded-xl"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl py-3 h-12 font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
