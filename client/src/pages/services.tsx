import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, HardHat, AlertTriangle, Clock, Shield, Phone, CheckCircle, Zap } from "lucide-react";

export default function Services() {
  const repairServices = [
    {
      name: "Fan Repair & Service",
      price: "₹300 - ₹800",
      duration: "Same Day",
      description: "Complete fan repair including motor rewinding, blade balancing, and speed control fixing",
      features: ["Motor Rewinding", "Bearing Replacement", "Speed Control Repair", "Noise Reduction"]
    },
    {
      name: "Air Cooler Service",
      price: "₹500 - ₹1,200",
      duration: "2-4 Hours",
      description: "Thorough cooler cleaning, pump repair, and cooling pad replacement",
      features: ["Deep Cleaning", "Pump Repair", "Pad Replacement", "Water Tank Cleaning"]
    },
    {
      name: "Geyser Repair",
      price: "₹600 - ₹1,500",
      duration: "3-6 Hours",
      description: "Professional geyser repair including element replacement and thermostat fixing",
      features: ["Element Replacement", "Thermostat Repair", "Tank Cleaning", "Safety Check"]
    },
    {
      name: "Washing Machine Service",
      price: "₹800 - ₹2,000",
      duration: "4-8 Hours",
      description: "Complete washing machine repair including motor, pump, and control board issues",
      features: ["Motor Repair", "Pump Replacement", "Control Board Fix", "Drum Cleaning"]
    },
    {
      name: "Mixer Grinder Repair",
      price: "₹400 - ₹1,000",
      duration: "2-4 Hours",
      description: "Mixer repair including motor winding, jar replacement, and blade sharpening",
      features: ["Motor Rewinding", "Jar Repair", "Blade Sharpening", "Switch Replacement"]
    }
  ];

  const installationServices = [
    {
      name: "House Wiring",
      price: "₹80 - ₹150/point",
      duration: "1-3 Days",
      description: "Complete electrical wiring for new constructions and rewiring for old houses",
      features: ["ISI Wire Used", "Proper Earthing", "MCB Installation", "Safety Testing"]
    },
    {
      name: "Office Electrical Setup",
      price: "₹5,000 - ₹25,000",
      duration: "2-5 Days",
      description: "Professional office electrical installation including lighting and power points",
      features: ["Modular Wiring", "LED Lighting", "Power Backup", "Network Points"]
    },
    {
      name: "Switch & Socket Installation",
      price: "₹150 - ₹500/point",
      duration: "1-2 Hours",
      description: "Installation of modular switches, sockets, and electrical accessories",
      features: ["Modular Switches", "Universal Sockets", "USB Charging Points", "Dimmer Switches"]
    },
    {
      name: "Light Fitting & Fans",
      price: "₹200 - ₹800/unit",
      duration: "1-3 Hours",
      description: "Professional installation of lights, fans, and decorative fixtures",
      features: ["Ceiling Fans", "LED Lights", "Decorative Lights", "Remote Control Setup"]
    },
    {
      name: "Distribution Board Setup",
      price: "₹2,000 - ₹8,000",
      duration: "4-8 Hours",
      description: "Installation and configuration of electrical distribution boards with proper safety",
      features: ["MCB Installation", "RCCB Protection", "Proper Labeling", "Safety Testing"]
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional electrical repair and installation services with experienced technicians and quality assurance
          </p>
        </div>

        {/* Repair Services Section */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center space-x-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-3">
              <Wrench className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Repair Services</h2>
              <p className="text-muted-foreground">Expert repair for all electrical appliances with warranty</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow" data-testid={`repair-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{service.price}</span>
                    <Badge variant="outline" className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" data-testid={`button-book-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Installation Services Section */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center space-x-4">
            <div className="bg-accent text-accent-foreground rounded-lg p-3">
              <HardHat className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Installation & Fitting</h2>
              <p className="text-muted-foreground">Professional electrical installation with safety certification</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow" data-testid={`installation-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{service.price}</span>
                    <Badge variant="outline" className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" data-testid={`button-quote-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Licensed Technicians</h3>
            <p className="text-sm text-muted-foreground">All our technicians are trained and certified professionals</p>
          </Card>
          <Card className="text-center p-6">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Service Warranty</h3>
            <p className="text-sm text-muted-foreground">30-day warranty on all repair services and installations</p>
          </Card>
          <Card className="text-center p-6">
            <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quick Response</h3>
            <p className="text-sm text-muted-foreground">Same day service available for most repairs</p>
          </Card>
        </div>

        {/* Emergency Service */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-300" />
              <h3 className="text-2xl font-bold">24/7 Emergency Service</h3>
            </div>
            <p className="text-red-100 max-w-2xl mx-auto">
              Electrical emergency? Don't worry! Our emergency service team is available round the clock for critical electrical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9999318867" className="inline-flex items-center px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors" data-testid="button-emergency-call">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: 9999318867
              </a>
              <a href="tel:9899774210" className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors" data-testid="button-emergency-call-2">
                <Zap className="h-5 w-5 mr-2" />
                Alternate: 9899774210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
