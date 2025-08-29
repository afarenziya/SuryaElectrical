import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Quote, Star, Wrench, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-gradient text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Surya Electrical & Hardware
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                All Types of Electrical & Electronic Items – Sales, Service & Fitting
              </p>
              <p className="text-lg text-blue-100">
                Trusted shop for quality electrical products, quick repair services, and professional fitting solutions for homes and offices.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9999318867" data-testid="button-call-hero">
                <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 9999318867
                </Button>
              </a>
              <Link href="/contact" data-testid="button-quote-hero">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Quote className="h-5 w-5 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm">Trusted Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-accent" />
                <span className="text-sm">Expert Repairs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm">Quick Service</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern electrical shop interior with organized displays" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating Service Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-foreground p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-primary text-primary-foreground rounded-full p-2">
                  <Wrench className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">24/7 Service</p>
                  <p className="text-xs text-muted-foreground">Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
