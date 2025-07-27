import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import ThemeToggle from "@/components/ThemeToggle";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const DataGovernanceDetails = lazy(() => import("./pages/DataGovernanceDetails"));
const SmartFootfallDetails = lazy(() => import("./pages/SmartFootfallDetails"));
const TechTalkWorkshopDetails = lazy(() => import("./pages/TechTalkWorkshopDetails"));
const AIAutomationCostEstimationDetails = lazy(() => import("./pages/AIAutomationCostEstimationDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
