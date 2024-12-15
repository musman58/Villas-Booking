// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaGlobe,
//   FaSearch,
//   FaChevronDown,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <nav className="bg-white border-b relative">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <Link to={"/"} className="text-xl font-bold">
//               VILLAGIO
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleSearch}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none mr-4"
//             >
//               <FaSearch className="h-5 w-5" />
//             </button>
//             <button
//               onClick={toggleMenu}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               {isOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FaBars className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             <div className="relative group">
//               <Link to={'/accommodation-category/aosta-valley'} className="flex items-center space-x-1">
//                 REGION <FaChevronDown className="h-4 w-4" />
//               </Link>
//               <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
//                 <Link
//                   to={"/accommodation-category/aosta-valley"}
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Europe
//                 </Link>
//                 <Link
//                   to={"/accommodation-category/aosta-valley"}
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Asia
//                 </Link>
//                 <Link
//                   to={"/accommodation-category/aosta-valley"}
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Americas
//                 </Link>
//               </div>
//             </div>

//             <a href="/services" className="hover:text-gray-600">
//               SERVICES
//             </a>

//             <div className="relative group">
//               <button className="flex items-center space-x-1">
//                 ACTIVITIES <FaChevronDown className="h-4 w-4" />
//               </button>
//               <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Sports
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Culture
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Adventure
//                 </a>
//               </div>
//             </div>

//             <a href="/news" className="hover:text-gray-600">
//               NEWS
//             </a>
//             <a href="/style-guide" className="hover:text-gray-600">
//               STYLE GUIDE
//             </a>
//             <a href="/shop" className="hover:text-gray-600">
//               SHOP
//             </a>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <a href="#" className="hover:text-gray-600">
//               <FaFacebookF className="h-5 w-5" />
//             </a>
//             <a href="#" className="hover:text-gray-600">
//               <FaInstagram className="h-5 w-5" />
//             </a>

//             <div className="relative group">
//               <button className="flex items-center space-x-1">
//                 <FaGlobe className="h-5 w-5" />
//                 <span>EN</span>
//               </button>
//               <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   English
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Español
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Français
//                 </a>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="flex items-center space-x-1">USD</button>
//               <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-2">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   USD
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   EUR
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   GBP
//                 </a>
//               </div>
//             </div>

//             <button onClick={toggleSearch} className="hover:text-gray-600">
//               <FaSearch className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               REGION
//             </a>
//             <a
//               href="/services"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               SERVICES
//             </a>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               ACTIVITIES
//             </a>
//             <a
//               href="/news"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               NEWS
//             </a>
//             <a
//               href="/style-guide"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               STYLE GUIDE
//             </a>
//             <a
//               href="/shop"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               SHOP
//             </a>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-5">
//               <div className="flex-shrink-0">
//                 <FaGlobe className="h-6 w-6 text-gray-400" />
//               </div>
//               <div className="ml-3">
//                 <div className="text-base font-medium text-gray-800">EN</div>
//                 <div className="text-sm font-medium text-gray-500">USD</div>
//               </div>
//             </div>
//             <div className="mt-3 px-2 space-y-1">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 <FaFacebookF className="inline-block h-5 w-5 mr-2" /> Facebook
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 <FaInstagram className="inline-block h-5 w-5 mr-2" /> Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Full-width search bar */}
//       <div
//         className={`absolute left-0 right-0 bg-white z-50 transition-all duration-300 ease-in-out ${
//           isSearchOpen ? "top-16 opacity-100" : "-top-full opacity-0"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="flex items-center"
//           >
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
//             />
//             <button
//               type="submit"
//               className="ml-2 text-gray-600 hover:text-gray-900"
//             >
//               <FaSearch className="h-5 w-5" />
//             </button>
//             <button
//               onClick={toggleSearch}
//               className="ml-4 text-gray-600 hover:text-gray-900"
//             >
//               <FaTimes className="h-5 w-5" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaGlobe,
//   FaSearch,
//   FaChevronDown,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setActiveDropdown(null);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     setIsOpen(false);
//   };

