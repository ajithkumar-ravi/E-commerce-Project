import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Shield, Truck, CreditCard, Zap, Award, Users } from 'lucide-react';

export const Hero = ({ onShopNowClick }) => {
  const features = [
    { icon: Shield, text: "Secure Shopping", color: "text-green-500" },
    { icon: Truck, text: "Free Shipping", color: "text-blue-500" },
    { icon: CreditCard, text: "Easy Returns", color: "text-purple-500" }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "4.9★", label: "Rating" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm text-orange-800 border-orange-200 shadow-lg">
              <Award className="mr-2 h-4 w-4 text-orange-500" />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
                #1 Rated Store 2024
              </span>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Discover Amazing
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                  Products
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-normal">
                  That Transform Lives
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Shop from our curated collection of premium products. Quality guaranteed, 
                fast shipping, and exceptional customer service. Join thousands of satisfied customers.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={onShopNowClick}
              >
                <Zap className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg border-2 hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Browse Categories
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-700 group hover:scale-110 transition-transform duration-300">
                  <div className={`p-2 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Enhanced Featured Product Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-xl p-6 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80" 
                      alt="Headphones" 
                      className="w-full h-36 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      SALE
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Premium Audio</h3>
                  <p className="text-sm text-gray-600 mb-2">Starting at <span className="font-bold text-orange-600">$299</span></p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(1,247)</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-xl p-6 transform hover:scale-105 hover:rotate-2 transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80" 
                      alt="Watch" 
                      className="w-full h-36 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      NEW
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Smart Watches</h3>
                  <p className="text-sm text-gray-600 mb-2">Starting at <span className="font-bold text-orange-600">$199</span></p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(892)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div className="bg-white rounded-3xl shadow-xl p-6 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80" 
                      alt="Backpack" 
                      className="w-full h-36 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      HOT
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Fashion</h3>
                  <p className="text-sm text-gray-600 mb-2">Starting at <span className="font-bold text-orange-600">$159</span></p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(789)</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-xl p-6 transform hover:scale-105 hover:rotate-2 transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" 
                      alt="Lamp" 
                      className="w-full h-36 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      ECO
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Home & Living</h3>
                  <p className="text-sm text-gray-600 mb-2">Starting at <span className="font-bold text-orange-600">$79</span></p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(623)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-4 shadow-2xl animate-bounce">
              <Shield className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full p-4 shadow-2xl animate-pulse">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 shadow-2xl animate-ping">
              <Award className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};