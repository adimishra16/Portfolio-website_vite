import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [data, setData] = useState<any>(null);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Load data from data.json
    fetch("/data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        if (jsonData.theme?.darkMode) {
          setTheme("dark");
          document.documentElement.classList.add("dark");
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/projects" element={<Projects data={data} />} />
                <Route path="/about" element={<About data={data} />} />
                <Route path="/contact" element={<Contact data={data} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer social={data.social} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
