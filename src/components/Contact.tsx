import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("d6oVadgD1NlX-dR6G");

      // Send email using EmailJS
      await emailjs.send(
        "service_9fxdhue", // Service ID
        "template_oql4avg", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Pavel Terenin",
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Clear form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "I specialize in full-stack web applications, focusing on modern React ecosystems and scalable architecture."
    },
    {
      question: "What's your hourly rate?",
      answer: "My rates vary based on project complexity and timeline. Let's discuss your specific needs."
    },
    {
      question: "How do you communicate?",
      answer: "I prefer regular check-ins via video calls and use project management tools for tracking progress."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium mb-6">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Let's work together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info and FAQs */}
          <div className="space-y-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Mail className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Email</p>
                    <a href="mailto:pavel.terenin@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      pavel.terenin@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Phone className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Phone</p>
                    <a href="tel:+16049108101" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +1 (604) 910-8101
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Linkedin className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/pavelterenin" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      linkedin.com/in/pavelterenin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="border-0 shadow-lg rounded-3xl bg-white">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-gray-200 rounded-2xl h-14 text-lg"
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
                      disabled={isSubmitting}
                      className="border-gray-200 rounded-2xl h-14 text-lg"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-gray-200 rounded-2xl h-14 text-lg"
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
                      disabled={isSubmitting}
                      className="border-gray-200 rounded-2xl text-lg"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-2xl py-4 h-auto text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
