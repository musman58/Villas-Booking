import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VillaDetailsPage from "./components/VillaDetails/VillaDetailsPage";
import AccommodationCategoryPage from "./pages/AccommodationCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-200        ">
        {/* Top-level wrapper for the entire application */}
        <div className="flex-grow flex flex-col">
          {/* Header with more space */}
          {/* <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          </div> */}

          {/* Main content with more space around */}
          <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 mx-auto w-full max-w-7xl">
            <Header />

            <div className="bg-white shadow-sm  p-6 sm:p-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/villa/:id" element={<VillaDetailsPage />} />
                <Route
                  path="/accommodation-category/:region"
                  element={<AccommodationCategoryPage />}
                />
              </Routes>
            </div>
            <Footer />
          </main>

          {/* Footer wrapped within the application div */}
          {/* <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import VillaDetailsPage from './components/VillaDetails/VillaDetailsPage';
// import AccommodationCategoryPage from './pages/AccommodationCategoryPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen flex flex-col">
//         {/* Header with white background and shadow */}
//         <div className="bg-white shadow-sm relative z-10">
//           <div className="container mx-auto px-4 xl:px-8">
//             <Header />
//           </div>
//         </div>

//         {/* Main content without padding to allow full-width sections */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/villa/:id" element={<VillaDetailsPage />} />
//             <Route path="/accommodation-category/:region" element={<AccommodationCategoryPage />} />
//           </Routes>
//         </main>

//         {/* Footer with container for content width control */}
//         <div className="bg-white border-t">
//           <div className="container mx-auto px-4 xl:px-8">
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
