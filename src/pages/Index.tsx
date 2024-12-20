import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-roboto relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Index;