//   const toggleDropdown = (dropdownName) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   return (
//     <nav className="bg-white border-b relative">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to={"/"} className="text-xl font-bold transition-colors hover:text-gray-700">
//               VILLAGIO
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center gap-2">
//             <button
//               onClick={toggleSearch}
//               className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md"
//               aria-label="Toggle search"
//             >
//               <FaSearch className="h-5 w-5" />
//             </button>
//             <button
//               onClick={toggleMenu}
//               className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FaBars className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center justify-between flex-1 ml-8">
//             <div className="flex items-center space-x-6">
//               {/* Region Dropdown */}
//               <div className="relative group">
//                 <Link
//                   to={'/accommodation-category/aosta-valley'}
//                   className="flex items-center space-x-1 group hover:text-gray-600 transition-colors"
//                 >
//                   <span>REGION</span>
//                   <FaChevronDown className="h-4 w-4 group-hover:transform group-hover:-rotate-180 transition-transform" />
//                 </Link>
//                 <div className="absolute z-20 hidden group-hover:block bg-white border rounded-md mt-2 shadow-lg w-48">
//                   <div className="py-1">
//                     <Link
//                       to={"/accommodation-category/aosta-valley"}
//                       className="block px-4 py-2 hover:bg-gray-50 transition-colors"
//                     >
//                       Europe
//                     </Link>
//                     <Link
//                       to={"/accommodation-category/aosta-valley"}
//                       className="block px-4 py-2 hover:bg-gray-50 transition-colors"
//                     >
//                       Asia
//                     </Link>
//                     <Link
//                       to={"/accommodation-category/aosta-valley"}
//                       className="block px-4 py-2 hover:bg-gray-50 transition-colors"
//                     >
//                       Americas
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <Link to="/services" className="hover:text-gray-600 transition-colors">
//                 SERVICES
//               </Link>

//               {/* Activities Dropdown */}
//               <div className="relative group">
//                 <button className="flex items-center space-x-1 group hover:text-gray-600 transition-colors">
//                   <span>ACTIVITIES</span>
//                   <FaChevronDown className="h-4 w-4 group-hover:transform group-hover:-rotate-180 transition-transform" />
//                 </button>
//                 <div className="absolute z-20 hidden group-hover:block bg-white border rounded-md mt-2 shadow-lg w-48">
//                   <div className="py-1">
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       Sports
//                     </a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       Culture
//                     </a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       Adventure
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <Link to="/news" className="hover:text-gray-600 transition-colors">
//                 NEWS
//               </Link>
//               <Link to="/style-guide" className="hover:text-gray-600 transition-colors">
//                 STYLE GUIDE
//               </Link>
//               <Link to="/shop" className="hover:text-gray-600 transition-colors">
//                 SHOP
//               </Link>
//             </div>

//             {/* Right side icons and dropdowns */}
//             <div className="flex items-center space-x-4">
//               <a href="#" className="hover:text-gray-600 transition-colors p-1">
//                 <FaFacebookF className="h-5 w-5" />
//               </a>
//               <a href="#" className="hover:text-gray-600 transition-colors p-1">
//                 <FaInstagram className="h-5 w-5" />
//               </a>

//               {/* Language Dropdown */}
//               <div className="relative group">
//                 <button className="flex items-center space-x-1 group p-1">
//                   <FaGlobe className="h-5 w-5" />
//                   <span>EN</span>
//                 </button>
//                 <div className="absolute right-0 z-20 hidden group-hover:block bg-white border rounded-md mt-2 shadow-lg w-40">
//                   <div className="py-1">
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       English
//                     </a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       Español
//                     </a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       Français
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Currency Dropdown */}
//               <div className="relative group">
//                 <button className="flex items-center space-x-1 group p-1">USD</button>
//                 <div className="absolute right-0 z-20 hidden group-hover:block bg-white border rounded-md mt-2 shadow-lg w-40">
//                   <div className="py-1">
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       USD
//                     </a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       EUR
//                     </a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
//                       GBP
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={toggleSearch}
//                 className="hover:text-gray-600 transition-colors p-1"
//                 aria-label="Search"
//               >
//                 <FaSearch className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out ${
//             isOpen
//               ? "max-h-screen opacity-100 visible"
//               : "max-h-0 opacity-0 invisible"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {/* Mobile Region Dropdown */}
//             <div>
//               <button
//                 onClick={() => toggleDropdown('region')}
//                 className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 REGION
//                 <FaChevronDown className={`h-4 w-4 transition-transform ${
//                   activeDropdown === 'region' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               {activeDropdown === 'region' && (
//                 <div className="pl-4 space-y-1">
//                   <Link
//                     to="/accommodation-category/aosta-valley"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                   >
//                     Europe
//                   </Link>
//                   <Link
//                     to="/accommodation-category/aosta-valley"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                   >
//                     Asia
//                   </Link>
//                   <Link
//                     to="/accommodation-category/aosta-valley"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                   >
//                     Americas
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/services"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               SERVICES
//             </Link>

//             {/* Mobile Activities Dropdown */}
//             <div>
//               <button
//                 onClick={() => toggleDropdown('activities')}
//                 className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 ACTIVITIES
//                 <FaChevronDown className={`h-4 w-4 transition-transform ${
//                   activeDropdown === 'activities' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               {activeDropdown === 'activities' && (
//                 <div className="pl-4 space-y-1">
//                   <a
//                     href="#"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                   >
//                     Sports
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                   >
//                     Culture
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                   >
//                     Adventure
//                   </a>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/news"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               NEWS
//             </Link>
//             <Link
//               to="/style-guide"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               STYLE GUIDE
//             </Link>
//             <Link
//               to="/shop"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             >
//               SHOP
//             </Link>
//           </div>

