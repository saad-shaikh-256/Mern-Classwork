import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
   const currentYear = new Date().getFullYear(); // Get the current year

   return (
      <footer className="bg-white shadow-sm mt-16">
         <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {/* Column 1 */}
               <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           to="/StudentTable"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Student-Table
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/Counter"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Counter
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/Calculator"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Calculator
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Contact Us
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Column 2 */}
               <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Services</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Web Development
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Mobile Apps
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Cloud Solutions
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           AI & ML
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Column 3 */}
               <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Resources</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Documentation
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Tutorials
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           FAQ
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Support
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Column 4 */}
               <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Legal</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Privacy Policy
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Terms of Service
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Cookies
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/"
                           className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                           Licensing
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-200 mt-8 pt-8 text-center">
               <p className="text-gray-600">
                  &copy; {currentYear} Saad Shaikh. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;