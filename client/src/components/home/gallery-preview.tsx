import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye } from "lucide-react";

export default function GalleryPreview() {
  const featuredImages = [
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Modern electrical shop interior",
      category: "Shop",
      title: "Our Modern Store"
    },
    {
      src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Variety of electrical appliances",
      category: "Products",
      title: "Product Range"
    },
    {
      src: "https://pixabay.com/get/g7f9208ac7071bb3736ae16129447e981afc576ffb2e7d1c903938bb852635ece3558a6ff285879fd094f589bf76b37c62e47a3d5475e027374426f47870a5b9c_1280.jpg",
      alt: "Professional repair work",
      category: "Service",
      title: "Expert Repairs"
    },
    {
      src: "https://pixabay.com/get/g4dc93af5e122cd4c3a21992e7ca7599c49a65f2de6c344bf961743e39a31dc73bc4efd45716de08475b5d2c46e7db683ee69f0206ba992c064ccc923bb1ae74c_1280.jpg",
      alt: "Electrical installation work",
      category: "Service",
      title: "Installation Work"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our shop, products, and the quality work we deliver to customers across Delhi
          </p>
        </div>
        
        {/* Featured Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredImages.map((image, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              data-testid={`gallery-preview-${index}`}
            >
              <CardContent className="p-0 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <Badge variant="secondary" className="mb-1 text-xs">
                    {image.category}
                  </Badge>
                  <h3 className="text-white text-sm font-medium">{image.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary" data-testid="stat-customers">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary" data-testid="stat-products">1000+</div>
            <div className="text-sm text-muted-foreground">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary" data-testid="stat-experience">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
        
        {/* View Gallery Button */}
        <div className="text-center">
          <Link href="/gallery" data-testid="button-view-gallery">
            <Button size="lg">
              View Complete Gallery
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}