//           {/* Mobile menu footer */}
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-5">
//               <div className="flex-shrink-0">
//                 <FaGlobe className="h-6 w-6 text-gray-400" />
//               </div>
//               <div className="ml-3">
//                 <div className="text-base font-medium text-gray-800">EN</div>
//                 <div className="text-sm font-medium text-gray-500">USD</div>
//               </div>
//             </div>
//             <div className="mt-3 px-2 space-y-1">
//               <a
//                 href="#"
//                 className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 <FaFacebookF className="h-5 w-5 mr-2" /> Facebook
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 <FaInstagram className="h-5 w-5 mr-2" /> Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search bar */}
//       <div
//         className={`absolute left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
//           isSearchOpen ? "top-16 opacity-100" : "-top-full opacity-0"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
//             />
//             <button
//               type="submit"
//               className="ml-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <FaSearch className="h-5 w-5" />
//             </button>
//             <button
//               onClick={toggleSearch}
//               className="ml-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
//               aria-label="Close search"
//             >
//               <FaTimes className="h-5 w-5" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



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
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsOpen(false);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white border-b relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to={"/"}
              className="text-xl font-bold transition-colors hover:text-gray-700"
            >
              VILLAGIO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md"
              aria-label="Toggle search"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            <div className="flex items-center space-x-6">
              {/* Region Dropdown */}
              <div className="relative group">
                <Link
                  to={"/accommodation-category/aosta-valley"}
                  className="flex items-center space-x-1 group hover:text-gray-600 transition-colors py-2"
                >
                  <span>REGION</span>
                  <FaChevronDown className="h-4 w-4 group-hover:transform group-hover:-rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute z-20 hidden group-hover:block bg-white border rounded-md shadow-lg w-48 top-full">
                  <div className="py-1">
                    <Link
                      to={"/accommodation-category/aosta-valley"}
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Europe
                    </Link>
                    <Link
                      to={"/accommodation-category/aosta-valley"}
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Asia
                    </Link>
                    <Link
                      to={"/accommodation-category/aosta-valley"}
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Americas
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/services"
                className="hover:text-gray-600 transition-colors py-2"
              >
                SERVICES
              </Link>

              {/* Activities Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 group hover:text-gray-600 transition-colors py-2">
                  <span>ACTIVITIES</span>
                  <FaChevronDown className="h-4 w-4 group-hover:transform group-hover:-rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute z-20 hidden group-hover:block bg-white border rounded-md shadow-lg w-48 top-full">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Sports
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Culture
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Adventure
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/news"
                className="hover:text-gray-600 transition-colors py-2"
              >
                NEWS
              </Link>
              <Link
                to="/style-guide"
                className="hover:text-gray-600 transition-colors py-2"
              >
                STYLE GUIDE
              </Link>
              <Link
                to="/shop"
                className="hover:text-gray-600 transition-colors py-2"
              >
                SHOP
              </Link>
            </div>

            {/* Right side icons and dropdowns */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-600 transition-colors p-2">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors p-2">
                <FaInstagram className="h-5 w-5" />
              </a>

              {/* Language Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 group p-2">
                  <FaGlobe className="h-5 w-5" />
                  <span>EN</span>
                </button>
                <div className="absolute right-0 z-20 hidden group-hover:block bg-white border rounded-md shadow-lg w-40 top-full">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Español
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Français
                    </a>
                  </div>
                </div>
              </div>

              {/* Currency Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 group p-2">
                  USD
                </button>
                <div className="absolute right-0 z-20 hidden group-hover:block bg-white border rounded-md shadow-lg w-40 top-full">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      USD
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      EUR
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      GBP
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={toggleSearch}
                className="hover:text-gray-600 transition-colors p-2"
                aria-label="Search"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Region Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("region")}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                REGION
                <FaChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "region" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === "region"
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <Link
                  to="/accommodation-category/aosta-valley"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Europe
                </Link>
                <Link
                  to="/accommodation-category/aosta-valley"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Asia
                </Link>
                <Link
                  to="/accommodation-category/aosta-valley"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Americas
                </Link>
              </div>
            </div>

            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              SERVICES
            </Link>

            {/* Mobile Activities Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("activities")}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                ACTIVITIES
                <FaChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "activities" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === "activities"
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Sports
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Culture
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Adventure
                </a>
              </div>
            </div>

            <Link
              to="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              NEWS
            </Link>
            <Link
              to="/style-guide"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              STYLE GUIDE
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              SHOP
            </Link>
          </div>

          {/* Mobile menu footer */}
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
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <FaFacebookF className="h-5 w-5 mr-2" /> Facebook
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <FaInstagram className="h-5 w-5 mr-2" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div
        className={`absolute left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
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
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            />
            <button
              type="submit"
              className="ml-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleSearch}
              className="ml-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close search"
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
