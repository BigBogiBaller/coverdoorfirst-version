import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Have questions? We're here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Get in Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Send us a message and we'll respond as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full text-lg py-6"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Contact Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-secondary">Email</div>
                        <div className="text-muted-foreground">support@coverdoor.com</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-secondary">Phone</div>
                        <div className="text-muted-foreground">1-800-COVERDOOR</div>
                        <div className="text-sm text-muted-foreground">(1-800-268-3736)</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-secondary">Address</div>
                        <div className="text-muted-foreground">
                          123 Insurance Way<br />
                          Wilmington, DE 19801
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-secondary">Business Hours</div>
                        <div className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                          Saturday: 9:00 AM - 3:00 PM EST<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      Stay connected for updates, tips, and insurance insights
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="w-10 h-10">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-10 h-10">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-10 h-10">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-10 h-10">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-secondary">Need Immediate Help?</h3>
                    <p className="text-sm text-muted-foreground">
                      For urgent pre-order questions or technical support, call us directly or send an email.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Pre-order Support:</span> 
                        <span className="text-primary"> preorder@coverdoor.com</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Technical Support:</span> 
                        <span className="text-primary"> tech@coverdoor.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about CoverDoor Insurance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">When will coverage begin?</h3>
                  <p className="text-muted-foreground text-sm">
                    We plan to launch coverage by January 31, 2026. All pre-order customers will be notified first and have priority access.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">What if you don't launch by the deadline?</h3>
                  <p className="text-muted-foreground text-sm">
                    Your pre-order payment is 100% refundable if we don't begin offering coverage by January 31, 2026.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">How do I provide property details?</h3>
                  <p className="text-muted-foreground text-sm">
                    After completing your pre-order, you'll receive an email with a secure link to provide your address, phone, and property information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">Can I change my policy type later?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can modify your policy type anytime before launch. Contact our support team for assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;