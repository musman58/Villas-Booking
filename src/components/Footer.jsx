import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-gray-100 p-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-gray-800">ABOUT US</h3>
              <p className="text-gray-600">
                We are one of the most recognized happy vacation makers in Italy
                – we provide a wide range of great villas for any occasion since
                2015. Any type of a winter or summer villa can be found on the
                site.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-600">RECENT NEWS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Unforgettable Vignanello garden tour in Lazio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Special discounts for Italian castles tour!
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Places of interest near summer villa Emilia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-600">LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    How to book
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    General letting conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Travel agent resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2024 Villagio. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="tel:+19545456789"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Phone className="w-4 h-4" />
                +1 (954) 545-6789
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Mail className="w-4 h-4" />
                410 Sunny St, Florida, FL
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
