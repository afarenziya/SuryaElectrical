import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern electrical shop storefront",
      category: "Shop",
      title: "Our Modern Store"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Variety of electrical appliances on display",
      category: "Products",
      title: "Appliance Display"
    },
    {
      src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Ceiling fans and cooling solutions",
      category: "Products",
      title: "Fans & Coolers"
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Electrical switches and wiring components",
      category: "Products",
      title: "Switches & Wiring"
    },
    {
      src: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "LED lights and modern lighting fixtures",
      category: "Products",
      title: "LED Lighting Solutions"
    },
    {
      src: "https://pixabay.com/get/g7f9208ac7071bb3736ae16129447e981afc576ffb2e7d1c903938bb852635ece3558a6ff285879fd094f589bf76b37c62e47a3d5475e027374426f47870a5b9c_1280.jpg",
      alt: "Professional electrical repair work",
      category: "Service",
      title: "Appliance Repair"
    },
    {
      src: "https://pixabay.com/get/g4dc93af5e122cd4c3a21992e7ca7599c49a65f2de6c344bf961743e39a31dc73bc4efd45716de08475b5d2c46e7db683ee69f0206ba992c064ccc923bb1ae74c_1280.jpg",
      alt: "Electrical installation and wiring work",
      category: "Service",
      title: "Installation Work"
    },
    {
      src: "https://pixabay.com/get/g9b09ae771b803e6a393c6f9f1e23b17be26ffa90b23c41af5318cbba779f4fe44104f2627b41052599f0183ad2bf56cb8c41123ecb80906483862ecd92fdbb04_1280.jpg",
      alt: "Professional house wiring installation",
      category: "Service",
      title: "House Wiring"
    },
    {
      src: "https://pixabay.com/get/g959557d1800e5f564d04201f2aae24f7a02789c0ca46c55134ec031395152ff590c39063e5f9473c73c6913db895838a76748c243334f6368959c36a815b5a56_1280.jpg",
      alt: "Complete electrical setup for offices",
      category: "Service",
      title: "Office Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Well-organized electrical shop interior",
      category: "Shop",
      title: "Product Organization"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Electrical tools and equipment",
      category: "Tools",
      title: "Professional Tools"
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Customer service and consultation",
      category: "Service",
      title: "Customer Consultation"
    }
  ];

  const categories = ["All", "Shop", "Products", "Service", "Tools"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our shop, products, and the quality work we deliver to our customers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {filteredImages.map((image, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
              data-testid={`gallery-image-${index}`}
            >
              <CardContent className="p-0 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        {/* Business Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <h3 className="font-semibold mb-2">Happy Customers</h3>
            <p className="text-sm text-muted-foreground">Satisfied customers across Delhi NCR</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <h3 className="font-semibold mb-2">Products</h3>
            <p className="text-sm text-muted-foreground">Wide range of electrical items</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <h3 className="font-semibold mb-2">Years Experience</h3>
            <p className="text-sm text-muted-foreground">Trusted service since 2014</p>
          </Card>
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70"
                  onClick={() => setSelectedImage(null)}
                  data-testid="button-close-lightbox"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
