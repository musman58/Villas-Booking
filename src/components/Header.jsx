import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGlobe,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white border-b relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to={"/"} className="text-xl font-bold">
              VILLAGIO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-900 focus:outline-none mr-4"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link to={'/accommodation-category/aosta-valley'} className="flex items-center space-x-1">
                REGION <FaChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
                <Link
                  to={"/accommodation-category/aosta-valley"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Europe
                </Link>
                <Link
                  to={"/accommodation-category/aosta-valley"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Asia
                </Link>
                <Link
                  to={"/accommodation-category/aosta-valley"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Americas
                </Link>
              </div>
            </div>

            <a href="/services" className="hover:text-gray-600">
              SERVICES
            </a>

            <div className="relative group">
              <button className="flex items-center space-x-1">
                ACTIVITIES <FaChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sports
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Culture
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Adventure
                </a>
              </div>
            </div>

            <a href="/news" className="hover:text-gray-600">
              NEWS
            </a>
            <a href="/style-guide" className="hover:text-gray-600">
              STYLE GUIDE
            </a>
            <a href="/shop" className="hover:text-gray-600">
              SHOP
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-600">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaInstagram className="h-5 w-5" />
            </a>

            <div className="relative group">
              <button className="flex items-center space-x-1">
                <FaGlobe className="h-5 w-5" />
                <span>EN</span>
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  English
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Español
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Français
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1">USD</button>
              <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  USD
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  EUR
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  GBP
                </a>
              </div>
            </div>

            <button onClick={toggleSearch} className="hover:text-gray-600">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              REGION
            </a>
            <a
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              ACTIVITIES
            </a>
            <a
              href="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              NEWS
            </a>
            <a
              href="/style-guide"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              STYLE GUIDE
            </a>
            <a
              href="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              SHOP
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <FaGlobe className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">EN</div>
                <div className="text-sm font-medium text-gray-500">USD</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <FaFacebookF className="inline-block h-5 w-5 mr-2" /> Facebook
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <FaInstagram className="inline-block h-5 w-5 mr-2" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width search bar */}
      <div
        className={`absolute left-0 right-0 bg-white z-50 transition-all duration-300 ease-in-out ${
          isSearchOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button
              type="submit"
              className="ml-2 text-gray-600 hover:text-gray-900"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleSearch}
              className="ml-4 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
