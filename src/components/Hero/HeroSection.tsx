import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Truck, Users, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-4 py-2 text-primary-foreground text-sm font-medium shadow-glow">
                <Shield className="h-4 w-4" />
                Blockchain-Powered Transparency
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Farm to Fork
                </span>
                <br />
                Supply Chain Tracking
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolutionizing agricultural transparency with blockchain technology. 
                Track your produce from harvest to consumer, ensuring fair pricing 
                and authentic quality at every step.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Tracking
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Products Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Farmers Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Transparency Rate</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-fresh rounded-lg shadow-soft">
                    <QrCode className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">QR Code Tracking</h3>
                    <p className="text-muted-foreground">
                      Scan any product to see its complete journey from farm to your table.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-earth rounded-lg shadow-soft">
                    <Truck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Real-time Updates</h3>
                    <p className="text-muted-foreground">
                      Monitor your produce at every stage with blockchain-verified updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-harvest rounded-lg shadow-soft">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Stakeholder Network</h3>
                    <p className="text-muted-foreground">
                      Connect farmers, distributors, retailers, and consumers in one platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}