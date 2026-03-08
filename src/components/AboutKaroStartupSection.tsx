import { Newspaper, Users, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: Newspaper, value: "5,000+", label: "Startup Stories Published" },
  { icon: Users, value: "100K+", label: "Founder Community" },
  { icon: BookOpen, value: "5 Years", label: "Of Startup Storytelling" },
];

const AboutKaroStartupSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">The Platform Behind</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-6">
                About KaroStartup
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KaroStartup is one of India's largest startup media platforms, dedicated to sharing founder journeys and inspiring the next generation of entrepreneurs across Bharat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 5 years, KaroStartup has published thousands of startup stories, built a thriving founder community, and now launches <span className="font-semibold text-foreground">Karo Pitch</span> — to go beyond storytelling and directly help founders raise funding.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} direction="right" delay={i * 0.15}>
                  <div className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border shadow-card">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <stat.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground font-display">{stat.value}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKaroStartupSection;
