import { Check } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "ArcGIS Pro & Online",
  "QGIS & GRASS GIS",
  "Python (ArcPy, GeoPandas)",
  "Remote Sensing (ENVI, Erdas)",
  "SQL & PostGIS",
  "Cartographic Design",
  "Web Mapping (Leaflet, Mapbox)",
  "LiDAR Data Processing"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Mapping the unseen <br />
              <span className="text-muted-foreground">patterns of our world.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Geography student with a deep passion for spatial analysis and visualization. My work sits at the intersection of technical precision and aesthetic clarity.
              </p>
              <p>
                With a background in environmental science and advanced training in GIS technologies, I help organizations understand their data through a spatial lens. Whether it's tracking urban sprawl, analyzing vegetation health, or modeling flood risks, I believe that a well-crafted map can reveal truths that spreadsheets cannot.
              </p>
              <p>
                Currently, I am focusing on integrating machine learning workflows with satellite imagery to automate land cover classification in rapidly changing environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-background p-8 md:p-10 border border-border relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-primary" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-primary" />
            
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Technical Toolkit</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex justify-between text-sm">
                <div>
                  <span className="block text-muted-foreground mb-1">Education</span>
                  <span className="font-display font-bold text-lg">B.S. Geography</span>
                </div>
                <div className="text-right">
                  <span className="block text-muted-foreground mb-1">Focus</span>
                  <span className="font-display font-bold text-lg">Geospatial Science</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
