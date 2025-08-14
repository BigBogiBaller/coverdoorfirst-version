import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, TrendingDown, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
              About CoverDoor Insurance Corporation
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Protecting your home with fair, affordable insurance since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    At CoverDoor Insurance Corporation, we know you've worked hard to earn your home—don't let sky-high prices bully you. We offer the same coverage for way less, starting at $1,200/year. Based in Delaware since 2025, we protect your home with fair insurance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these fundamental principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-secondary">Protection First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your home's security is our top priority. We provide comprehensive coverage that truly protects what matters most to you.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-secondary">Fair Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe quality insurance shouldn't break the bank. Our transparent pricing saves you money without hidden fees.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-secondary">Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every customer deserves exceptional service. We're here to support you when you need us most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Built on Trust, Powered by Innovation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Founded in Delaware in 2025, CoverDoor Insurance Corporation was created with a simple mission: to make quality home insurance accessible to everyone.
                </p>
                <p className="text-lg">
                  We recognized that hardworking families were being forced to choose between comprehensive coverage and affordable rates. That's why we built CoverDoor—to prove that you can have both.
                </p>
                <p className="text-lg">
                  Our innovative approach to insurance combines cutting-edge technology with old-fashioned customer service, delivering the protection you need at prices that make sense.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-8 rounded-2xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-secondary">Why Delaware?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-muted-foreground">Business-friendly regulatory environment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-muted-foreground">Strong legal framework for insurance companies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-muted-foreground">Central location for serving the East Coast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Join the CoverDoor Family?
            </h2>
            <p className="text-xl text-white/90">
              Experience the difference of fair, affordable home insurance
            </p>
            <Button asChild variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link to="/pre-order">Reserve Your Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;