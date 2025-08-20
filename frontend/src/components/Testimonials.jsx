import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Digital Marketing Manager",
      company: "TechCorp Inc.",
      rating: 5,
      review: "Absolutely incredible experience! The product quality exceeded my expectations, and the customer service was outstanding. I've already recommended ShopHub to all my colleagues.",
      date: "2024-01-15",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
      product: "Premium Wireless Headphones",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "StartupXYZ",
      rating: 5,
      review: "Fast shipping, excellent packaging, and the product works flawlessly. The attention to detail is remarkable. This is now my go-to store for tech products.",
      date: "2024-01-10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      product: "Smart Fitness Watch",
      verified: true
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Creative Director",
      company: "Design Studio",
      rating: 5,
      review: "The design and functionality are perfect. I love how thoughtful every aspect of the shopping experience is. Will definitely be a returning customer!",
      date: "2024-01-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      product: "Professional Camera Lens",
      verified: true
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Photographer",
      company: "Freelance",
      rating: 5,
      review: "Outstanding build quality and performance. The customer support team went above and beyond to help me choose the right product. Highly recommended!",
      date: "2024-01-05",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      product: "Minimalist Desk Lamp",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Business Owner",
      company: "Thompson Consulting",
      rating: 5,
      review: "Exceptional service from start to finish. The product arrived exactly as described and the quality is superb. This store has earned a customer for life!",
      date: "2024-01-02",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
      product: "Luxury Leather Backpack",
      verified: true
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-300 to-red-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-red-300 to-orange-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm text-orange-800 border-orange-200 shadow-lg mb-6">
            <Users className="mr-2 h-4 w-4 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing customers have to say about their experience with ShopHub.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-sm text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="relative inline-block">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-100 shadow-lg"
                    />
                    {currentTestimonial.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                        <Award className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                    <p className="text-orange-600 font-medium">{currentTestimonial.role}</p>
                    <p className="text-gray-600 text-sm">{currentTestimonial.company}</p>
                    <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 h-8 w-8 text-orange-200" />
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6 relative z-10">
                      "{currentTestimonial.review}"
                    </blockquote>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-semibold border-orange-200 text-orange-700 bg-orange-50">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Purchased: {currentTestimonial.product}
                      </Badge>
                      {currentTestimonial.verified && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{currentTestimonial.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Join thousands of satisfied customers today
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Shopping Now
          </Button>
        </div>
      </div>
    </section>
  );
};