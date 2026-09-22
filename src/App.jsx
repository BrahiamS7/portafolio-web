import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
