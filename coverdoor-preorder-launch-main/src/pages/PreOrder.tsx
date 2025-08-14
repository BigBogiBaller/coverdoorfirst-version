import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Shield, Clock, CheckCircle, CreditCard, Building2 } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const PreOrder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    policyType: "",
    paymentMethod: "ach",
    agreedToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Handle form submission here
    alert("Thank you for your pre-order! You will receive a confirmation email shortly with next steps.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
              Reserve Your Policy
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Lock in your rate today - 100% refundable if we don't launch by January 31, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Countdown Timer */}
            <div className="lg:col-span-3 mb-8">
              <CountdownTimer />
            </div>

            {/* Pre-Order Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Reserve Your Insurance Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-secondary">Personal Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Enter your full legal name"
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
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    {/* Policy Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-secondary">Policy Selection</h3>
                      
                      <div className="space-y-2">
                        <Label>Select Insurance Type *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, policyType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your insurance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="homeowners">Homeowners Insurance - $1,200/year</SelectItem>
                            <SelectItem value="renters">Renters Insurance - $300/year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-secondary">Payment Method</h3>
                      
                      <RadioGroup 
                        value={formData.paymentMethod} 
                        onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/20">
                          <RadioGroupItem value="ach" id="ach" />
                          <Label htmlFor="ach" className="flex items-center gap-2 cursor-pointer">
                            <Building2 className="w-4 h-4 text-primary" />
                            ACH Bank Transfer (Preferred)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/20">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                            <CreditCard className="w-4 h-4 text-primary" />
                            Credit/Debit Card
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2 p-4 border rounded-lg bg-accent/10">
                        <Checkbox 
                          id="terms" 
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                        />
                        <div className="space-y-2">
                          <Label htmlFor="terms" className="text-sm cursor-pointer">
                            I agree that my payment of $1,200 (Homeowners) or $300 (Renters) is fully refundable if CoverDoor Insurance Corporation does not launch coverage by January 31, 2026. *
                          </Label>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="link" className="h-auto p-0 text-primary text-sm">
                                View full terms and conditions
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-2xl">
                              <AlertDialogHeader>
                                <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
                                <AlertDialogDescription className="text-left space-y-4">
                                  <p><strong>Pre-Order Refund Policy:</strong></p>
                                  <p>Your payment is 100% refundable if CoverDoor Insurance Corporation does not begin offering coverage by January 31, 2026.</p>
                                  
                                  <p><strong>Pre-Order Benefits:</strong></p>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Rate lock guarantee at pre-order prices</li>
                                    <li>Priority customer status</li>
                                    <li>First access to coverage when available</li>
                                    <li>Exclusive member benefits and discounts</li>
                                  </ul>
                                  
                                  <p><strong>Payment Processing:</strong></p>
                                  <p>Pre-order payments will be securely processed and held in escrow until policy activation or refund.</p>
                                  
                                  <p><strong>Next Steps:</strong></p>
                                  <p>After pre-order completion, you will receive a confirmation email with a secure link to provide your address, phone number, and property details required for policy setup.</p>
                                  
                                  <p className="text-sm text-muted-foreground">This agreement is governed by Delaware state law. By proceeding, you acknowledge reading and understanding these terms.</p>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogAction>I Understand</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full text-lg py-6"
                      disabled={!formData.fullName || !formData.email || !formData.policyType || !formData.agreedToTerms}
                    >
                      Complete Pre-Order
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Policy Type:</span>
                      <span className="font-medium">
                        {formData.policyType === 'homeowners' ? 'Homeowners' : 
                         formData.policyType === 'renters' ? 'Renters' : 'Not Selected'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual Rate:</span>
                      <span className="font-bold text-primary">
                        {formData.policyType === 'homeowners' ? '$1,200' : 
                         formData.policyType === 'renters' ? '$300' : '$0'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Pre-Order Amount:</span>
                      <span>
                        {formData.policyType === 'homeowners' ? '$1,200' : 
                         formData.policyType === 'renters' ? '$300' : '$0'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-secondary">100% Refundable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-secondary">Rate Locked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-secondary">Secure Payment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreOrder;