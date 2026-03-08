import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Who Can Apply", href: "#who-can-apply" },
    { label: "Investors", href: "#investors" },
    { label: "Startups", href: "#startups" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <Rocket className="h-6 w-6 text-secondary" />
          Karo Pitch
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="gradient-accent text-secondary-foreground font-semibold shadow-hero hover:opacity-90">
            Apply to Pitch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full gradient-accent text-secondary-foreground font-semibold">Apply to Pitch</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
