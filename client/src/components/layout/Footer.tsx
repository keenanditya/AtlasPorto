import { Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Faishol Abdul Jabar. All rights reserved.</p>
        <p>Designed with React & Tailwind</p>
      </div>
    </footer>
  );
}
