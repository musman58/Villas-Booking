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
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4">
            <Header />
          </div>

          {/* Main content with more space around */}
          <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-12 mx-auto w-full ">
            <div className="bg-white shadow-sm  ">
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
