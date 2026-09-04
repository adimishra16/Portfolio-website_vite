import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { portfolioData } from "@/content/portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home data={portfolioData} />} />
            <Route path="/projects" element={<Projects data={portfolioData} />} />
            <Route path="/about" element={<About data={portfolioData} />} />
            <Route path="/contact" element={<Contact data={portfolioData} />} />
            <Route path="/classic" element={<Navigate to="/" replace />} />
            <Route path="/classic/*" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer name={portfolioData.personal.name} social={portfolioData.social} />
      </div>
    </BrowserRouter>
  );
};

export default App;
