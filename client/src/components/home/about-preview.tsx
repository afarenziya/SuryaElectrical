import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Truck, IndianRupee, Target, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const trustFactors = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Genuine products from trusted brands"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technicians with experience"
    },
    {
      icon: Truck,
      title: "Quick Service",
      description: "Fast delivery and prompt repairs"
    },
    {
      icon: IndianRupee,
      title: "Best Prices",
      description: "Competitive pricing for all"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Surya Electrical & Hardware</h2>
              <p className="text-xl text-primary font-semibold">
                "Provide reliable electrical solutions at affordable prices"
              </p>
              <p className="text-lg text-muted-foreground">
                Trusted name in Delhi's electrical retail and service industry. We specialize in quality electrical items and professional repair services.
              </p>
            </div>
            
            {/* Trust Factors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-2 flex-shrink-0">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{factor.title}</h4>
                      <p className="text-xs text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Link href="/about" data-testid="button-about-more">
              <Button className="mt-4">
                Learn More About Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          {/* About Image & Mission */}
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Well-organized electrical shop interior" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            {/* Mission Statement Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6" />
                  <h4 className="text-lg font-semibold">Our Mission</h4>
                </div>
                <p className="text-blue-100 text-sm">
                  To provide reliable electrical solutions at affordable prices, ensuring customer satisfaction through quality products and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}