import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Star, ShoppingCart, Heart, Eye, Filter, Grid, List, Zap, TrendingUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { mockProducts, mockCategories, cartUtils, wishlistUtils } from '../mock';
import { useToast } from '../hooks/use-toast';

export const ProductGrid = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy]);

  const handleAddToCart = (product) => {
    cartUtils.addToCart(product);
    // Trigger custom event to update cart count
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = (product) => {
    const isInWishlist = wishlistUtils.isInWishlist(product.id);
    wishlistUtils.toggleWishlist(product);
    
    // Trigger custom event to update wishlist count
    window.dispatchEvent(new CustomEvent('wishlistUpdated'));
    
    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist!",
      description: isInWishlist 
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };

  const ProductCard = ({ product }) => {
    const discountPercentage = product.originalPrice 
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;

    const isInWishlist = wishlistUtils.isInWishlist(product.id);

    return (
      <Card 
        className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 bg-white relative"
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative overflow-hidden">
          {/* Enhanced Product Image with advanced hover effects */}
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 ${
                hoveredProduct === product.id 
                  ? 'scale-110 rotate-1 brightness-110' 
                  : 'scale-100 rotate-0 brightness-100'
              }`}
            />
            
            {/* Enhanced Image Overlay with gradient animation */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-all duration-500 ${
              hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Animated shine effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ${
              hoveredProduct === product.id 
                ? 'translate-x-full opacity-100' 
                : '-translate-x-full opacity-0'
            }`} />
          </div>

          {/* Enhanced Sale Badge */}
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-lg">
                <Zap className="mr-1 h-3 w-3" />
                -{discountPercentage}%
              </Badge>
            </div>
          )}

          {/* Trending Badge for high rated products */}
          {product.rating >= 4.7 && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              TRENDING
            </div>
          )}

          {/* Enhanced Quick Actions with staggered animation */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-500 ${
            hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <Button 
              size="icon" 
              variant="secondary" 
              className={`bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-125 transition-all duration-300 hover:rotate-12 ${
                isInWishlist ? 'text-red-500 shadow-red-200' : 'text-gray-500'
              }`}
              onClick={() => handleToggleWishlist(product)}
              style={{
                animationDelay: hoveredProduct === product.id ? '100ms' : '0ms'
              }}
            >
              <Heart className={`h-4 w-4 transition-all duration-300 ${
                isInWishlist ? 'fill-current scale-110' : 'hover:scale-110'
              }`} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-125 transition-all duration-300 hover:-rotate-12"
              style={{
                animationDelay: hoveredProduct === product.id ? '200ms' : '0ms'
              }}
            >
              <Eye className="h-4 w-4 text-blue-500 hover:text-blue-600 transition-colors duration-300" />
            </Button>
          </div>

          {/* Enhanced Add to Cart Overlay */}
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-all duration-500 ${
            hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        <CardContent className="p-6 space-y-3">
          {/* Enhanced Product Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors text-lg leading-tight">
              {product.name}
            </h3>
            
            {/* Enhanced Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 transition-colors duration-300 ${
                        i < Math.floor(product.rating)
                          ? 'fill-orange-400 text-orange-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {product.rating}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Enhanced Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm font-bold text-green-600">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Enhanced Category Badge */}
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-xs font-semibold border-orange-200 text-orange-700 bg-orange-50">
                {product.category}
              </Badge>
              {product.inStock && (
                <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  In Stock
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm text-orange-800 border-orange-200 shadow-lg mb-6">
            <TrendingUp className="mr-2 h-4 w-4 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
              Trending Products
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium products, 
            each selected for quality, style, and exceptional value.
          </p>
        </div>

        {/* Enhanced Filters and Controls */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 items-start sm:items-center justify-between bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex flex-wrap gap-4">
            {/* Enhanced Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px] border-2 hover:border-orange-300 transition-colors">
                <Filter className="mr-2 h-4 w-4 text-orange-500" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {mockCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Enhanced Sort Filter */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px] border-2 hover:border-orange-300 transition-colors">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">⭐ Featured</SelectItem>
                <SelectItem value="newest">🆕 Newest</SelectItem>
                <SelectItem value="price-low">💰 Price: Low to High</SelectItem>
                <SelectItem value="price-high">💎 Price: High to Low</SelectItem>
                <SelectItem value="rating">🏆 Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Enhanced View Mode Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={`transition-all duration-300 ${viewMode === 'grid' ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : ''}`}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={`transition-all duration-300 ${viewMode === 'list' ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : ''}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced Load More Button */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-12 py-4 text-lg border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};