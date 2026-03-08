import { ShoppingBag, Cpu, Factory, Layers, Package, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { icon: ShoppingBag, label: "D2C Brands" },
  { icon: Layers, label: "Consumer Startups" },
  { icon: Factory, label: "MSMEs" },
  { icon: Cpu, label: "SaaS Startups" },
  { icon: Package, label: "Manufacturing" },
  { icon: MapPin, label: "Bharat-Focused Startups" },
];

const WhoCanApplySection = () => {
  return (
    <section id="who-can-apply" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Eligibility</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4">
            Who Can Apply?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Early-stage founders building real businesses across these categories are welcome to pitch.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-secondary/30 transition-all duration-300 group cursor-default h-full">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <cat.icon className="h-8 w-8 text-secondary" />
                </div>
                <span className="font-semibold text-foreground font-display text-center">{cat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApplySection;
