import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchProducts } from '../redux/slices/productSlice';
import { formatPrice } from '../utils/currencyFormatter';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  
  // Local state for filters and sorting
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  
  // Available filter options
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Green', 'Yellow', 'Navy', 'Olive'];
  
  // Get category name for display
  const getCategoryName = () => {
    switch(categoryId) {
      case 'mens':
        return "Men's Fashion";
      case 'womens':
        return "Women's Fashion";
      case 'footwear':
        return "Footwear";
      case 'accessories':
        return "Accessories";
      case 'beauty':
        return "Skin & Beauty";
      default:
        return "Products";
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products by category
  const categoryProducts = items.filter(product => {
    const categoryMap = {
      'mens': "Men's Fashion",
      'womens': "Women's Fashion",
      'footwear': "Footwear",
      'accessories': "Accessories",
      'beauty': "Skin & Beauty"
    };
    
    return product.category === categoryMap[categoryId];
  });

  // Apply additional filters (price, size, color)
  const filteredProducts = categoryProducts.filter(product => {
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // In a real app, we would have size and color data for each product
    // For now, we'll just return true for these filters
    return true;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id; // Using ID as a proxy for date in our mock data
      default: // 'featured'
        return b.isNew ? 1 : -1; // New items first
    }
  });

  // Handle filter changes
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleColorToggle = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Debug information
  console.log('CategoryPage rendered');
  console.log('categoryId:', categoryId);
  console.log('items:', items);
  console.log('status:', status);
  console.log('categoryProducts:', categoryProducts);

  return (
    <div className="category-page py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{getCategoryName()}</span>
          </div>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">{getCategoryName()}</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover our latest collection of {getCategoryName().toLowerCase()} designed for the modern GenZ. 
            From trendy styles to timeless classics, find the perfect pieces to express your unique style.
          </p>
        </div>

        {/* Category Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold mb-6">Filters</h2>
              
              {/* Sort By */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Sort By</h3>
                <select 
                  value={sortBy}
                  onChange={handleSortChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">-</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Max"
                  />
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`py-2 px-3 text-sm font-medium rounded-md ${
                        selectedSizes.includes(size)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      } focus:outline-none`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorToggle(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColors.includes(color)
                          ? 'border-primary'
                          : 'border-gray-300'
                      } focus:outline-none`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                      }}
                      aria-label={color}
                    ></button>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters Button */}
              <button 
                onClick={() => {
                  setSortBy('featured');
                  setPriceRange([0, 10000]);
                  setSelectedSizes([]);
                  setSelectedColors([]);
                }}
                className="w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                Clear All Filters
              </button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="w-full lg:w-3/4">
            {status === 'loading' ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : status === 'failed' ? (
              <div className="text-center text-red-500">
                <p>Error: {error}</p>
              </div>
            ) : sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">{sortedProducts.length} products</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ y: -10 }}
                      className="group"
                    >
                      <Link to={`/product/${product.id}`} className="block relative rounded-lg overflow-hidden">
                        <div className="aspect-w-1 aspect-h-1">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {product.isNew && (
                          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                            NEW
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex justify-center space-x-4">
                            <button className="text-dark hover:text-primary transition-colors duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                            <button className="text-dark hover:text-primary transition-colors duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                            </button>
                            <button className="text-dark hover:text-primary transition-colors duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </Link>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-dark">{product.name}</h3>
                          <span className="text-primary font-bold">{formatPrice(product.price)}</span>
                        </div>
                        <p className="text-gray-500 text-sm">{product.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
