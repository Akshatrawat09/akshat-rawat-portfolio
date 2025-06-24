
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Twitter, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      value: "akshat@example.com",
      link: "mailto:akshat@example.com",
      description: "For serious inquiries and job offers"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "linkedin.com/in/akshatsinghrawat",
      link: "https://linkedin.com/in/akshatsinghrawat",
      description: "Professional networking and career updates"
    },
    {
      name: "GitHub",
      icon: Github,
      value: "github.com/akshatsinghrawat",
      link: "https://github.com/akshatsinghrawat",
      description: "Where my code lives and dies"
    },
    {
      name: "Twitter",
      icon: Twitter,
      value: "@akshatsinghrawat",
      link: "https://twitter.com/akshatsinghrawat",
      description: "Hot takes on AI and existential programming thoughts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you want to discuss AI ethics, argue about tabs vs spaces, or just say hi — I'm all ears
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  I promise to respond faster than my usual debugging sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-32"
                      placeholder="Tell me your thoughts, ideas, or just share a good meme..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Social Links */}
              <Card className="bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Find Me Online</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Multiple ways to stalk me professionally
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{social.value}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium">Location</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Earth (mostly), Remote-first</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium">Response Time</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Usually within 24 hours (or one coffee cycle)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                    💡 Fun fact: I respond to emails faster than I fix my own bugs. 
                    That's either dedication to communication or avoidance of actual work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
