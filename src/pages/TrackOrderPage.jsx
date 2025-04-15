import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  const mockOrderDetails = {
    orderId: 'ORD123456',
    status: 'delivered',
    items: [
      {
        id: 1,
        name: 'Men\'s Casual T-Shirt',
        image: '/images/tshirt.jpg',
        quantity: 1,
        price: 29.99
      },
      {
        id: 2,
        name: 'Jeans',
        image: '/images/jeans.jpg',
        quantity: 1,
        price: 49.99
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Fashion Street',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    },
    shippingStatus: [
      {
        status: 'Order Placed',
        date: '2024-03-15',
        description: 'Your order has been placed successfully'
      },
      {
        status: 'Processing',
        date: '2024-03-16',
        description: 'Your order is being processed'
      },
      {
        status: 'Shipped',
        date: '2024-03-17',
        description: 'Your order has been shipped'
      },
      {
        status: 'Out for Delivery',
        date: '2024-03-18',
        description: 'Your order is out for delivery'
      },
      {
        status: 'Delivered',
        date: '2024-03-19',
        description: 'Your order has been delivered'
      }
    ]
  };

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, you would make an API call here
      // For now, we'll use mock data
      if (orderNumber && email) {
        setOrderDetails(mockOrderDetails);
      } else {
        throw new Error('Please enter both order number and email');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Track Your Order</h1>

          {/* Track Order Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleTrackOrder} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Number</label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter your order number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                {loading ? 'Tracking...' : 'Track Order'}
              </button>
            </form>
          </div>

          {/* Order Details */}
          {orderDetails && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-12 bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Order Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-600">Order Number:</span>
                      <span className="font-medium text-gray-900 ml-2">{orderDetails.orderId}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className={`font-medium ml-2 ${orderDetails.status === 'delivered' ? 'text-green-600' : 'text-gray-900'}`}>
                        {orderDetails.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Total Items:</span>
                      <span className="font-medium text-gray-900 ml-2">{orderDetails.items.length}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h3>
                  <div className="space-y-2">
                    <p className="text-gray-900">{orderDetails.shippingAddress.name}</p>
                    <p className="text-gray-600">{orderDetails.shippingAddress.address}</p>
                    <p className="text-gray-600">{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}</p>
                    <p className="text-gray-600">{orderDetails.shippingAddress.zip}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Items in Order</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          <p className="text-sm font-medium text-primary">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Status */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Status</h3>
                <div className="space-y-4">
                  {orderDetails.shippingStatus.map((status, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400"></div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{status.status}</h4>
                        <p className="text-sm text-gray-600">{status.date}</p>
                        <p className="text-sm text-gray-600">{status.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8">
              {error}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TrackOrderPage;