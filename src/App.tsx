import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/track" element={<AppLayout><div className="p-6"><h1>Track Produce</h1></div></AppLayout>} />
          <Route path="/supply-chain" element={<AppLayout><div className="p-6"><h1>Supply Chain</h1></div></AppLayout>} />
          <Route path="/analytics" element={<AppLayout><div className="p-6"><h1>Analytics</h1></div></AppLayout>} />
          <Route path="/farmer" element={<AppLayout><div className="p-6"><h1>Farmer Portal</h1></div></AppLayout>} />
          <Route path="/distributor" element={<AppLayout><div className="p-6"><h1>Distributor Portal</h1></div></AppLayout>} />
          <Route path="/retailer" element={<AppLayout><div className="p-6"><h1>Retailer Portal</h1></div></AppLayout>} />
          <Route path="/consumer" element={<AppLayout><div className="p-6"><h1>Consumer Portal</h1></div></AppLayout>} />
          <Route path="/settings" element={<AppLayout><div className="p-6"><h1>Settings</h1></div></AppLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;