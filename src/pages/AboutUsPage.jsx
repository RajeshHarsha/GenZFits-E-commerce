import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">About Us</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to GenZFits, your premier destination for fashion excellence. Founded in 2024, we've been dedicated to providing high-quality clothing and accessories that combine style, comfort, and affordability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At GenZFits, our mission is to empower individuals to express their unique style while maintaining the highest standards of quality and customer service. We believe that fashion should be accessible to everyone without compromising on style or quality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Products</h3>
                <p className="text-gray-600">
                  We carefully curate our collection to ensure every piece meets our high standards of quality and craftsmanship.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We provide excellent customer service and easy returns to ensure you have a positive shopping experience.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
                <p className="text-gray-600">
                  We offer quick and reliable shipping options to get your fashion essentials to you as soon as possible.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Practices</h3>
                <p className="text-gray-600">
                  We're committed to sustainable fashion practices and working with ethical manufacturers.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600">contact@genzfits.com</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                <p className="text-gray-600">
                  123 Fashion Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;