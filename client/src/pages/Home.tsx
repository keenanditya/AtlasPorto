  // import SiteNavbar from "../components/SiteNavbar"; // <--- KASIH GARIS MIRING DUA DI DEPANNYA
  import Hero from "../components/Hero";
  import Portfolio from "../components/Portfolio";
  import About from "../components/About";
  import Contact from "../components/Contact";
  import Footer from "../components/Footer";

  export default function Home() {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
        {/* <SiteNavbar /> */}  {/* <--- KURUNG INI JUGA DIKOMENTARIN/HAPUS AJA */}

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