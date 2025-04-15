import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';          // later added
import { useNavigate } from 'react-router-dom';    // later added

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);               // later added
  const navigate = useNavigate();                                            // later added
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);  // later added
  const user = useSelector(state => state.auth.user);                         // later added

  const categories = [
    { name: "Men's Fashion", path: "/category/mens" },
    { name: "Women's Fashion", path: "/category/womens" },
    { name: "Footwear", path: "/category/footwear" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "Skin & Beauty", path: "/category/beauty" },
  ];

const handleLogin = () => {                              // later added
  navigate('/login');
};

const handleSignup = () => {                             // later added
  navigate('/signup');
};

const handleLogout = () => {                               // later added
  // Here you would typically dispatch a logout action
  // For now, we'll just navigate to home
  navigate('/');
};


  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="text-3xl font-heading font-bold text-primary">
              GenZFits
            </Link>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={category.path}
                  className="text-dark hover:text-primary transition-colors duration-300"
                >
                  {category.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/search" className="text-dark hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/wishlist" className="text-dark hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/cart" className="text-dark hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/account" className="text-dark hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </motion.div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <nav className="flex flex-col space-y-4 py-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="text-dark hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const user = useSelector(state => state.auth.user);

//   const categories = [
//     { name: "Men's Fashion", path: "/category/mens" },
//     { name: "Women's Fashion", path: "/category/womens" },
//     { name: "Footwear", path: "/category/footwear" },
//     { name: "Accessories", path: "/category/accessories" },
//     { name: "Skin & Beauty", path: "/category/beauty" },
//   ];

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleSignup = () => {
//     navigate('/signup');
//   };

//   const handleLogout = () => {
//     // Here you would typically dispatch a logout action
//     // For now, we'll just navigate to home
//     navigate('/');
//   };

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center"
//           >
//             <Link to="/" className="text-3xl font-heading font-bold text-primary">
//               GenZFits
//             </Link>
//           </motion.div>

//           {/* Navigation */}
//           <motion.nav 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="hidden md:flex items-center space-x-8"
//           >
//             {categories.map((category) => (
//               <Link 
//                 key={category.path}
//                 to={category.path}
//                 className="text-gray-600 hover:text-primary transition-colors duration-300"
//               >
//                 {category.name}
//               </Link>
//             ))}
//           </motion.nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-gray-600 hover:text-primary"
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </motion.button>

//           {/* User Actions */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="hidden md:flex items-center space-x-4"
//           >
//             {!isAuthenticated ? (
//               <>
//                 <button
//                   onClick={handleLogin}
//                   className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={handleSignup}
//                   className="px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-primary hover:text-white"
//                 >
//                   Signup
//                 </button>
//               </>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//                   className="flex items-center space-x-2 text-gray-600 hover:text-primary"
//                 >
//                   <span className="text-sm">{user?.name || 'User'}</span>
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {isUserMenuOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
//                   >
//                     <div className="py-1">
//                       <Link
//                         to="/account"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => setIsUserMenuOpen(false)}
//                       >
//                         My Account
//                       </Link>
//                       <Link
//                         to="/orders"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => setIsUserMenuOpen(false)}
//                       >
//                         My Orders
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             )}
//           </motion.div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden mt-4"
//           >
//             <div className="border-t border-gray-200 pt-4">
//               {categories.map((category) => (
//                 <Link 
//                   key={category.path}
//                   to={category.path}
//                   className="block py-2 text-gray-600 hover:text-primary"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {category.name}
//                 </Link>
//               ))}
//             </div>
//             <div className="mt-4">
//               {!isAuthenticated ? (
//                 <>
//                   <button
//                     onClick={handleLogin}
//                     className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md mb-2"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={handleSignup}
//                     className="w-full px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md"
//                   >
//                     Signup
//                   </button>
//                 </>
//               ) : (
//                 <div className="space-y-2">
//                   <Link to="/account" className="block px-4 py-2 text-gray-600 hover:text-primary">
//                     My Account
//                   </Link>
//                   <Link to="/orders" className="block px-4 py-2 text-gray-600 hover:text-primary">
//                     My Orders
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full px-4 py-2 text-sm font-medium text-red-500 hover:text-red-700"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;