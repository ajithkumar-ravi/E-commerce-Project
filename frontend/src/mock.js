// Mock data for the e-commerce landing page

export const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "Advanced fitness tracking with heart rate monitoring"
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 1099.99,
    rating: 4.9,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&q=80",
    category: "Photography",
    inStock: true,
    description: "Ultra-sharp 85mm portrait lens for professional photography"
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 623,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    category: "Home",
    inStock: true,
    description: "Sleek LED desk lamp with adjustable brightness"
  },
  {
    id: 5,
    name: "Luxury Leather Backpack",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    category: "Fashion",
    inStock: true,
    description: "Handcrafted leather backpack with laptop compartment"
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 1156,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "Fast wireless charging for all compatible devices"
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 934,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&q=80",
    category: "Home",
    inStock: true,
    description: "Set of 4 handcrafted ceramic mugs in elegant colors"
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "Portable speaker with 360-degree sound and waterproof design"
  },
  {
    id: 9,
    name: "Designer Sunglasses",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    category: "Fashion",
    inStock: true,
    description: "UV protection sunglasses with titanium frame"
  },
  {
    id: 10,
    name: "Smart Home Hub",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "Central control for all your smart home devices"
  },
  {
    id: 11,
    name: "Yoga Mat Premium",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviews: 823,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
    category: "Fitness",
    inStock: true,
    description: "Non-slip premium yoga mat with carrying strap"
  },
  {
    id: 12,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 1089,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    category: "Lifestyle",
    inStock: true,
    description: "Insulated water bottle that keeps drinks cold for 24 hours"
  },
  {
    id: 13,
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "RGB mechanical keyboard with custom switches"
  },
  {
    id: 14,
    name: "Essential Oil Diffuser",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
    category: "Home",
    inStock: true,
    description: "Ultrasonic aromatherapy diffuser with LED lighting"
  },
  {
    id: 15,
    name: "Portable Power Bank",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviews: 923,
    image: "https://images.unsplash.com/photo-1609592424775-89f1ae46eb4e?w=500&q=80",
    category: "Electronics",
    inStock: true,
    description: "20,000mAh power bank with fast charging technology"
  }
];

export const mockCategories = [
  "All Products",
  "Electronics",
  "Fashion",
  "Home",
  "Photography",
  "Fitness",
  "Lifestyle"
];

export const mockReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review: "Absolutely love this product! Exceeded my expectations in every way.",
    date: "2024-01-15",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    review: "Great quality and fast shipping. Will definitely order again!",
    date: "2024-01-10",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 4,
    review: "Very satisfied with my purchase. Good value for money.",
    date: "2024-01-08",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  }
];

// Cart utilities for local storage
export const cartUtils = {
  getCart: () => {
    const cart = localStorage.getItem('ecommerce-cart');
    return cart ? JSON.parse(cart) : [];
  },
  
  setCart: (cart) => {
    localStorage.setItem('ecommerce-cart', JSON.stringify(cart));
  },
  
  addToCart: (product, quantity = 1) => {
    const cart = cartUtils.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    cartUtils.setCart(cart);
    return cart;
  },
  
  removeFromCart: (productId) => {
    const cart = cartUtils.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    cartUtils.setCart(updatedCart);
    return updatedCart;
  },
  
  updateQuantity: (productId, quantity) => {
    const cart = cartUtils.getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        return cartUtils.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        cartUtils.setCart(cart);
      }
    }
    
    return cart;
  },
  
  clearCart: () => {
    localStorage.removeItem('ecommerce-cart');
    return [];
  },
  
  getCartTotal: () => {
    const cart = cartUtils.getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getCartItemCount: () => {
    const cart = cartUtils.getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
};