import { HeroSection } from "@/components/Hero/HeroSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of farmers, distributors, and retailers building a transparent agricultural ecosystem.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/dashboard">
                Go to Dashboard
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
