
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Twitter, MapPin, Clock, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { NavigationBar } from "@/components/NavigationBar";

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
      value: "rawaks0910@gmail.com",
      link: "mailto:rawaks0910@gmail.com",
      description: "For serious inquiries and job offers",
      color: "bg-red-500"
    },
    {
      name: "Phone",
      icon: Phone,
      value: "+91 7217510306",
      link: "tel:+917217510306",
      description: "Call me for urgent discussions",
      color: "bg-green-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "linkedin.com/in/akshat-singh-rawat",
      link: "https://www.linkedin.com/in/akshat-singh-rawat-bb52552a6",
      description: "Professional networking and career updates",
      color: "bg-blue-500"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      value: "@AkshatRawatlive",
      link: "https://x.com/AkshatRawatlive",
      description: "Hot takes on AI and existential programming thoughts",
      color: "bg-gray-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <NavigationBar currentPage="contact" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold text-white mb-6 text-shadow-glow hover-tilt animate-fade-in">
              Let's 
              <span className="block text-gray-400 hover-glow animate-float animate-delay-1">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed hover-glow transition-all duration-500 animate-fade-in animate-delay-2">
              Whether you want to discuss AI ethics, argue about tabs vs spaces, or just say hi — I'm all ears
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-blue-400" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  I promise to respond faster than my usual debugging sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 glass-morphism focus:border-blue-400 transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 glass-morphism focus:border-blue-400 transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 glass-morphism focus:border-blue-400 transition-all duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-32 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 glass-morphism focus:border-blue-400 transition-all duration-300"
                      placeholder="Tell me your thoughts, ideas, or just share a good meme..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-3d hover-lift transition-all duration-300 group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    <span className="group-hover:animate-pulse">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Social Links */}
              <Card className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Find Me Online</CardTitle>
                  <CardDescription className="text-gray-400">
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
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group hover-lift"
                    >
                      <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-gray-300 transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">{social.value}</p>
                        <p className="text-xs text-gray-500">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-sm text-gray-400">Earth (mostly), Remote-first</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-sm text-gray-400">Usually within 24 hours (or one coffee cycle)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 glass-morphism hover-lift transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      Fun fact: I respond to emails faster than I fix my own bugs. 
                      That's either dedication to communication or avoidance of actual work.
                    </p>
                  </div>
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
