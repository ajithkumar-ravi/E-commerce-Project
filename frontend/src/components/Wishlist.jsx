import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { X, Heart, ShoppingCart, Trash2, Star, Calendar } from 'lucide-react';
import { wishlistUtils, cartUtils } from '../mock';
import { useToast } from '../hooks/use-toast';

export const Wishlist = ({ isOpen, onClose }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setWishlistItems(wishlistUtils.getWishlist());
    }
  }, [isOpen]);

  const removeFromWishlist = (productId) => {
    setIsLoading(true);
    const updatedWishlist = wishlistUtils.removeFromWishlist(productId);
    setWishlistItems(updatedWishlist);
    window.dispatchEvent(new CustomEvent('wishlistUpdated'));
    setIsLoading(false);
    
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const moveToCart = (product) => {
    setIsLoading(true);
    const success = wishlistUtils.moveToCart(product.id);
    
    if (success) {
      setWishlistItems(wishlistUtils.getWishlist());
      window.dispatchEvent(new CustomEvent('wishlistUpdated'));
      window.dispatchEvent(new CustomEvent('cartUpdated'));
      
      toast({
        title: "Moved to cart!",
        description: `${product.name} has been added to your cart and removed from wishlist.`,
      });
    }
    
    setIsLoading(false);
  };

  const addToCart = (product) => {
    cartUtils.addToCart(product);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const clearWishlist = () => {
    setIsLoading(true);
    const updatedWishlist = wishlistUtils.clearWishlist();
    setWishlistItems(updatedWishlist);
    window.dispatchEvent(new CustomEvent('wishlistUpdated'));
    setIsLoading(false);
    
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Wishlist Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b bg-gradient-to-r from-pink-50 to-red-50">
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500 fill-current" />
              My Wishlist
              {wishlistItems.length > 0 && (
                <Badge variant="secondary" className="bg-red-100 text-red-700">
                  {wishlistItems.length}
                </Badge>
              )}
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          {/* Wishlist Content */}
          <CardContent className="flex-1 overflow-auto p-0">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <Heart className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-600 mb-6">
                  Start adding products you love to your wishlist
                </p>
                <Button 
                  onClick={onClose} 
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Start Wishlist
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {/* Wishlist Items */}
                {wishlistItems.map((item) => (
                  <div key={item.id} className="group bg-white border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 line-clamp-2 text-sm mb-1">
                          {item.name}
                        </h4>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(item.rating)
                                  ? 'fill-orange-400 text-orange-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">
                            ({item.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-gray-900">
                            ${item.price}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Added Date */}
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                          <Calendar className="h-3 w-3" />
                          <span>Added {formatDate(item.addedDate)}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => moveToCart(item)}
                            disabled={isLoading}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex-1"
                          >
                            <ShoppingCart className="mr-1 h-3 w-3" />
                            Move to Cart
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(item)}
                            disabled={isLoading}
                          >
                            <ShoppingCart className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="flex flex-col justify-start">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-red-500"
                          onClick={() => removeFromWishlist(item.id)}
                          disabled={isLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Wishlist Button */}
                {wishlistItems.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearWishlist}
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                    disabled={isLoading}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Wishlist
                  </Button>
                )}
              </div>
            )}
          </CardContent>

          {/* Footer with Actions */}
          {wishlistItems.length > 0 && (
            <div className="border-t bg-gray-50 p-4 space-y-4">
              {/* Wishlist Summary */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">{wishlistItems.length}</span> 
                  {wishlistItems.length === 1 ? ' item' : ' items'} in your wishlist
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Total value: ${wishlistItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                  size="lg"
                  onClick={() => {
                    // Add all items to cart
                    wishlistItems.forEach(item => cartUtils.addToCart(item));
                    window.dispatchEvent(new CustomEvent('cartUpdated'));
                    toast({
                      title: "All items added to cart!",
                      description: `${wishlistItems.length} items have been added to your cart.`,
                    });
                  }}
                  disabled={isLoading}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add All to Cart
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};