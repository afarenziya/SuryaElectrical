import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, HardHat, Fan, Snowflake, Droplet, Shirt, Home, Building, Clock, Shield, Phone, AlertTriangle } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional repair services and electrical fitting solutions for homes and offices
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Repair Services */}
          <Card className="service-card hover:shadow-lg">
            <CardContent className="p-8 space-y-6">
              <img 
                src="https://pixabay.com/get/g7f9208ac7071bb3736ae16129447e981afc576ffb2e7d1c903938bb852635ece3558a6ff285879fd094f589bf76b37c62e47a3d5475e027374426f47870a5b9c_1280.jpg" 
                alt="Professional electrical repair technician working on appliances" 
                className="w-full h-48 object-cover rounded-lg"
              />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Repair Services</h3>
                </div>
                
                <p className="text-muted-foreground">
                  Expert repair services for all types of electrical and electronic appliances with quick turnaround time.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center text-sm">
                    <Fan className="h-4 w-4 text-primary mr-2" />
                    Fan Repair
                  </div>
                  <div className="flex items-center text-sm">
                    <Snowflake className="h-4 w-4 text-primary mr-2" />
                    Cooler Service
                  </div>
                  <div className="flex items-center text-sm">
                    <Droplet className="h-4 w-4 text-primary mr-2" />
                    Geyser Repair
                  </div>
                  <div className="flex items-center text-sm">
                    <Shirt className="h-4 w-4 text-primary mr-2" />
                    Washing Machine
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Quick Service
                  </div>
                  <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80" data-testid="button-book-service">
                    Book Service →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Installation & Fitting */}
          <Card className="service-card hover:shadow-lg">
            <CardContent className="p-8 space-y-6">
              <img 
                src="https://pixabay.com/get/g4dc93af5e122cd4c3a21992e7ca7599c49a65f2de6c344bf961743e39a31dc73bc4efd45716de08475b5d2c46e7db683ee69f0206ba992c064ccc923bb1ae74c_1280.jpg" 
                alt="Professional electrical installation and wiring work" 
                className="w-full h-48 object-cover rounded-lg"
              />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent text-accent-foreground rounded-full p-3">
                    <HardHat className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Installation & Fitting</h3>
                </div>
                
                <p className="text-muted-foreground">
                  Professional electrical fitting and installation services for residential and commercial properties.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center text-sm">
                    <Home className="h-4 w-4 text-primary mr-2" />
                    House Wiring
                  </div>
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-primary mr-2" />
                    Office Setup
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-primary mr-2" />
                    Switch Installation
                  </div>
                  <div className="flex items-center text-sm">
                    <Fan className="h-4 w-4 text-primary mr-2" />
                    Light Fitting
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Licensed Work
                  </div>
                  <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80" data-testid="button-get-quote">
                    Get Quote →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Emergency Service Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-300" />
              <h3 className="text-2xl font-bold">Emergency Service Available</h3>
            </div>
            <p className="text-red-100 max-w-2xl mx-auto">
              Need urgent electrical repair? We provide 24/7 emergency support for critical electrical issues.
            </p>
            <a href="tel:9999318867" data-testid="button-emergency-call">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Call: 9999318867
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
