import React from 'react';
import DishCard from './DishCard';
import Navigation from './Navigation';
import SectionHeader from './SectionHeader';
import useCarousel from '../../hooks/useCarousel';
import { dishes } from '../../data/dishes';

const ITEMS_PER_VIEW = 3;

const StandoutDishes = () => {
  const {
    currentIndex,
    isAnimating,
    handleNext,
    handlePrevious,
    canGoNext,
    canGoPrevious
  } = useCarousel(dishes, ITEMS_PER_VIEW);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <SectionHeader 
            subtitle="SPECIAL DISHES" 
            title="Standout Dishes From Our Menu" 
          />
          <div className="hidden md:block">
            <Navigation 
              onPrevious={handlePrevious} 
              onNext={handleNext}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
            />
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / ITEMS_PER_VIEW)}%)`,
              opacity: isAnimating ? 0.7 : 1,
              gap: '2rem'
            }}
          >
            {dishes.map((dish) => (
              <div 
                key={dish.id} 
                className="flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <DishCard
                  image={dish.image}
                  title={dish.title}
                  description={dish.description}
                  price={dish.price}
                  rating={dish.rating}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Navigation 
            onPrevious={handlePrevious} 
            onNext={handleNext}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
          />
        </div>
      </div>
    </section>
  );
};

export default StandoutDishes;