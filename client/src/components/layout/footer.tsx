import { Link } from "wouter";
import { Zap, Phone, MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-100">Surya Electrical</h3>
                <p className="text-sm text-zinc-400">& Hardware</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm">
              Best electrical shop in Delhi for electrical items, fan repair, cooler service, geyser repair, electrical fitting, switches, wires, LED lights, and home appliances.
            </p>
            <div className="space-y-1 text-xs text-zinc-500">
              <p><strong>Keywords:</strong> electrical shop Delhi, electrical repair, fan repair, cooler service, electrical contractor, electrical fitting, electrical appliances Sangam Vihar</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-100">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-zinc-400 hover:text-primary transition-colors duration-200 text-sm">
                Home - Electrical Shop Delhi
              </Link>
              <Link href="/products" className="block text-zinc-400 hover:text-primary transition-colors duration-200 text-sm">
                Electrical Products
              </Link>
              <Link href="/services" className="block text-zinc-400 hover:text-primary transition-colors duration-200 text-sm">
                Repair Services
              </Link>
              <Link href="/about" className="block text-zinc-400 hover:text-primary transition-colors duration-200 text-sm">
                About Surya Electrical
              </Link>
              <Link href="/gallery" className="block text-zinc-400 hover:text-primary transition-colors duration-200 text-sm">
                Work Gallery
              </Link>
              <Link href="/contact" className="block text-zinc-400 hover:text-primary transition-colors duration-200 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Products & Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-100">Products & Services</h4>
            <div className="space-y-2">
              <p className="text-zinc-400 text-sm">Fan Repair & Service</p>
              <p className="text-zinc-400 text-sm">Cooler Service & Repair</p>
              <p className="text-zinc-400 text-sm">Geyser Repair Delhi</p>
              <p className="text-zinc-400 text-sm">Electrical Installation</p>
              <p className="text-zinc-400 text-sm">House Wiring</p>
              <p className="text-zinc-400 text-sm">Emergency Electrical Service</p>
              <p className="text-zinc-400 text-sm">Wholesale Electrical Items</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-100">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-zinc-400 text-sm flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                9999318867, 9899774210
              </p>
              <p className="text-zinc-400 text-sm flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Sangam Vihar, New Delhi - 110080
              </p>
              <p className="text-zinc-400 text-sm flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Mon-Sat: 9AM-8PM, Sun: 10AM-6PM
              </p>
            </div>
            <div className="pt-2">
              <h5 className="font-medium text-sm mb-2 text-zinc-100">Service Areas:</h5>
              <p className="text-xs text-zinc-500">
                Delhi NCR, Sangam Vihar, South Delhi, Dwarka, Rohini, East Delhi, West Delhi
              </p>
            </div>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="text-sm font-semibold mb-3 text-zinc-200">Emergency Services</h5>
              <div className="text-xs text-zinc-500 space-y-1">
                <p>24-hour electrician in Sangam Vihar</p>
                <p>Emergency plumber near me</p>
                <p>24/7 hardware store Sangam Vihar</p>
                <p>Urgent electrician in South Delhi</p>
                <p>Fast electrical repair Sangam Vihar</p>
                <p>Emergency electrician Sangam Vihar</p>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-3 text-zinc-200">Electrical Services</h5>
              <div className="text-xs text-zinc-500 space-y-1">
                <p>House wiring services Sangam Vihar</p>
                <p>Fan installation/repair in Sangam Vihar</p>
                <p>MCB and fuse repair near me</p>
                <p>LED light dealers in Sangam Vihar</p>
                <p>Inverter repair Sangam Vihar</p>
                <p>Home electrician services</p>
                <p>Electrical contractor in Sangam Vihar</p>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-3">Hardware & Plumbing</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Hardware shop in Sangam Vihar</p>
                <p>Paint and hardware shop Sangam Vihar</p>
                <p>Plumbing services Sangam Vihar</p>
                <p>Water pipe fitting/leakage repair</p>
                <p>Sanitaryware shop in Sangam Vihar</p>
                <p>DIY hardware tools Sangam Vihar</p>
                <p>Bathroom fitting services</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-zinc-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-zinc-400 text-sm">
                © 2024 Surya Electrical & Hardware. All rights reserved.
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Best Electrical Shop in Delhi | Electrical Repair Services | Fan Repair | Cooler Service | Electrical Fitting
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-zinc-500">Made by</span>
              <a 
                href="https://www.instagram.com/iajayfarenziya/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs text-primary hover:text-primary/90 transition-colors"
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
