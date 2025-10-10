import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MessageCircle, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "papul1612@gmail.com",
      link: "mailto:papul1612@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/priyaranjan-dash-0b0417174",
      link: "https://www.linkedin.com/in/priyaranjan-dash-0b0417174/",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 8342869898",
      link: "https://wa.me/918342869898",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to collaborations and exciting projects. Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 bg-card"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card
              className="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground"
              style={{ boxShadow: "var(--shadow-hover)" }}
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Download Resume</h3>
                <p className="mb-6 opacity-90">Get a detailed overview of my experience</p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href="/Priyaranjan_Dash.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
