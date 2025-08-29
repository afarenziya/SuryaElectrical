import { Link } from "wouter";
import { Zap, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Surya Electrical</h3>
                <p className="text-sm text-muted-foreground">& Hardware</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Trusted electrical solutions provider in Delhi. Quality products, expert services, affordable prices.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary text-sm">
                Home
              </Link>
              <Link href="/products" className="block text-muted-foreground hover:text-primary text-sm">
                Products
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary text-sm">
                Services
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary text-sm">
                About Us
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Electrical Repairs</p>
              <p className="text-muted-foreground text-sm">Installation & Fitting</p>
              <p className="text-muted-foreground text-sm">Emergency Service</p>
              <p className="text-muted-foreground text-sm">Wholesale Supply</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                9999318867, 9899774210
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Sangam Vihar, New Delhi
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Mon-Sat: 9AM-8PM
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Surya Electrical & Hardware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
