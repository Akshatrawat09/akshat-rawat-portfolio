
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Twitter, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
      description: "For serious inquiries and job offers"
    },
    {
      name: "Phone",
      icon: Phone,
      value: "+91 7217510306",
      link: "tel:+917217510306",
      description: "Call me for urgent discussions"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "linkedin.com/in/akshat-singh-rawat",
      link: "https://www.linkedin.com/in/akshat-singh-rawat-bb52552a6",
      description: "Professional networking and career updates"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      value: "@AkshatRawatlive",
      link: "https://x.com/AkshatRawatlive",
      description: "Hot takes on AI and existential programming thoughts"
    }
  ];

  return (
    <div className="min-h-screen bg-deep-charcoal text-pure-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-deep-charcoal/90 backdrop-blur-sm border-b border-light-gray/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-vibrant-orange">
              Akshat Singh Rawat
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="hover:text-vibrant-orange transition-colors">Home</Link>
              <Link to="/about" className="hover:text-vibrant-orange transition-colors">About</Link>
              <Link to="/projects" className="hover:text-vibrant-orange transition-colors">Projects</Link>
              <Link to="/contact" className="text-vibrant-orange">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pure-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-light-gray leading-relaxed">
              Whether you want to discuss AI ethics, argue about tabs vs spaces, or just say hi — I'm all ears
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-jet-black border-light-gray/20">
              <CardHeader>
                <CardTitle className="text-pure-white">Send a Message</CardTitle>
                <CardDescription className="text-light-gray">
                  I promise to respond faster than my usual debugging sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-light-gray">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 bg-deep-charcoal border-light-gray/30 text-pure-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-light-gray">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 bg-deep-charcoal border-light-gray/30 text-pure-white"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-light-gray">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 bg-deep-charcoal border-light-gray/30 text-pure-white"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-light-gray">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-32 bg-deep-charcoal border-light-gray/30 text-pure-white"
                      placeholder="Tell me your thoughts, ideas, or just share a good meme..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-vibrant-orange hover:bg-orange-600 text-pure-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Social Links */}
              <Card className="bg-jet-black border-light-gray/20">
                <CardHeader>
                  <CardTitle className="text-pure-white">Find Me Online</CardTitle>
                  <CardDescription className="text-light-gray">
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
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-deep-charcoal transition-colors group"
                    >
                      <div className="w-10 h-10 bg-vibrant-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="w-5 h-5 text-pure-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-pure-white group-hover:text-vibrant-orange transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-light-gray">{social.value}</p>
                        <p className="text-xs text-light-gray/70 mt-1">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-jet-black border-light-gray/20">
                <CardHeader>
                  <CardTitle className="text-pure-white">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-vibrant-orange" />
                    <div>
                      <p className="text-pure-white font-medium">Location</p>
                      <p className="text-sm text-light-gray">Earth (mostly), Remote-first</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-vibrant-orange" />
                    <div>
                      <p className="text-pure-white font-medium">Response Time</p>
                      <p className="text-sm text-light-gray">Usually within 24 hours (or one coffee cycle)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <Card className="bg-vibrant-orange/10 border-vibrant-orange/30">
                <CardContent className="pt-6">
                  <p className="text-light-gray text-sm italic">
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
