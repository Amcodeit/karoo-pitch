import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-primary-foreground">
            <Rocket className="h-5 w-5 text-secondary" />
            Karo Pitch
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">How It Works</a>
            <a href="#investors" className="hover:text-primary-foreground transition-colors">Investors</a>
            <a href="#startups" className="hover:text-primary-foreground transition-colors">Startups</a>
          </div>
          <p className="text-xs">© 2026 KaroStartup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
