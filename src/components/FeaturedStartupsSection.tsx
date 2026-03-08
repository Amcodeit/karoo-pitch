import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const startups = [
  { name: "FarmDirect", category: "D2C / AgriTech", desc: "Farm-to-table organic products delivered across 50+ cities in India." },
  { name: "SkillBridge", category: "EdTech / SaaS", desc: "AI-powered upskilling platform for blue-collar workers in Tier-2 cities." },
  { name: "CraftKari", category: "D2C / Handloom", desc: "Connecting Indian artisans with global buyers through curated collections." },
  { name: "MediQuick", category: "HealthTech", desc: "Affordable diagnostics and telemedicine for rural and semi-urban India." },
  { name: "PackRight", category: "Manufacturing", desc: "Sustainable packaging solutions for India's booming e-commerce industry." },
  { name: "BharatPay", category: "FinTech", desc: "UPI-first neobanking for MSMEs with instant credit access." },
];

const FeaturedStartupsSection = () => {
  return (
    <section id="startups" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Showcase</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Featured Startups
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover innovative businesses from across India that are building for Bharat.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {startups.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.1}>
              <div className="rounded-2xl p-6 bg-card border border-border shadow-card hover:shadow-card-hover hover:border-secondary/30 transition-all duration-300 group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-secondary-foreground font-bold font-display text-lg">
                    {s.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-display">{s.name}</h3>
                    <span className="text-xs font-medium text-secondary">{s.category}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-semibold">
            View All Startups <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedStartupsSection;
