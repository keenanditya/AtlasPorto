import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import project1 from "@assets/generated_images/urban_planning_gis_interface.png";
import project2 from "@assets/generated_images/remote_sensing_vegetation_analysis.png";
import project3 from "@assets/generated_images/3d_terrain_analysis_model.png";

// Using duplicate images for demo purposes, in real app would be unique
const projects = [
  {
    id: 1,
    title: "Urban Heat Island Analysis",
    category: "GIS Analysis",
    image: project1,
    description: "Analyzing thermal patterns in metropolitan areas to identify intervention zones for green infrastructure.",
    tags: ["ArcGIS Pro", "Python", "Urban Planning"]
  },
  {
    id: 2,
    title: "Vegetation Health Monitoring",
    category: "Remote Sensing",
    image: project2,
    description: "Using multispectral satellite imagery to track seasonal vegetation changes in the Amazon basin.",
    tags: ["QGIS", "Sentinel-2", "NDVI"]
  },
  {
    id: 3,
    title: "Alpine Terrain Modeling",
    category: "3D Cartography",
    image: project3,
    description: "High-resolution digital elevation models for avalanche risk assessment in the Swiss Alps.",
    tags: ["Blender", "DEM", "Terrain Analysis"]
  },
  {
    id: 4,
    title: "Hydrological Network Mapping",
    category: "Spatial Data Science",
    image: project1, // Reusing for layout
    description: "Automated extraction of river networks from LiDAR data for flood modeling applications.",
    tags: ["R Spatial", "LiDAR", "Hydrology"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-muted-foreground max-w-md">
              A collection of geospatial projects exploring the intersection of data, environment, and design.
            </p>
          </div>
          <div className="h-px bg-border flex-1 mx-8 hidden md:block opacity-50" />
          <div className="text-right hidden md:block">
            <span className="text-primary font-mono">01 — 04</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/project/${project.id}`} className="block">
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-transparent border-none shadow-none overflow-hidden rounded-none">
                  <CardContent className="p-0 relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                    />
                  </CardContent>
                  <div className="pt-6 border-t border-border mt-0 group-hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-mono text-primary uppercase tracking-wider">{project.category}</span>
                      <span className="text-muted-foreground text-xs">2024</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="rounded-none border-border/50 text-muted-foreground text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
