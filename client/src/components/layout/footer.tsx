import { Link } from "wouter";
import { Zap, Phone, MapPin, Clock, Instagram } from "lucide-react";

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
              Best electrical shop in Delhi for electrical items, fan repair, cooler service, geyser repair, electrical fitting, switches, wires, LED lights, and home appliances.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p><strong>Keywords:</strong> electrical shop Delhi, electrical repair, fan repair, cooler service, electrical contractor, electrical fitting, electrical appliances Sangam Vihar</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary text-sm">
                Home - Electrical Shop Delhi
              </Link>
              <Link href="/products" className="block text-muted-foreground hover:text-primary text-sm">
                Electrical Products
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary text-sm">
                Repair Services
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary text-sm">
                About Surya Electrical
              </Link>
              <Link href="/gallery" className="block text-muted-foreground hover:text-primary text-sm">
                Work Gallery
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary text-sm">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Products & Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Products & Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Fan Repair & Service</p>
              <p className="text-muted-foreground text-sm">Cooler Service & Repair</p>
              <p className="text-muted-foreground text-sm">Geyser Repair Delhi</p>
              <p className="text-muted-foreground text-sm">Electrical Installation</p>
              <p className="text-muted-foreground text-sm">House Wiring</p>
              <p className="text-muted-foreground text-sm">Emergency Electrical Service</p>
              <p className="text-muted-foreground text-sm">Wholesale Electrical Items</p>
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
                Sangam Vihar, New Delhi - 110080
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Mon-Sat: 9AM-8PM, Sun: 10AM-6PM
              </p>
            </div>
            <div className="pt-2">
              <h5 className="font-medium text-sm mb-2">Service Areas:</h5>
              <p className="text-xs text-muted-foreground">
                Delhi NCR, Sangam Vihar, South Delhi, Dwarka, Rohini, East Delhi, West Delhi
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Surya Electrical & Hardware. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Best Electrical Shop in Delhi | Electrical Repair Services | Fan Repair | Cooler Service | Electrical Fitting
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Made by</span>
              <a 
                href="https://www.instagram.com/iajayfarenziya/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
                data-testid="developer-credit"
              >
                <Instagram className="h-3 w-3" />
                <span>Ajay Farenziya</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
