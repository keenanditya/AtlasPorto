import { Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Faishol Abdul Jabr. All rights reserved.</p>
        <p>Made with Replit, Netlify, & Gemini</p>
      </div>
    </footer>
  );
}
