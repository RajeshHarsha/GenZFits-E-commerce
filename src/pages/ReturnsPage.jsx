import React from 'react';
import { motion } from 'framer-motion';

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Returns & Refunds</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Return Policy</h2>
            
            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Eligibility for Returns</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>We accept returns within 30 days of delivery</li>
                <li>Items must be unused and in their original condition</li>
                <li>Original tags and packaging must be intact</li>
                <li>Items must be returned with all accessories included</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">How to Return</h3>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Log in to your account and navigate to your order history</li>
                <li>Select the order you wish to return</li>
                <li>Choose the items you want to return</li>
                <li>Print the return label provided</li>
                <li>Package your items securely and affix the return label</li>
                <li>Drop off the package at your nearest shipping location</li>
              </ol>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Refund Process</h3>
              <p className="text-gray-600 mb-4">
                Once we receive and inspect your returned items, we'll process your refund within 5-7 business days.
                The refund will be issued to the original payment method.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Important Notes:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Refunds may take 3-5 business days to reflect in your account</li>
                  <li>Shipping costs are non-refundable</li>
                  <li>We recommend using a trackable shipping service when returning items</li>
                  <li>Items damaged during shipping may not be eligible for refund</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Non-Returnable Items</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Custom or personalized items</li>
                <li>Intimate apparel (underwear, bras, etc.)</li>
                <li>Perfumes and fragrances</li>
                <li>Items marked as "Final Sale"</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">FAQs</h3>
              <div className="space-y-6">
                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">How long does it take to process a return?</summary>
                  <p className="text-gray-600 mt-2">
                    We typically process returns within 2-3 business days of receiving your returned items.
                    Refunds are processed within 5-7 business days after we receive and inspect the items.
                  </p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">Can I exchange an item instead of returning it?</summary>
                  <p className="text-gray-600 mt-2">
                    Yes, you can exchange items for a different size or style within 30 days of delivery.
                    Please contact our customer service team to initiate an exchange.
                  </p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">What if my item was damaged during shipping?</summary>
                  <p className="text-gray-600 mt-2">
                    Please contact our customer service team immediately if you receive a damaged item.
                    We'll provide instructions for returning the damaged item and processing your refund or replacement.
                  </p>
                </details>
              </div>
            </section>

            <section className="text-center pt-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Contact our customer service team if you have any questions about returns or need assistance.
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
                  <p className="text-gray-900">support@genzfits.com</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnsPage;