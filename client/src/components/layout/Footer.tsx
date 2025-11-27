import { Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-display font-bold tracking-tight mb-4">
              <Map className="w-6 h-6 text-primary" />
              <span>ATLAS</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Mapping the world through data, design, and technology.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Behance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@atlas-gis.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Atlas GIS Portfolio. All rights reserved.</p>
          <p>Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
