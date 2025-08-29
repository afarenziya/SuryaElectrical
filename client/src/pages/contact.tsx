import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch for quotes, services, or any electrical needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Address</h4>
                  <p className="text-muted-foreground" data-testid="text-address">
                    32, K-1st, Gali No. 18, Mangal Bazar Auto Stand,<br />
                    Ratiya Marg, Sangam Vihar,<br />
                    New Delhi – 110080
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Phone Numbers</h4>
                  <div className="space-y-1">
                    <a 
                      href="tel:9999318867" 
                      className="block text-muted-foreground hover:text-primary"
                      data-testid="phone-primary"
                    >
                      +91 9999318867
                    </a>
                    <a 
                      href="tel:9899774210" 
                      className="block text-muted-foreground hover:text-primary"
                      data-testid="phone-secondary"
                    >
                      +91 9899774210
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                    <p className="text-primary font-medium">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <a href="tel:9999318867" className="w-full block" data-testid="button-call-primary">
                <Button className="w-full" size="lg">
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now: 9999318867
                </Button>
              </a>
              <a 
                href="https://wa.me/919999318867" 
                target="_blank" 
                className="w-full block"
                data-testid="button-whatsapp-contact"
              >
                <Button 
                  variant="outline" 
                  className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>
          
          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Map */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Google Maps Integration</p>
                    <p className="text-sm">Sangam Vihar, New Delhi</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://share.google/2PldaNNFZInyW1uip" 
                    target="_blank" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    data-testid="link-google-maps"
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
    </div>
  );
}
