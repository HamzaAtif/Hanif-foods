import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";

// Pages - make sure these files exist in src/pages/
import Index from "./pages/Index";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Single QueryClient instance with sensible defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false, // Optional: reduces unnecessary refetches
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <CartProvider>
          <TooltipProvider>
            {/* Toast notifications */}
            <Toaster />
            <Sonner position="top-center" richColors closeButton />

            {/* Router */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />

                {/* 404 fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;