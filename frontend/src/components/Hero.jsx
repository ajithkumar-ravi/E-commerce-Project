import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Shield, Truck, CreditCard } from 'lucide-react';

export const Hero = ({ onShopNowClick }) => {
  const features = [
    { icon: Shield, text: "Secure Shopping" },
    { icon: Truck, text: "Free Shipping" },
    { icon: CreditCard, text: "Easy Returns" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 border-orange-200">
              <Star className="mr-2 h-4 w-4" />
              Rated #1 Online Store
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Discover Amazing
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Shop from our curated collection of premium products. Quality guaranteed, 
                fast shipping, and exceptional customer service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg"
                onClick={onShopNowClick}
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
              >
                Browse Categories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <feature.icon className="h-5 w-5 text-orange-500" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-900">4.8/5</span>
                  </div>
                  <p className="text-sm text-gray-600">from 10,000+ customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Featured Product Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80" 
                    alt="Headphones" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">Premium Audio</h3>
                  <p className="text-sm text-gray-600">Starting at $299</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80" 
                    alt="Watch" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">Smart Watches</h3>
                  <p className="text-sm text-gray-600">Starting at $199</p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80" 
                    alt="Backpack" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">Fashion</h3>
                  <p className="text-sm text-gray-600">Starting at $159</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" 
                    alt="Lamp" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">Home & Living</h3>
                  <p className="text-sm text-gray-600">Starting at $79</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg animate-bounce">
              <Shield className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-500 text-white rounded-full p-3 shadow-lg animate-pulse">
              <Star className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};