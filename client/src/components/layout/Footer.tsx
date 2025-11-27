import { Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6">
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Atlas GIS Portfolio. All rights reserved.</p>
          <p>Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
