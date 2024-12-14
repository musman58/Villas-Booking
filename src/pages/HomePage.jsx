import React from 'react';
import HeroSlider from '../components/HeroSlider';
import SearchForm from '../components/SearchForm';
import VillaCard from '../components/VillaCard';
import Reviews from '../components/Reviews';
import { villas } from '../data/villas';

const HomePage = () => {
  return (
    <main>
      <HeroSlider />
      
      <div className="container mx-auto mt-8 px-4">
        <SearchForm />
        
        <section className="py-16">
          {/* <h2 className="text-3xl font-bold text-center mb-12">Featured Villas</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {villas.map((villa) => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>
        </section>
        
        <Reviews />
      </div>
    </main>
  );
};

export default HomePage;