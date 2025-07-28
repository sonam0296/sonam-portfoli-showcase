import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-primary">Sonam</span>
            </h3>
            <p className="text-background/80">
              Full Stack Developer specializing in MERN stack and AWS cloud solutions. 
              Building scalable applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button className="text-left text-background/80 hover:text-background transition-colors">
                About
              </button>
              <button className="text-left text-background/80 hover:text-background transition-colors">
                Skills
              </button>
              <button className="text-left text-background/80 hover:text-background transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>sonam@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available for remote work</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-background hover:text-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-background hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-background hover:text-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Sonam Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;