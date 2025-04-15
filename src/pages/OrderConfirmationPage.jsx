import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { formatPrice } from '../utils/currencyFormatter';

const OrderConfirmationPage = () => {
  // Get order details from location state
  const location = useLocation();
  const orderDetails = location.state || {
    orderId: 'ORD1234567',
    amount: 1000,
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Fashion Street',
      city: 'Fashion City',
      state: 'Fashion State',
      zipCode: '12345'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <svg className="mx-auto h-12 w-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Thank you for shopping with GenZFits! Your order has been successfully placed.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Details</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Order Number</h3>
                <p className="text-primary font-semibold text-xl">{orderDetails.orderId}</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Amount Paid</h3>
                <p className="text-primary font-semibold text-xl">{formatPrice(orderDetails.amount)}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Shipping Address</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">{orderDetails.shippingAddress.fullName}</p>
                  <p className="text-gray-600">{orderDetails.shippingAddress.address}</p>
                  <p className="text-gray-600">{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.zipCode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/track-order"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Track Your Order
            </Link>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ml-4"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;