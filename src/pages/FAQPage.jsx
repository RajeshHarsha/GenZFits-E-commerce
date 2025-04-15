import React from 'react';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const faqSections = [
    {
      title: 'Ordering & Payment',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          question: 'How do I place an order?',
          answer: 'You can place an order by browsing our products, selecting the items you want, and proceeding to checkout. You can pay using credit card, debit card, or PayPal.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. Your data is never stored on our servers.'
        },
        {
          question: 'Can I cancel my order?',
          answer: 'You can cancel your order within 24 hours of placing it. After that, please contact our customer service team.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International shipping takes 7-14 business days.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, you can track your order using the tracking number provided in your shipping confirmation email. You can also track orders through your account dashboard.'
        },
        {
          question: 'What if my order is delayed?',
          answer: 'We will notify you if there are any delays. For significant delays, we will contact you to discuss options or provide a refund.'
        }
      ]
    },
    {
      title: 'Returns & Exchanges',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      ),
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We accept returns within 30 days of delivery. Items must be unused and in their original condition. Original tags and packaging must be intact.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Log in to your account, navigate to your order history, select the order, choose the items to return, and print the return label provided.'
        },
        {
          question: 'Can I exchange an item?',
          answer: 'Yes, you can exchange items for a different size or style within 30 days of delivery. Please contact our customer service team to initiate an exchange.'
        }
      ]
    },
    {
      title: 'Product Information',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          question: 'How do I determine my size?',
          answer: 'We provide detailed size charts for each product. You can also contact our customer service team for size recommendations.'
        },
        {
          question: 'What materials are your products made of?',
          answer: 'Our products are made from high-quality materials. Each product page lists the specific materials used in that item.'
        },
        {
          question: 'How do I care for my products?',
          answer: 'Care instructions are provided on each product page. Generally, we recommend machine washing in cold water and hanging to dry.'
        }
      ]
    },
    {
      title: 'Account & Profile',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'You can create an account during checkout or by clicking the "Create Account" link in the navigation menu.'
        },
        {
          question: 'How do I update my account information?',
          answer: 'Log in to your account and navigate to the "Profile" section to update your personal information, address, and payment methods.'
        },
        {
          question: 'What if I forget my password?',
          answer: 'Click the "Forgot Password" link on the login page to reset your password. You will receive an email with instructions.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Frequently Asked Questions
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {faqSections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary-light rounded-full">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.questions.map((q, qIndex) => (
                    <details key={qIndex} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                      <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-900">{q.question}</span>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="p-6 text-gray-600"
                      >
                        {q.answer}
                      </motion.div>
                    </details>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;