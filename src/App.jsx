import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container">
        <Hero />
        <Work />
      </main>
    </LanguageProvider>
  );
}
