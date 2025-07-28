import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-primary">ABC</span> Developer
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer specializing in MERN stack and AWS cloud solutions. 
              Building scalable applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </button>
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>abc@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available for remote work</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ABC Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;