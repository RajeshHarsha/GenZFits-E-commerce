import React from 'react';
import { motion } from 'framer-motion';

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Shipping & Delivery</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Shipping Information</h2>
            
            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Shipping Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Standard Shipping</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Free for orders over $50</li>
                    <li>$5.99 for orders under $50</li>
                    <li>Delivery within 5-7 business days</li>
                    <li>Trackable via email updates</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Express Shipping</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>$14.99 flat rate</li>
                    <li>Delivery within 2-3 business days</li>
                    <li>Priority processing</li>
                    <li>Real-time tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Shipping Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Domestic Shipping</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Available in all 50 US states</li>
                    <li>Free shipping for orders over $50</li>
                    <li>No import duties</li>
                    <li>Local currency payment</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">International Shipping</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Available to most countries</li>
                    <li>Shipping rates vary by country</li>
                    <li>Import duties may apply</li>
                    <li>Estimated delivery 7-14 days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Shipping Times</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Order Processing</h4>
                  <p className="text-gray-600">
                    Orders are processed within 1-2 business days after payment confirmation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Delivery Times</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Standard Shipping: 5-7 business days</li>
                    <li>Express Shipping: 2-3 business days</li>
                    <li>International: 7-14 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Shipping FAQs</h3>
              <div className="space-y-6">
                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">How can I track my order?</summary>
                  <p className="text-gray-600 mt-2">
                    Once your order ships, you'll receive an email with tracking information.
                    You can also track your order through our website using your order number.
                  </p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">What happens if my order is delayed?</summary>
                  <p className="text-gray-600 mt-2">
                    We'll notify you if there are any delays. For significant delays,
                    we'll contact you to discuss options or provide a refund.
                  </p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">Can I change my shipping address?</summary>
                  <p className="text-gray-600 mt-2">
                    Please contact us immediately if you need to change your shipping address.
                    We can only make changes before your order has shipped.
                  </p>
                </details>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Shipping Requirements</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Address Verification</h4>
                  <p className="text-gray-600">
                    Please ensure your shipping address is complete and accurate.
                    We cannot be held responsible for orders shipped to incorrect addresses.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Delivery Confirmation</h4>
                  <p className="text-gray-600">
                    All orders require signature confirmation upon delivery.
                    Please ensure someone is available to sign for the package.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center pt-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Contact our shipping department if you have any questions or need assistance.
              </p>
              <div className="space-y-4">
                <div className="flex justify-center items-center space-x-4">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-900">+1 (555) 123-4567</p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-900">shipping@genzfits.com</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPage;