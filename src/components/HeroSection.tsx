import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            A KaroStartup Initiative
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 font-display"
          >
            Pitch Your Startup to India's{" "}
            <span className="text-secondary">Top Investors.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Karo Pitch is where founders from across India — especially from Tier-2 & Tier-3 cities — pitch their startups, connect with investors, and raise funding to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Apply to Pitch <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Explore Startups
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/50 text-sm"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground font-display">500+</div>
              <div>Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground font-display">50+</div>
              <div>Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground font-display">₹10Cr+</div>
              <div>Funding Facilitated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
