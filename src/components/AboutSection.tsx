import { Target, Users, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const features = [
    { icon: Target, title: "Bridge the Gap", desc: "Connecting Bharat's founders with India's top investors through curated pitch events." },
    { icon: Users, title: "Inclusive Access", desc: "Founders from Tier-2, Tier-3 cities and beyond get equal opportunity to shine." },
    { icon: Globe, title: "Discovery Platform", desc: "Building India's most accessible startup discovery and funding ecosystem." },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">About Karo Pitch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display mb-6">
            Empowering Bharat's Founders
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thousands of founders are building amazing businesses but lack access to investors. Karo Pitch connects these founders with investors through curated pitch events and a discovery platform — making fundraising accessible for everyone.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.15}>
              <div className="group rounded-2xl p-8 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 h-full">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <f.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-display mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
