import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// NEW: Import the APIProvider for Google Maps
import { APIProvider } from "@vis.gl/react-google-maps";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import ReportIssue from "./pages/ReportIssue";
import ExploreIssues from "./pages/ExploreIssues";
import IssueDetail from "./pages/IssueDetail";
import MyReports from "./pages/MyReports";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// It's recommended to load the API key from environment variables
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY";

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* NEW: Wrap the entire app with APIProvider */}
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/report" element={<ReportIssue />} />
                <Route path="/explore" element={<ExploreIssues />} />
                <Route path="/issue/:id" element={<IssueDetail />} />
                <Route path="/my-reports" element={<MyReports />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </APIProvider>
  </QueryClientProvider>
);

export default App;
