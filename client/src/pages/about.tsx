import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Truck, IndianRupee, Target } from "lucide-react";

export default function About() {
  const trustFactors = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Genuine products from trusted brands with warranty support"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technicians with years of experience"
    },
    {
      icon: Truck,
      title: "Quick Service",
      description: "Fast delivery and prompt repair services"
    },
    {
      icon: IndianRupee,
      title: "Best Prices",
      description: "Competitive pricing for retail and wholesale"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Happy Customers", value: "500+" },
    { label: "Products Range", value: "1000+" }
  ];

  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">About Surya Electrical & Hardware</h1>
              <p className="text-xl text-primary font-semibold">
                "Provide reliable electrical solutions at affordable prices"
              </p>
              <p className="text-lg text-muted-foreground">
                Surya Electrical & Hardware is a trusted name in Delhi's electrical retail and service industry. We specialize in providing quality electrical and electronic items along with professional repair and installation services.
              </p>
            </div>
            
            {/* Trust Factors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full p-2">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h4 className="font-semibold">{factor.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </div>
                );
              })}
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* About Image */}
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Well-organized electrical shop interior with wide product range" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            {/* Mission Statement Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8" />
                  <h4 className="text-xl font-semibold">Our Mission</h4>
                </div>
                <p className="text-blue-100">
                  To provide reliable electrical solutions at affordable prices, ensuring customer satisfaction through quality products and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
