import { Building2, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">For Investors</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-display mb-6">
            Meet Investors Looking for<br />the Next Big Startup.
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Leading angel investors, VCs, and micro-funds attend Karo Pitch to discover high-potential startups from across India.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {[
            { icon: Building2, title: "VC Firms", desc: "Early-stage venture capital firms scouting for Bharat opportunities" },
            { icon: TrendingUp, title: "Angel Investors", desc: "Experienced angels looking to back passionate founders" },
            { icon: Handshake, title: "Micro Funds", desc: "Sector-focused micro funds investing in niche categories" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="rounded-2xl p-8 bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm text-center h-full">
                <item.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground font-display mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Partner as an Investor
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InvestorsSection;
