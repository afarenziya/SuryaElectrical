import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/layout/whatsapp-float";
import ScrollToTop from "@/components/layout/scroll-to-top";
import ScrollToTopButton from "@/components/layout/scroll-to-top-button";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTopButton />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
