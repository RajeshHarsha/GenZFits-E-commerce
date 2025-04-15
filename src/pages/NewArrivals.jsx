import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../../redux/slices/productSlice';
import { fetchProducts } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const ProductCard = ({ product, onWishlist, onAddToCart }) => {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(product.price);

  return (
    <motion.div
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
          <p className="text-xl font-bold text-primary mb-4">{formattedPrice}</p>
        </div>
      </Link>
      <div className="flex justify-between p-4 border-t">
        <button
          onClick={(e) => {
            e.preventDefault();
            onWishlist(product);
          }}
          className="text-gray-500 hover:text-primary transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          className="text-gray-500 hover:text-primary transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const NewArrivals = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNewProducts = async () => {
      setIsLoading(true);
      await dispatch(fetchProducts());
      setIsLoading(false);
    };
    fetchNewProducts();
  }, [dispatch]);

  const handleAddToWishlist = (product) => {
    // Implement wishlist functionality
  };

  const handleAddToCart = (product) => {
    // Implement cart functionality
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Filter new products and paginate
  const newProducts = products.filter((product) => product.isNew);
  const totalPages = Math.ceil(newProducts.length / itemsPerPage);
  const displayedProducts = newProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">New Arrivals</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onWishlist={handleAddToWishlist}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {currentPage < totalPages && (
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Load More
          </motion.button>
        </div>
      )}

      {isLoading && (
        <div className="text-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      )}

      {newProducts.length === 0 && !isLoading && (
        <div className="text-center text-gray-500 py-8">
          No new products available at the moment
        </div>
      )}
    </div>
  );
};

export default NewArrivals;