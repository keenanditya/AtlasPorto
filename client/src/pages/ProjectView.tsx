import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, Layers, Database, Download } from "lucide-react";
import { Button } from "./components/ui/button";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Badge } from "./components/ui/badge";

// Import images
import project1 from ".assets/generated_images/urban_planning_gis_interface.png";
import project2 from ".assets/generated_images/remote_sensing_vegetation_analysis.png";
import project3 from ".assets/generated_images/3d_terrain_analysis_model.png";

// Mock data dictionary
const projectsData = {
  "1": {
    title: "Urban Heat Island Analysis",
    subtitle: "Metropolitan Thermal Mapping & Intervention Strategy",
    category: "GIS Analysis",
    image: project1,
    date: "October 2024",
    tools: ["ArcGIS Pro", "Python (ArcPy)", "Landsat 8 Data", "Adobe Illustrator"],
    overview: "This project quantifies the intensity of the Urban Heat Island (UHI) effect across the metropolitan area, identifying vulnerable neighborhoods where surface temperatures exceed regional averages by 5°C or more.",
    challenge: "Rapid urbanization has replaced natural land cover with dense impervious surfaces, trapping heat and creating microclimates that pose health risks to residents. The challenge was to precisely isolate these hotspots using remotely sensed thermal data and correlate them with socio-economic factors.",
    solution: "I utilized Landsat 8 Thermal Infrared Sensor (TIRS) data to calculate Land Surface Temperature (LST). A multi-criteria decision analysis was then performed, integrating vegetation density (NDVI), building footprint density, and demographic data to prioritize areas for green infrastructure interventions.",
    results: [
      "Identified 12 critical neighborhoods requiring immediate heat mitigation.",
      "Produced a comprehensive vulnerability index map for city planners.",
      "Proposed 3 strategic green corridor placements that would reduce local LST by an estimated 2.5°C."
    ]
  },
  "2": {
    title: "Vegetation Health Monitoring",
    subtitle: "Temporal Analysis of Amazonian Deforestation",
    category: "Remote Sensing",
    image: project2,
    date: "August 2024",
    tools: ["QGIS", "Sentinel-2", "Google Earth Engine", "R"],
    overview: "A long-term monitoring project tracking vegetation health indices in the Amazon basin to detect illegal logging activities before they result in complete clear-cutting.",
    challenge: "Traditional monitoring often relies on cloud-free optical imagery which is rare in tropical regions. Additionally, subtle degradation is harder to detect than clear-cutting.",
    solution: "I implemented a time-series analysis using Sentinel-2 imagery, calculating NDVI and EVI indices. I utilized Google Earth Engine to create cloud-free composites and developed an anomaly detection algorithm to flag sudden drops in vegetation health.",
    results: [
      "Mapped 500+ hectares of previously unreported degradation.",
      "Developed a reproducible script for continuous monitoring.",
      "Visualized seasonal trends to distinguish natural phenology from anthropogenic impact."
    ]
  },
  "3": {
    title: "Alpine Terrain Modeling",
    subtitle: "Avalanche Risk Assessment & Visualization",
    category: "3D Cartography",
    image: project3,
    date: "June 2024",
    tools: ["Blender", "QGIS", "DEM Data", "Python"],
    overview: "Creating high-fidelity 3D terrain models to simulate and visualize potential avalanche paths in the Swiss Alps for ski resort safety planning.",
    challenge: "Communicating complex terrain risks to non-technical stakeholders requires intuitive visualization. Standard 2D contour maps often fail to convey the steepness and ruggedness of the terrain effectively.",
    solution: "I processed high-resolution LiDAR DEMs in QGIS to derive slope and aspect maps. These were then imported into Blender to create photorealistic 3D renderings with overlaid risk zones, making the data accessible and visually striking.",
    results: [
      "Created a 3D interactive web scene for stakeholder presentations.",
      "Identified 3 high-risk ski runs requiring additional barriers.",
      "Produced a series of 4k renderings for the project final report."
    ]
  },
  "4": {
    title: "Hydrological Network Mapping",
    subtitle: "Automated Stream Extraction from LiDAR",
    category: "Spatial Data Science",
    image: project1,
    date: "May 2024",
    tools: ["R Spatial", "WhiteboxTools", "LiDAR"],
    overview: "Developing an automated workflow to extract detailed stream networks from raw LiDAR point clouds to improve flood risk modeling.",
    challenge: "Standard hydrographic datasets were outdated and lacked the resolution to capture small tributaries which contribute significantly to flash floods.",
    solution: "I used WhiteboxTools within an R environment to process raw LiDAR data, generating a hydro-conditioned DEM. Flow accumulation algorithms were then used to delineate stream channels with high precision.",
    results: [
      "Improved stream network accuracy by 40% compared to national datasets.",
      "Automated the processing pipeline, reducing analysis time from days to hours.",
      "Generated critical input data for a regional flood simulation model."
    ]
  }
};

export default function ProjectView() {
  const [match, params] = useRoute("/project/:id");
  const id = params?.id;
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Project Hero */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mt-16 md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 container mx-auto">
          <Link href="/#portfolio">
            <a className="inline-flex items-center text-sm text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </a>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="rounded-none border-primary text-primary bg-primary/10 px-3 py-1">
              {project.category}
            </Badge>
            <span className="text-muted-foreground flex items-center text-sm">
              <Calendar className="w-3 h-3 mr-2" />
              {project.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold max-w-3xl leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl font-light">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar / Meta */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-card p-8 border border-border sticky top-24">
              <h3 className="font-display font-bold text-lg mb-6 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-primary" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-background border border-border text-sm text-muted-foreground">
                    {tool}
                  </span>
                ))}
              </div>
              
              <h3 className="font-display font-bold text-lg mb-6 flex items-center">
                <Database className="w-5 h-5 mr-2 text-primary" />
                Deliverables
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li>• High-Resolution Maps (PDF)</li>
                <li>• Spatial Database (PostGIS)</li>
                <li>• Technical Report</li>
              </ul>

              <Button className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                Download Project Brief
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground border-l-4 border-primary pl-4">Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-xl font-display font-bold mb-4 text-foreground">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </section>
              <section>
                <h3 className="text-xl font-display font-bold mb-4 text-foreground">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </div>

            <section className="bg-secondary/5 border border-secondary/20 p-8">
              <h3 className="text-xl font-display font-bold mb-6 text-foreground">Key Results</h3>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary font-mono mr-4">0{i + 1}</span>
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Image Gallery Grid would go here */}
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="aspect-video bg-card border border-border flex items-center justify-center text-muted-foreground/50">
                 Analysis Layer 1
               </div>
               <div className="aspect-video bg-card border border-border flex items-center justify-center text-muted-foreground/50">
                 Analysis Layer 2
               </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
