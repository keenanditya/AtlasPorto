import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import About from "../About/components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
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
