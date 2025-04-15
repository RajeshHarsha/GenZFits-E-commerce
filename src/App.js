import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import NewArrivals from './pages/NewArrivals';
import Wishlist from './pages/Wishlist';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import AccountPage from './pages/AccountPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import TrackOrderPage from './pages/TrackOrderPage';
import ReturnsPage from './pages/ReturnsPage';
import ShippingPage from './pages/ShippingPage';
import FAQPage from './pages/FAQPage';
import ProceedToCheckoutPage from './pages/ProceedToCheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/proceed-to-checkout" element={<ProceedToCheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          {/* Additional routes will be added as we develop more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
