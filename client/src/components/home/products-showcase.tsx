import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fan, Plug, Lightbulb, Check, Grid3X3 } from "lucide-react";

export default function ProductsShowcase() {
  const productCategories = [
    {
      icon: Fan,
      title: "Home Appliances",
      subtitle: "Fans, Coolers, Geysers, Mixers",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Ceiling & Table Fans", "Air Coolers & Geysers", "Mixer & Grinders"],
      bgColor: "bg-primary/10 text-primary"
    },
    {
      icon: Plug,
      title: "Electrical Components",
      subtitle: "Switches, Wires, Sockets",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Modular Switches & Sockets", "Electrical Wires & Cables", "MCBs & Distribution Boards"],
      bgColor: "bg-secondary/80 text-secondary-foreground"
    },
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      subtitle: "LED Lights, Tube Lights",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["LED Bulbs & Tube Lights", "Decorative Lighting", "Emergency Lights"],
      bgColor: "bg-accent/10 text-accent-foreground"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wide range of electrical and electronic items for retail and wholesale customers
          </p>
        </div>
        
        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  
                  <div className="flex items-center space-x-3">
                    <div className={`${category.bgColor} rounded-lg p-3`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
                      <p className="text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link href="/products" data-testid="button-view-products">
            <Button size="lg">
              <Grid3X3 className="h-5 w-5 mr-2" />
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
