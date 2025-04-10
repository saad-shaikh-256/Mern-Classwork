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
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Quick Links
            </h3>
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
                  to="/Form"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/formValidation"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Form Validation
                </Link>
              </li>
              <li>
                <Link
                  to="/localStorage"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Local Storage
                </Link>
              </li>
              <li>
                <Link
                  to="/ShowlocalData"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Local Data
                </Link>
              </li>
              <li>
                <Link
                  to="/useMemoDemo"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useMemo Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/useMemoPractical"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useMemo Practical
                </Link>
              </li>
              <li>
                <Link
                  to="/useEffectDemo"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useEffect Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/useReferenceDemo"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useReference Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/useReferencePractical"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useReference Practical
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/useReducerDemo"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useReducer Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/useContext"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  useContext Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/axiosDemo"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Show Data Using API
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
