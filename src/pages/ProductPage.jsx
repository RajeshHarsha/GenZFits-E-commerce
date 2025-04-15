import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatPrice } from '../utils/currencyFormatter';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const isProductInWishlist = useSelector((state) => 
    state.wishlist.items.some(item => item.id === parseInt(id))
  );

  useEffect(() => {
    // In a real app, this would fetch the product from an API
    const products = [
      {
        id: 1,
        name: "Oversized Graphic Tee",
        price: 1499,
        discount: 0,
        rating: 4.5,
        reviewCount: 124,
        description: "Express your unique style with our premium oversized graphic tee. Made from 100% organic cotton for maximum comfort and durability. Features a relaxed fit with dropped shoulders and a bold graphic print that's perfect for casual everyday wear.",
        details: [
          "100% organic cotton",
          "Relaxed, oversized fit",
          "Dropped shoulders",
          "Ribbed crew neck",
          "Machine washable"
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Navy", "Olive"],
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        ],
        category: "Men's Fashion",
        tags: ["tshirt", "graphic", "oversized", "cotton"],
        inStock: true,
        sku: "MT-OGT-BLK-M"
      }
    ];

    const relatedProductsData = [
      {
        id: 2,
        name: "Distressed Denim Jacket",
        price: 3999,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        category: "Men's Fashion",
        rating: 4.8,
        reviewCount: 92
      },
      {
        id: 3,
        name: "Cargo Pants",
        price: 2499,
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        category: "Men's Fashion",
        rating: 4.6,
        reviewCount: 78
      },
      {
        id: 4,
        name: "Beanie Hat",
        price: 999,
        image: "https://images.unsplash.com/photo-1576871337632-98d48d1cf531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        category: "Accessories",
        rating: 4.9,
        reviewCount: 112
      },
      {
        id: 5,
        name: "High-Top Sneakers",
        price: 4499,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        category: "Footwear",
        rating: 4.7,
        reviewCount: 85
      }
    ];

    const selectedProduct = products.find(p => p.id === parseInt(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
      setRelatedProducts(relatedProductsData);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Validate required fields
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }

    // Create cart item with selected options
    const cartItem = {
      ...product,
      quantity: quantity,
      selectedSize,
      selectedColor,
      image: product.images[0] // Use first image as default
    };

    dispatch(addToCart(cartItem));
  };

  const handleWishlist = () => {
    if (!product) return;
    if (isProductInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors duration-300">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors duration-300">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-square"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      activeImage === index 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 tracking-tight"
            >
              {product.name}
            </motion.h1>

            {/* Price and Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                {product.discount > 0 && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.price + (product.price * product.discount / 100))}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(product.rating) 
                          ? 'fill-current' 
                          : 'stroke-current fill-none'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500">{product.rating}</span>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Product Details</h3>
                <ul className="space-y-1 text-gray-600">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2"
            >
              <h3 className="font-semibold text-gray-900">Available Sizes</h3>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`px-4 py-2 rounded-full text-sm border-2 transition-all duration-300 ${
                      selectedSize === size 
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <h3 className="font-semibold text-gray-900">Available Colors</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color 
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                    color.toLowerCase() === 'black' ? '#000000' : 
                                    color.toLowerCase() === 'navy' ? '#000080' : 
                                    color.toLowerCase() === 'olive' ? '#808000' : color.toLowerCase(),
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <motion.button 
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-primary text-white py-4 px-8 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
                  disabled={!selectedSize || !selectedColor}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {selectedSize && selectedColor ? 'Add to Cart' : 'Please select size and color'}
                </motion.button>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                    className="w-10 h-10 bg-gray-100 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                  >
                    -
                  </motion.button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(parseInt(e.target.value), 1))}
                    className="w-16 h-10 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 bg-gray-100 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <motion.button 
                onClick={handleWishlist}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {isProductInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* You May Also Like */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                      <div className="ml-4 flex items-center">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`h-4 w-4 ${
                                star <= Math.floor(product.rating) 
                                  ? 'fill-current' 
                                  : 'stroke-current fill-none'
                              }`}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
                        <span className="ml-2 text-sm text-gray-500">({product.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
