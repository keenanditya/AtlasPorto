// 👇 1. MATIIN BARIS INI (PENTING BANGET)
// import SiteNavbar from "../components/SiteNavbar"; 

import Hero from "../components/HeroSection";
import Portfolio from "../components/PortfolioSection";
import About from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Footer from "../components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">

      {/* 👇 2. MATIIN JUGA YANG INI (Biar gak error di layar) */}
      {/* <SiteNavbar /> */}

      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}