import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactPreview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get started? Contact us for quotes, services, or any electrical needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Visit Our Store</h4>
                  <p className="text-muted-foreground text-sm" data-testid="text-address-preview">
                    32, K-1st, Gali No. 18, Mangal Bazar Auto Stand,<br />
                    Ratiya Marg, Sangam Vihar, New Delhi – 110080
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Call Us Now</h4>
                  <div className="space-y-1">
                    <a 
                      href="tel:9999318867" 
                      className="block text-muted-foreground hover:text-primary font-medium"
                      data-testid="phone-primary-preview"
                    >
                      +91 9999318867
                    </a>
                    <a 
                      href="tel:9899774210" 
                      className="block text-muted-foreground hover:text-primary font-medium"
                      data-testid="phone-secondary-preview"
                    >
                      +91 9899774210
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                    <p className="text-primary font-medium">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Action Cards */}
          <div className="space-y-6">
            {/* Call Action Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Need Immediate Help?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Call us now for emergency electrical services or quick consultations
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href="tel:9999318867" className="w-full block" data-testid="button-call-preview">
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: 9999318867
                    </Button>
                  </a>
                  <a 
                    href="https://wa.me/919999318867" 
                    target="_blank" 
                    className="w-full block"
                    data-testid="button-whatsapp-preview"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Form Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Request a Call Back</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Fill out our contact form and we'll get back to you within 2 hours
                </p>
                <Link href="/contact" data-testid="button-contact-form">
                  <Button variant="outline" className="w-full">
                    Go to Contact Form
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Find Our Location</h4>
                <div className="bg-muted rounded-lg h-32 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Sangam Vihar, New Delhi</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://maps.google.com/?q=32+K-1st+Gali+No+18+Mangal+Bazar+Auto+Stand+Ratiya+Marg+Sangam+Vihar+New+Delhi+110080" 
                    target="_blank" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                    data-testid="link-google-maps-preview"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}