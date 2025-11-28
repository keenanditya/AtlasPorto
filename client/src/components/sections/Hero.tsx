import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/abstract_topographic_map_dark_theme.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Topographic Map Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest mb-6">
              GIS & REMOTE SENSING
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
              Visualizing <span className="text-primary">Spatial</span> <br />
              Complexity.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              I bridge the gap between raw data and visual storytelling through creative mapmaking, remote sensing, and spatial analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none text-lg px-8 h-14"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-accent/10 hover:text-foreground hover:border-primary rounded-none text-lg px-8 h-14"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
