import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import DataGovernanceDetails from "./pages/DataGovernanceDetails";
import SmartFootfallDetails from "./pages/SmartFootfallDetails";
import TechTalkWorkshopDetails from "./pages/TechTalkWorkshopDetails";
import AIAutomationCostEstimationDetails from "./pages/AIAutomationCostEstimationDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider delayDuration={300} skipDelayDuration={100}>
        <Toaster />
        <Sonner />
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/data-engineering-journey" element={<ProjectDetails />} />
            <Route path="/project/data-governance" element={<DataGovernanceDetails />} />
            <Route path="/project/smart-footfall-dashboard" element={<SmartFootfallDetails />} />
            <Route path="/project/tech-talk-workshop" element={<TechTalkWorkshopDetails />} />
            <Route path="/project/ai-automation-cost-estimation" element={<AIAutomationCostEstimationDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
