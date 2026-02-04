import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ExportSection from "./components/ExportSection";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage.tsx";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "contact">("home");

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" ? (
        <>
          <HeroSection />
          <main>
            <AboutSection />
            <ProductsSection />
            <ExportSection />
          </main>
        </>
      ) : (
        <ContactPage />
      )}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
