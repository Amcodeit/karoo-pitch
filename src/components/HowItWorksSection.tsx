import { FileText, CheckCircle, Presentation, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: FileText, title: "Apply with Your Pitch Deck", desc: "Submit your business details and pitch deck through our simple application form." },
  { icon: CheckCircle, title: "Get Shortlisted", desc: "Our team at KaroStartup reviews applications and shortlists promising startups." },
  { icon: Presentation, title: "Pitch Live to Investors", desc: "Present your startup in a structured pitch session in front of curated investors." },
  { icon: TrendingUp, title: "Raise Funding & Scale", desc: "Connect with interested investors, close deals, and take your business to the next level." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            How It Works
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12}>
              <div className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-2xl gradient-accent mx-auto flex items-center justify-center mb-6 shadow-hero group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-9 w-9 text-secondary-foreground" />
                </div>
                <div className="text-sm font-bold text-secondary mb-2 font-display">Step {i + 1}</div>
                <h3 className="text-lg font-bold text-foreground font-display mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
