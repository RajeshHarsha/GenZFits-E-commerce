import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  const handleRemoveFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Wishlist</h1>
        <div className="text-center text-gray-500">
          Your wishlist is empty. Start adding items you love!
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-xl font-bold text-primary mb-4">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(product.price)}
                </p>
              </div>
            </Link>
            <div className="flex justify-between p-4 border-t">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveFromWishlist(product);
                }}
                className="text-red-500 hover:text-red-600 transition-colors duration-300"
              >
                Remove
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Add to cart functionality
                }}
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;