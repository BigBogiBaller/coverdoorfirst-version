import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
              Our Insurance Products
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Comprehensive coverage at unbeatable prices
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Homeowners Insurance */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors hover:shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-secondary">Homeowners Insurance</CardTitle>
                <div className="text-4xl font-bold text-primary">$1,200</div>
                <div className="text-muted-foreground">per year</div>
                <Badge variant="secondary" className="w-fit mx-auto">
                  <Clock className="w-3 h-3 mr-1" />
                  Available after launch
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">What's Covered:</h4>
                  <div className="space-y-2">
                    {[
                      "Dwelling protection up to policy limits",
                      "Personal property coverage",
                      "Liability protection",
                      "Additional living expenses",
                      "Medical payments coverage",
                      "Natural disaster protection"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild variant="cta" className="w-full" size="lg">
                    <Link to="/pre-order">Pre-Order Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Renters Insurance */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors hover:shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-secondary">Renters Insurance</CardTitle>
                <div className="text-4xl font-bold text-primary">$300</div>
                <div className="text-muted-foreground">per year</div>
                <Badge variant="secondary" className="w-fit mx-auto">
                  <Clock className="w-3 h-3 mr-1" />
                  Available after launch
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">What's Covered:</h4>
                  <div className="space-y-2">
                    {[
                      "Personal property protection",
                      "Liability coverage",
                      "Additional living expenses",
                      "Medical payments to others",
                      "Loss of use coverage",
                      "Identity theft protection"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild variant="cta" className="w-full" size="lg">
                    <Link to="/pre-order">Pre-Order Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Why Choose CoverDoor Products?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products are designed with you in mind—comprehensive, affordable, and reliable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Comprehensive Coverage</h3>
                <p className="text-muted-foreground">
                  Full protection that covers what matters most, from your property to your liability
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees, no surprises. What you see is what you pay—guaranteed
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Quick Claims</h3>
                <p className="text-muted-foreground">
                  Fast, hassle-free claims processing when you need us most
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pre-order Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/10">
              <CardContent className="p-12">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-secondary">Pre-Order Benefits</h2>
                  <p className="text-lg text-muted-foreground">
                    Reserve your policy today and lock in these exclusive advantages
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-muted-foreground">Lock in $1,200 rate (Homeowners)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-muted-foreground">Lock in $300 rate (Renters)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-muted-foreground">Priority customer status</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-muted-foreground">100% refundable if we don't launch</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-muted-foreground">First access to coverage</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-muted-foreground">Exclusive member benefits</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="cta" size="lg" className="text-lg px-8 py-6 mt-8">
                    <Link to="/pre-order">Reserve Your Policy Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;