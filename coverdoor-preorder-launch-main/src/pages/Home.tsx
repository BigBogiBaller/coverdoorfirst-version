import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, TrendingDown, Clock, CheckCircle } from "lucide-react";
import safeHomeHero from "@/assets/safe-home-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                  CoverDoor's Got You Covered!
                </h1>
                <h2 className="text-xl lg:text-2xl text-secondary font-medium">
                  Save More on Home Insurance
                </h2>
                <p className="text-lg text-secondary leading-relaxed">
                  Reserve your $1,200/year policy today—refundable if we don't launch by January 31, 2026
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="cta" size="lg" className="text-lg px-8 py-6">
                  <Link to="/pre-order">Reserve Now</Link>
                </Button>
                <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={safeHomeHero} 
                alt="Safe family home representing insurance protection"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-lg">
                <Shield className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Why Pay More?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare our affordable rates with traditional insurance companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-destructive/20 relative">
              <CardContent className="p-8 text-center">
                <div className="text-sm font-medium text-destructive mb-2">Traditional Insurance</div>
                <div className="text-4xl font-bold text-destructive mb-4">$1,800</div>
                <div className="text-muted-foreground">per year</div>
                <TrendingDown className="w-8 h-8 text-destructive mx-auto mt-4" />
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                Best Value
              </div>
              <CardContent className="p-8 text-center">
                <div className="text-sm font-medium text-primary mb-2">CoverDoor Insurance</div>
                <div className="text-4xl font-bold text-primary mb-4">$1,200</div>
                <div className="text-muted-foreground">per year</div>
                <div className="text-sm font-bold text-primary mt-2">Save $600!</div>
                <CheckCircle className="w-8 h-8 text-primary mx-auto mt-4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Why Choose CoverDoor?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Same Coverage</h3>
                <p className="text-muted-foreground">
                  Full protection for your home with comprehensive coverage you can trust
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Lower Prices</h3>
                <p className="text-muted-foreground">
                  Save hundreds of dollars per year without compromising on quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Quick Setup</h3>
                <p className="text-muted-foreground">
                  Reserve your policy today and secure your rate for launch
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Save on Your Home Insurance?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of homeowners who are securing their affordable insurance rates today
            </p>
            <Button asChild variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link to="/pre-order">Reserve Your Policy Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;