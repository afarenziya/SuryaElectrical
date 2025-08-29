import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fan, Plug, Lightbulb, Zap, Wind, Droplet, Repeat1, Gauge, Home } from "lucide-react";

export default function Products() {
  const productCategories = [
    {
      icon: Fan,
      title: "Home Appliances",
      description: "Complete range of home electrical appliances",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
      products: [
        { name: "Ceiling Fans", price: "₹2,500 - ₹8,000", features: ["Energy Efficient", "Remote Control", "LED Lights"] },
        { name: "Table Fans", price: "₹1,200 - ₹3,500", features: ["Adjustable Speed", "Timer Function", "Low Noise"] },
        { name: "Air Coolers", price: "₹8,000 - ₹25,000", features: ["Large Water Tank", "Remote Control", "Ice Chamber"] },
        { name: "Water Geysers", price: "₹5,000 - ₹15,000", features: ["ISI Marked", "5 Star Rating", "Auto Cut-off"] },
        { name: "Repeat1 Grinders", price: "₹3,000 - ₹8,000", features: ["Multiple Jars", "Overload Protection", "Sharp Blades"] },
      ]
    },
    {
      icon: Plug,
      title: "Electrical Components",
      description: "Quality electrical fittings and components",
      color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
      products: [
        { name: "Modular Switches", price: "₹150 - ₹500", features: ["Premium Finish", "ISI Certified", "10A Rating"] },
        { name: "Electrical Wires", price: "₹80 - ₹200/meter", features: ["Pure Copper", "ISI Standard", "Fire Resistant"] },
        { name: "Power Sockets", price: "₹200 - ₹800", features: ["Universal Design", "Child Safety", "High Quality"] },
        { name: "MCB & RCCB", price: "₹300 - ₹1,500", features: ["Trip Protection", "Easy Installation", "Durable"] },
        { name: "Distribution Boards", price: "₹2,000 - ₹8,000", features: ["Metal Body", "Multiple Ways", "Safe Design"] },
      ]
    },
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      description: "Modern LED and traditional lighting options",
      color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400",
      products: [
        { name: "LED Bulbs", price: "₹150 - ₹800", features: ["Energy Saving", "Long Life", "Cool White/Warm White"] },
        { name: "LED Tube Lights", price: "₹300 - ₹1,200", features: ["High Brightness", "Flicker Free", "Easy Installation"] },
        { name: "Panel Lights", price: "₹800 - ₹2,500", features: ["Slim Design", "Uniform Light", "Driver Included"] },
        { name: "Street Lights", price: "₹2,000 - ₹8,000", features: ["Weather Proof", "High Wattage", "Long Range"] },
        { name: "Emergency Lights", price: "₹500 - ₹2,000", features: ["Battery Backup", "Auto On/Off", "Bright LEDs"] },
      ]
    },
    {
      icon: Zap,
      title: "Power Solutions",
      description: "Inverters, UPS and power backup solutions",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
      products: [
        { name: "Home Inverters", price: "₹8,000 - ₹25,000", features: ["Pure Sine Wave", "Fast Charging", "Digital Display"] },
        { name: "UPS Systems", price: "₹5,000 - ₹20,000", features: ["Online/Offline", "Battery Backup", "Surge Protection"] },
        { name: "Stabilizers", price: "₹2,000 - ₹8,000", features: ["Voltage Regulation", "Overload Protection", "LED Indicators"] },
        { name: "Batteries", price: "₹8,000 - ₹25,000", features: ["Deep Cycle", "Maintenance Free", "Long Backup"] },
        { name: "Solar Panels", price: "₹25,000 - ₹1,00,000", features: ["High Efficiency", "25 Year Warranty", "Grid Tie"] },
      ]
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of electrical and electronic items for all your needs - retail and wholesale available
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-12">
          {productCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${category.color} rounded-lg p-3`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <Card key={productIndex} className="hover:shadow-md transition-shadow" data-testid={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <CardHeader>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <div className="text-primary font-semibold text-xl">{product.price}</div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact for Wholesale */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Wholesale Pricing Available</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Looking for bulk quantities? We offer competitive wholesale pricing for dealers, contractors, and bulk buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9999318867" className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors" data-testid="button-wholesale-call">
                <Home className="h-5 w-5 mr-2" />
                Call for Wholesale: 9999318867
              </a>
              <a href="https://wa.me/919999318867" target="_blank" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors" data-testid="button-wholesale-whatsapp">
                <Wind className="h-5 w-5 mr-2" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
