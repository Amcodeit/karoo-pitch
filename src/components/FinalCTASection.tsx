import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-display mb-6">
            Ready to Pitch Your Startup?
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Join hundreds of founders who are building the future of India. Apply now and take your first step towards funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Apply Now <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              <Handshake className="mr-1 h-5 w-5" /> Partner With Us
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
