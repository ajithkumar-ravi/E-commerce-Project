import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { ArrowLeft, CreditCard, Truck, CheckCircle, Lock, MapPin } from 'lucide-react';
import { cartUtils } from '../mock';
import { useToast } from '../hooks/use-toast';

export const Checkout = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  // Form states
  const [shippingForm, setShippingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    paymentMethod: 'card'
  });

  const [createAccount, setCreateAccount] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCartItems(cartUtils.getCart());
      setCurrentStep(1);
    }
  }, [isOpen]);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { number: 1, title: 'Shipping', icon: Truck },
    { number: 2, title: 'Payment', icon: CreditCard },
    { number: 3, title: 'Confirmation', icon: CheckCircle }
  ];

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCompleteOrder = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart
    cartUtils.clearCart();
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    setIsProcessing(false);
    
    toast({
      title: "Order Completed!",
      description: "Your order has been successfully placed. You will receive a confirmation email shortly.",
    });

    if (onComplete) {
      onComplete({
        orderId: `ORD-${Date.now()}`,
        total: total,
        items: cartItems
      });
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Checkout Panel */}
      <div className="absolute inset-0 bg-white overflow-auto">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onClose}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold">Checkout</h1>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-600">Secure Checkout</span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  currentStep >= step.number
                    ? 'bg-orange-100 text-orange-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <step.icon className="h-4 w-4" />
                  <span className="font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-orange-300' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Shipping Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={shippingForm.firstName}
                          onChange={(e) => setShippingForm({...shippingForm, firstName: e.target.value})}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={shippingForm.lastName}
                          onChange={(e) => setShippingForm({...shippingForm, lastName: e.target.value})}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({...shippingForm, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({...shippingForm, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingForm.address}
                        onChange={(e) => setShippingForm({...shippingForm, address: e.target.value})}
                        placeholder="123 Main St"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={shippingForm.city}
                          onChange={(e) => setShippingForm({...shippingForm, city: e.target.value})}
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={shippingForm.state}
                          onChange={(e) => setShippingForm({...shippingForm, state: e.target.value})}
                          placeholder="NY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={shippingForm.zipCode}
                          onChange={(e) => setShippingForm({...shippingForm, zipCode: e.target.value})}
                          placeholder="10001"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="createAccount"
                        checked={createAccount}
                        onCheckedChange={setCreateAccount}
                      />
                      <Label htmlFor="createAccount" className="text-sm">
                        Create an account for faster checkout next time
                      </Label>
                    </div>

                    <Button 
                      onClick={handleNextStep}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      Continue to Payment
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Payment Methods */}
                    <div>
                      <Label className="text-base font-medium">Payment Method</Label>
                      <RadioGroup 
                        value={paymentForm.paymentMethod} 
                        onValueChange={(value) => setPaymentForm({...paymentForm, paymentMethod: value})}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="cursor-pointer">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="apple" id="apple" />
                          <Label htmlFor="apple" className="cursor-pointer">Apple Pay</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="google" id="google" />
                          <Label htmlFor="google" className="cursor-pointer">Google Pay</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Card Details (only show if card is selected) */}
                    {paymentForm.paymentMethod === 'card' && (
                      <>
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            value={paymentForm.cardName}
                            onChange={(e) => setPaymentForm({...paymentForm, cardName: e.target.value})}
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={paymentForm.cardNumber}
                            onChange={(e) => setPaymentForm({...paymentForm, cardNumber: e.target.value})}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              value={paymentForm.expiryDate}
                              onChange={(e) => setPaymentForm({...paymentForm, expiryDate: e.target.value})}
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              value={paymentForm.cvv}
                              onChange={(e) => setPaymentForm({...paymentForm, cvv: e.target.value})}
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        onClick={handlePreviousStep}
                        className="flex-1"
                      >
                        Back to Shipping
                      </Button>
                      <Button 
                        onClick={handleNextStep}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      >
                        Review Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Order Confirmation */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Order Confirmation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Shipping Summary */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Shipping Address
                      </h3>
                      <p className="text-sm text-gray-600">
                        {shippingForm.firstName} {shippingForm.lastName}<br />
                        {shippingForm.address}<br />
                        {shippingForm.city}, {shippingForm.state} {shippingForm.zipCode}
                      </p>
                    </div>

                    {/* Payment Summary */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Payment Method
                      </h3>
                      <p className="text-sm text-gray-600">
                        {paymentForm.paymentMethod === 'card' && `Card ending in ${paymentForm.cardNumber.slice(-4)}`}
                        {paymentForm.paymentMethod === 'paypal' && 'PayPal'}
                        {paymentForm.paymentMethod === 'apple' && 'Apple Pay'}
                        {paymentForm.paymentMethod === 'google' && 'Google Pay'}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        onClick={handlePreviousStep}
                        className="flex-1"
                        disabled={isProcessing}
                      >
                        Back to Payment
                      </Button>
                      <Button 
                        onClick={handleCompleteOrder}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Processing...' : 'Complete Order'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3 max-h-64 overflow-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 text-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium line-clamp-2">{item.name}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-4 space-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3 w-3 text-green-600" />
                      <span>SSL Encrypted Checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>30-Day Money Back Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};